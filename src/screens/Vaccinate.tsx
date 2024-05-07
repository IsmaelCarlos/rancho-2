
import React, { useEffect, useState } from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import {
    Form,
    Input,
    Select,
    message,
} from 'antd';
import { useNavigate } from "react-router-dom";
import BackNSave from '@/components/CommonButtons';

const Vaccinate: React.FC = () => {

    const [ ready, setReady ] = useState(false);
    const [ brincoRead, setBrincoRead ] = useState(false);

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    const navigate = useNavigate();

    useEffect(() => {
        setReady(true);
    }, []);

    useEffect(() => {
        if(ready){
            message.info('Passe o brinco na leitora', 3);
            fetch('http://localhost:8080')
                .then(res => {
                    if(res.status === 200){
                        setBrincoRead(true);
                        message.success('brinco lido', 400);
                    }
                    if(res.status === 500){
                        throw new Error('Erro interno do servidor');
                    }
                })
                .catch(err => {
                    console.error(err);
                    message.error('Brinco não lido');
                })
        }
    }, [ ready ]);

    return (

        <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>



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



            <BackNSave
                onBackClick={() => {
                    navigate(-1);
                }}
                onSaveClick={() => {
                    alert('Cliquei em salvar');
                }}
            />

        </div>
    );
};

export default Vaccinate;