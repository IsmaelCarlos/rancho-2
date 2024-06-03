
import React, { useEffect, useRef, useState } from 'react';
import {
    Button,
    Form,
    Input,
    Select,
    message,
} from 'antd';
import { NavLink, useLocation } from "react-router-dom";
import { FormFazendaType, FazendaComEnderecoType } from '@/types/fazenda';
import { useQuery } from '@tanstack/react-query';
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

    const [loading, setLoading] = useState(false);

    const [form] = Form.useForm();
    // const [insertionResult] = useState<FormFazendaType>();

    useEffect(() => {
        if (!loading && hideLoading.current) {
            hideLoading.current();
        }
    }, [loading]);

    const onFinish = async (values: any) => {
        try {
            setLoading(true);
            const to_send = {
                nome: values.nome_fazenda,
                tamanho_hectare: values.alqueiro,
                cep_endereco: values.cep,
                cidade: values.cidade,
                estado: values.estado,
                zona: values.zona_area,
                pecuaria: values.tipo_fazenda,
                id_pessoa: parseInt(queryParams.get('id_pessoa') ?? '')
            } satisfies FormFazendaType;

            hideLoading.current = message.loading(`Inserindo fazenda: ${to_send.nome}...`, 0);

            await axios.post('http://localhost:6754/fazendas', to_send);

            message.success(`Fazenda ${to_send.nome} inserida com sucesso`);
        }
        catch (err) {
            message.error(`Erro ao inserir`);
        }
        finally {
            setLoading(false);
        }
    };

    return (

        <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>

            <Form
                // {...formItemLayout}
                form={form}
                onFinish={onFinish}
                // initialValues={{ prefix: '55' }}
                // style={{ maxWidth: 600 }}
                scrollToFirstError
            // disabled={loading}
            >
                 <div>
                    <h3>Cadastrar Fazenda</h3>
                </div>

                <Form.Item


                    name="nome_fazenda"
                    label=" "
                    tooltip="Digite o nome da Fazenda"
                    rules={[{ required: true, message: 'Por favor insira o nome!', whitespace: true }]}
                >
                    <Input placeholder='Nome da Fazenda' style={{ width: 540 }} />
                </Form.Item>



                <div style={{ display: 'flex' }}>

                    <div >


                        <Form.Item

                            name="zona"
                            label=" "
                            tooltip="Informe a Zona."
                            rules={[{ required: true, message: 'Por favor seleciona o Estado!' }]}
                        >
                            <Select placeholder="Zona" style={{ width: 250 }}>
                                <Option value="RURAL">Zona Rural</Option>
                                <Option value="URBANA">Zona Urbana</Option>
                            </Select>
                        </Form.Item>



                    </div>
                    <div >
                        <Form.Item

                            name="cep"
                            label=" "
                            tooltip="Informe  o CEP"

                            rules={[{ required: true, message: 'Por favor insira o CEP', whitespace: true }]}

                        >
                            <Input placeholder='CEP' style={{ width: 250 }} />
                        </Form.Item>
                    </div>

                </div>

                <div style={{ display: 'flex' }}>

                    <div >

                        {/* <Form.Item

                            name="estado"
                            label=" "
                            tooltip="Informe o Estado"

                            rules={[{ required: true, message: 'Por favor insira o Estado', whitespace: true }]}

                        >
                            <Input style={{ width: 250 }} placeholder='Estado' />
                        </Form.Item> */}

                        <Form.Item

                            name="estado"
                            label=" "
                            tooltip="Localização de área de zona rural ou zona urbana da Fazenda."
                            rules={[{ required: true, message: 'Por favor seleciona o Gênero!' }]}
                        >
                            <Select placeholder="Selecionar o tipo da Área" style={{ width: 250 }}>
                                {
                                    [
                                        'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
                                    ].map(estado => {
                                        return <option key={estado} value={estado}>{`${estado}`}</option>
                                    })
                                }
                            </Select>
                        </Form.Item>

                    </div>

                    <div >
                        <Form.Item
                            //    style={{maxWidth:300}}
                            name="cidade"
                            label=" "
                            tooltip="Informe a Cidade"

                            rules={[{ required: true, message: 'Por favor insira a Cidade', whitespace: true }]}

                        >
                            <Input style={{ width: 250}} placeholder='Cidade' />
                        </Form.Item>
                    </div>

                </div>


                <Form.Item
                    name="tipo_fazenda"
                    label=" "
                    tooltip="Tipos de fazendas pecuárias, cada uma especializada em diferentes aspectos da criação de animais."
                    rules={[{ required: true, message: 'Por favor seleciona o Gênero!' }]}
                >
                    <Select placeholder="Selecionar o tipo de Fazendas Pecuárias" style={{width: 540}}>
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
                            label=" "
                            tooltip="Alqueire é uma referência para definir o tamanho de uma área rural "

                            rules={[{ required: true, message: 'Por favor insira o tamanho do Alqueiro', whitespace: true }]}

                        >
                            <Input style={{ width: 540 }} placeholder='Tamanho Alqueiro'/>
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




