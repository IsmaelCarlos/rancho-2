
import React, { useEffect, useState } from 'react';
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
import axios from 'axios';

const Vaccinate: React.FC = () => {

    const [ ready, setReady ] = useState(false);
    const [ loadingBovino, setLoadingBovino ] = useState(false);
    const [ brincoRead, setBrincoRead ] = useState(false);
    const [ bovino, setBovino ] = useState<BovinoType>();

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    const navigate = useNavigate();

    useEffect(() => console.log({ bovino }), [ bovino ]);

    useEffect(() => {
        setReady(true);
    }, []);

    useEffect(() => {

    }, [ ready ]);

    return (

        <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>


            {
                !bovino &&
                <>
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

                        name="define_vacina"
                        label=" "
                        tooltip="Definar a vacina desejada para vacinar o bovino"
                        rules={[{ required: true, message: 'Por favor seleciona a vacina!' }]}
                    >
                        <Select disabled={!brincoRead} placeholder="Definir Vacina" style={{ width: 550 }}>
                            <option value=""></option>
                        </Select>
                    </Form.Item>
                </div>
            </div>

            <Form.Item
                name="uid_bovino"
                label=" "
                tooltip="Identificação do brinco, o número que contem no brinco"
                rules={[{ required: true, message: 'Por favor informe a identificação do brinco', whitespace: true }]}
            >
                <Input placeholder="Identificação do brinco" disabled={!brincoRead} />
            </Form.Item>

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
                        name="data_bovino"
                        label=" "

                        tooltip="Selecione a data da vacinacao"
                        rules={[{ required: true, message: 'Por favor selecione a Data da vacinação', whitespace: true }]}
                    >
                        <Space direction="vertical" >

                            <DatePicker disabled={!brincoRead} onChange={onChange} placeholder="Data da Vacinação" style={{ width: 250 }} />

                        </Space>
                    </Form.Item >
                </div>

                <div >
                    <Form.Item

                        name="peso_nascimento"
                        label=" "
                        tooltip="Informe o peso em @ do nascimento do Bovino"

                        rules={[{ required: true, message: 'Por favor insira o peso', whitespace: true }]}

                    >
                        <Input disabled={!brincoRead} style={{ width: 250 }} placeholder="Peso de Nascimento" />
                    </Form.Item>
                </div>

            </div>



            {
                brincoRead &&
                <BackNSave
                    onBackClick={() => {
                        navigate(-1);
                    }}
                    onSaveClick={() => {
                        alert('Cliquei em salvar');
                    }}
                />
            }
            

        </div>
    );
};

export default Vaccinate;