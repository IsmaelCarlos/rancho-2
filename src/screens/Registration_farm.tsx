
import React, { useEffect, useRef, useState } from 'react';
import {
    Button,
    Form,
    Input,
    Select,
    message,
} from 'antd';
import { NavLink, useLocation } from "react-router-dom";
import { FormFazendaType } from '@/types/fazenda';
import axios from 'axios';
import { MessageType } from 'antd/es/message/interface';

const { Option } = Select;


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const Registration_farm: React.FC = () => {

    
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);

    const hideLoading = useRef<MessageType>();

    const [ loading, setLoading ] = useState(false);

    const [form] = Form.useForm();

    useEffect(() => {
        if(!loading && hideLoading.current){
            hideLoading.current();
        }
    }, [ loading ]);

    const onFinish = async (values: any) => {
        try{
            setLoading(true);
            const to_send = {
                nome: values.nome_fazenda,
                tamanho_hectare: values.alqueiro,
                cep_endereco: values.cep,
                cidade: values.cidade,
                estado: values.estado,
                zona: values.zona_area,
                pecuaria: values.tipo_fazenda,
                id_pessoa: parseInt(queryParams.get('id_pessoa')??'')
            } satisfies FormFazendaType;

            hideLoading.current = message.loading(`Inserindo fazenda: ${to_send.nome}...`, 0);
    
            await axios.post('http://localhost:6754/fazendas', to_send);

            message.success(`Fazenda ${to_send.nome} inserida com sucesso`);
        }
        catch(err){
            message.error(`Erro ao inserir`);
        }
        finally{
            setLoading(false);
        }
    };


    return (

        <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>

            <Form
                {...formItemLayout}
                form={form}
                onFinish={onFinish}
                initialValues={{ prefix: '55' }}
                style={{ maxWidth: 600 }}
                scrollToFirstError
                // disabled={loading}
            >

                <Form.Item
                    style={{ maxWidth: 540 }}

                    name="nome_fazenda"
                    label="Fazenda"
                    tooltip="Digite o nome da Fazenda"
                    rules={[{ required: true, message: 'Por favor insira o nome!', whitespace: true }]}
                >
                    <Input />
                </Form.Item>



                <div style={{ display: 'flex' }}>

                    <div >
                        <Form.Item

                            name="zona_area"
                            label="Área "
                            tooltip="Localização de área de zona rural ou zona urbana da Fazenda."
                            rules={[{ required: true, message: 'Por favor seleciona o Gênero!' }]}
                        >
                            <Select placeholder="Selecionar o tipo da Área">
                                <Option value="RURAL">Zona Rural</Option>
                                <Option value="URBANA">Zona Urbana</Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div >
                        <Form.Item

                            name="cep"
                            label="CEP"
                            tooltip="Informe  o CEP"

                            rules={[{ required: true, message: 'Por favor insira o CEP', whitespace: true }]}

                        >
                            <Input />
                        </Form.Item>
                    </div>

                </div>

                <div style={{ display: 'flex' }}>

                    <div >

                        <Form.Item

                            name="estado"
                            label="Estado"
                            tooltip="Informe o Estado"

                            rules={[{ required: true, message: 'Por favor insira o Estado', whitespace: true }]}

                        >
                            <Input style={{ maxWidth: 184 }} />
                        </Form.Item>
                    </div>

                    <div >
                        <Form.Item
                            //    style={{maxWidth:300}}
                            name="cidade"
                            label="Cidade"
                            tooltip="Informe a Cidade"

                            rules={[{ required: true, message: 'Por favor insira a Cidade', whitespace: true }]}

                        >
                            <Input style={{ maxWidth: 182 }} />
                        </Form.Item>
                    </div>

                </div>


                <Form.Item
                    name="tipo_fazenda"
                    label="Pecuária "
                    tooltip="Tipos de fazendas pecuárias, cada uma especializada em diferentes aspectos da criação de animais."
                    rules={[{ required: true, message: 'Por favor seleciona o Gênero!' }]}
                >
                    <Select placeholder="Selecionar o tipo de Fazendas Pecuárias">
                        <Option value='Fazenda corte'>Fazenda de gado de corte</Option>
                        <Option value='Fazenda leiteiro'>Fazenda de gado leiteiro</Option>
                        <Option value='Pastagem de manejo'>Pastagem de manejo</Option>
                        <Option value='Fazenda de ovinos'>Fazenda de ovinos</Option>
                        <Option value='Fazenda de suinos'>Fazenda de suinos</Option>
                        <Option value='Fazenda mista'>Fazenda mista</Option>
                    </Select>
                </Form.Item>


                <div style={{ display: 'flex' }}>

                    <div >

                        <Form.Item

                            name="alqueiro"
                            label="Alqueiro"
                            tooltip="Alqueire é uma referência para definir o tamanho de uma área rural "

                            rules={[{ required: true, message: 'Por favor insira o tamanho do Alqueiro', whitespace: true }]}

                        >
                            <Input style={{ maxWidth: 184 }} />
                        </Form.Item>
                    </div>
                </div>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Salvar
                    </Button>

                </Form.Item>
            </Form>
        </div>
    );
};

export default Registration_farm;



	
