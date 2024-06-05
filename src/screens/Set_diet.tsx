import React, { useEffect, useRef, useState } from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import {
    Form,
    Input,
    Select,
    message,
    Button,
} from 'antd';
import { useNavigate } from "react-router-dom";
import BackNSave from '@/components/CommonButtons';
import { BovinoType } from '@/types/bovino';
import { MedicamentoType } from '@/types/medicamento';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { MessageType } from 'antd/es/message/interface';
import {Medicamento_aplicadoType} from '@/types/vacina';

const fetchMedicamentos = () => {
    return axios.get<MedicamentoType[]>('http://localhost:6754/medicamento').then(({ data }) => data);
}

const Vaccinate: React.FC = () => {

    const [ ready, setReady ] = useState(false);
    const [ loadingBovino, setLoadingBovino ] = useState(false);
    const [ brincoRead, setBrincoRead ] = useState(false);
    const [ bovino, setBovino ] = useState<BovinoType>();

    const [loading, setLoading] = useState<boolean>(false);
    const [insertionResult, setInsertionResult] = useState<Medicamento_aplicadoType>();

    const navigate = useNavigate();

    const [form] = Form.useForm();

    const getMedicamentos = useQuery({
        queryKey: [ 'getMedicamentos' ],
        queryFn: fetchMedicamentos,
    });

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    const onFinish = async (values: any) =>{
        try{
            const { peso_atual, ...medicamento } = values;
            const insert1 = await axios.post('http://localhost:6754/vacina', { ...medicamento, id_bovino: bovino?.id_bovino });
            const insert2 = await axios.patch(`http://localhost:6754/bovino/${bovino?.id_bovino}`, { peso_atual });
            console.log({
                insert1,
                insert2
            });

            window.location.reload();
        }
        catch (err){
            console.error(err);
            message.error('Erro ao inserir medicamento')
        }
        finally{
            setLoading(false);
        }
    };

    useEffect(() => console.log({ bovino }), [ bovino ]);

    useEffect(() => {
        setReady(true);
    }, []);

    useEffect(() => {

    }, [ ready ]);

    if(getMedicamentos.isLoading) return <div>
        Carregando...
    </div>;

    if(getMedicamentos.isError) return <div>
        { getMedicamentos.error.message }
    </div>

    

    // const hideLoading = useRef<MessageType>();

    

    

    return (

        <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
             <Form
                // {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                // initialValues={{ prefix: '55' }}
                // style={{ maxWidth: 600 }}
                scrollToFirstError
                // disabled={loading}
            >
               

            {
                !bovino &&
                <>  
                  <div>
                    <h3>Definir Dieta do Bovino</h3>
                  </div>
                    <Button
                        onClick={async () => {
                            try{
                                setLoadingBovino(true);
                                const result = await axios.get<{ payload: BovinoType }>('http://localhost:6754/bovino/rfid').then(({ data }) => data.payload);
                                setBovino(result);
                                setBrincoRead(true);
                            }
                            catch(err){
                                console.error(err);
                                if(axios.isAxiosError(err)){
                                    message.error('Erro ao ler bovino: ' + err.response?.data.message);
                                }
                                else{
                                    message.error('Erro ao ler bovino: ' + (err as Error).message);
                                }
                            }
                            finally{
                                setLoadingBovino(false);
                            }
                        }}
                        loading={loadingBovino}
                    >
                        Ler bovino
                    </Button>

                    <div style={{ height: 50 }}></div>
                </>
                
            }

            {
                bovino
                && <div style={{ marginBottom: 60, maxWidth: 590 }}>
                    <h1>
                        <strong>Bovino:</strong>
                        &nbsp;
                        { bovino.display_brinco }
                    </h1>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        fontSize: '14pt',
                    }}>
                        <span>
                            <strong>Raça:</strong>
                            &nbsp;
                            { bovino.raca }
                        </span>
                        <span>
                            <strong>Id brinco:</strong>
                            &nbsp;
                            { bovino.uid_brinco }
                        </span>
                        <span>
                            <strong>Nascimento:</strong>
                            &nbsp;
                            { new Date(bovino.data_nascimento).toLocaleDateString() }
                        </span>
                        <span>
                            <strong>Peso:</strong>
                            &nbsp;
                            { bovino.peso_atual }
                        </span>
                    </div>
                </div>
            }

            <div style={{ display: 'flex' }}>
            
                <div  >
                    <Form.Item
                        name="id_medicamento"
                        label=" "
                        tooltip="Definar a vacina desejada para vacinar o bovino"
                        rules={[{ required: true, message: 'Por favor seleciona a vacina!' }]}
                    >
                        <Select disabled={!brincoRead} placeholder="Definir Vacina" style={{ width: 550 }}>
                            <option value=""></option>
                            {
                                getMedicamentos.data &&
                                getMedicamentos.data.map(({ id_medicamento, tipo_medicamento, nome_medicamento }) => {
                                    return <option key={id_medicamento} value={id_medicamento}>{ `${nome_medicamento}/${tipo_medicamento}` }</option>
                                })
                            }
                        </Select>
                    </Form.Item>
                </div>
            </div>

            <Form.Item
                name="observacao"
                label=" "
                tooltip="Digite uma observação caso tenha uma. Este Campo não é obrigatório, mas ter o máximo de informação melhor para o desempenho do bovino."
            >
                <Input.TextArea disabled={!brincoRead} placeholder="Observação." autoSize={{ minRows: 1, maxRows: 6 }} spellCheck={true} />
            </Form.Item>

            <div style={{ display: 'flex' }}>

                <div >

                    <Form.Item
                        name="data_aplicada"
                        label=" "

                        tooltip="Selecione a data da vacinacao"
                        rules={[{ required: true, message: 'Por favor selecione a Data da vacinação' }]}
                    >
                        <DatePicker disabled={!brincoRead} onChange={onChange} placeholder="Data da Vacinação" style={{ width: 250 }} />
                    </Form.Item >
                </div>

                <div >
                    <Form.Item

                        name="peso_atual"
                        label=" "
                        tooltip="Informe o peso em Kg Atual do Bovino"

                        rules={[{ required: true, message: 'Por favor insira o peso', whitespace: true }]}

                    >
                        <Input disabled={!brincoRead} style={{ width: 250 }} placeholder="Peso de Atual" />
                    </Form.Item>
                </div>

            </div>



            {
                brincoRead &&
                <BackNSave
                    // onBackClick={() => {
                    //     navigate(-1);
                    // }}
                    onSaveClick={() => {
                        form.submit();
                    }}
                />
            }
            {
                !brincoRead &&
                <BackNSave
                    onBackClick={() => {
                        navigate(-1);
                    }}
                   
                />
            }
            
            </Form>
        </div>
    );
};

export default Vaccinate;