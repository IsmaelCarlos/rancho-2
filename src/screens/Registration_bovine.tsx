import React, { useEffect, useRef, useState } from 'react';
// import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space, message } from 'antd';
import {
    Button,
    Form,
    Input,
    Select,
    Alert,
} from 'antd';
import { NavLink, useNavigate, useLocation, useLoaderData } from "react-router-dom"
import { MessageType } from "antd/es/message/interface";
import { BovinoType } from "@/types/bovino";
import axios from "axios";

import styled from '@emotion/styled';


const { Option } = Select;

const AlertContainer = styled('div')(() => ({
    '.ant-alert-description': {
        maxWidth: 450,
    }
}))

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

const Registration_bovine: React.FC = () => {

    const { search } = useLocation();

    const queryParams = new URLSearchParams(search);

    const idBrincoRef = useRef<HTMLElement>(null);

    const [form] = Form.useForm();

    const hideLoading = useRef<MessageType>();

    const [loading, setLoading] = useState<boolean>(false);
    const [insertionResult, setInsertionResult] = useState<BovinoType>();

    const [ openAlert, setOpenAlert ] = useState(false);

    useEffect(() => console.log({ insertionResult }), [insertionResult]);

    useEffect(() => {
        if (loading) {
            const hide = message.loading(`Aguardando...`, 0);
            hideLoading.current = hide;
        } else {
            hideLoading.current && hideLoading.current();
        }
    }, [loading]);

    const onFinish = async (values: any) => {
        // console.log('Received values of form: ', values);
        try {
            setLoading(true);
            const { ..._bovino } = values;
            const bovino = _bovino as Omit<BovinoType, 'id_bovino'>;
            const result = await axios.post('http://localhost:6754/bovino', bovino) as BovinoType;
            message.success(`${bovino.display_brinco} inserido com sucesso`);
            setInsertionResult(result);
        }
        catch (err) {
            console.error(err);
            message.error('Erro ao iserir bovino');
        }
        finally {
            setLoading(false);
        }

    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="55">+55</Option>
            </Select>
        </Form.Item>
    );



    const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

    const onWebsiteChange = (value: string) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['@gmail.com', '@hotmail.com'].map((domain) => `${value}${domain}`));
        }
    };

    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    useEffect(() => {
        if (idBrincoRef.current) {
            // @ts-ignore
            idBrincoRef.current.input.value = queryParams.get('id_brinco');
        }
    }, []);

    const navigate = useNavigate();

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
                disabled={loading}
            >

                <div style={{ display: 'flex' }}>

                    <div  >
                        <Form.Item

                            name="raca"
                            label=" "
                            tooltip="Selecione a raça do bovino de sua Fazenda/confinamento."
                            rules={[{ required: true, message: 'Por favor seleciona a raça!' }]}
                        >
                            <Select placeholder="Raças Bolvina" style={{ width: 250 }}>
                                <option value="Agnus">Agnus</option>
                                <option value="Nelore">Nelore</option>
                                <option value="Brahman">Brahman</option>
                                <option value="Brangus">Brangus</option>
                                <option value="Senepol">Senepol</option>
                                <option value="Hereford">Hereford</option>
                                <option value="Caracu">caracu</option>
                                <option value="Charoles">Charolês</option>
                                <option value="Guzera">Guzerá</option>
                                <option value="Tabapua">Tabapuã</option>
                                <option value="Simental">Simental</option>
                                <option value="Limousin">Limousin</option>
                                <option value="Chiania">Chiania</option>
                                <option value="Sevon">Devon</option>
                                <option value="Belgian Blue">Belgian Blue</option>
                                <option value="Wagyu">Wagyu</option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div >
                        <Form.Item

                            name="classe"
                            label=" "
                            tooltip="Localização de área de zona rural ou zona urbana da Fazenda."
                            rules={[{ required: true, message: 'Por favor seleciona o Gênero!' }]}
                        >
                            <Select placeholder="Classificação do Bovino" style={{ width: 250 }}>

                                <option value="Cruzado">Cruzado</option>
                                <option value="Gol" title="Gado de Origem Leiteira">Gol</option>
                            </Select>
                        </Form.Item>
                    </div>

                </div>

                <Form.Item
                    name="display_brinco"
                    label=" "
                    tooltip="Identificação do brinco, (apelido)"
                    rules={[{ required: true, message: 'Por favor informe a identificação do brinco', whitespace: true }]}
                >
                    {/* @ts-ignore */}
                    <Input ref={idBrincoRef} placeholder="Identificação do brinco, (apelido)" title="ID do Brinco" />
                </Form.Item>


                {/* <Form.Item
                name="proprietario_anterior"
                label=" "
                tooltip="Informe à fazenda onde o bovino foi comprado."
                rules={[{ required: true, message: 'Informe à fazenda onde o bovino foi comprado.', whitespace: true }]}
            >
                <Input placeholder="Informe à fazenda onde o bovino foi comprado." />
            </Form.Item> */}




                <div style={{ display: 'flex' }}>

                    <div >

                        <Form.Item
                            name="data_nascimento"
                            label=" "

                            tooltip="Selecione a data de Nascimento"
                          
                        >


                            <DatePicker onChange={onChange} placeholder="Data de Nascimento" style={{ width: 250 }} />


                        </Form.Item >
                    </div>

                    <div >
                        <Form.Item
                            name="data_entrada_confinamento"
                            label=" "
                            tooltip="Selecione a entrada no Confinamento"
                   
                        >


                            <DatePicker onChange={onChange} placeholder="Data do Confinamento" style={{ width: 250 }} />


                        </Form.Item>
                    </div>

                </div>

                <div style={{ display: 'flex' }}>

                    <div >
                        <Form.Item

                            name="peso_nascimento"
                            label=" "
                            tooltip="Informe o peso em Kg do nascimento do Bovino"

                            rules={[{ required: true, message: 'Por favor insira o peso', whitespace: true }]}

                        >
                            <Input style={{ width: 250 }} placeholder="Peso de Nascimento" />
                        </Form.Item>
                    </div>
                    <div >
                        <Form.Item

                            name="peso_confinamento"
                            label=" "
                            tooltip="Informe o peso em Kg da chegada do Bovino no confinamento"

                            rules={[{ required: true, message: 'Por favor insira o peso', whitespace: true }]}

                        >
                            <Input style={{ width: 250 }} placeholder="Peso de entrada no Confinamento" />
                        </Form.Item>
                    </div>

                </div>


                {/* <Form.Item
                name="destino_bovino"
                label=" "
                tooltip="Tipos de bovino, cada uma especializada em diferentes aspectos do destino."
                rules={[{ required: true, message: 'Por favor seleciona o tipo de destino do bovino!' }]}
            >
                <Select placeholder="Selecionar o Destino do Bovino">
                    <Option value="Bovino Corte">Bovino de corte</Option>
                    <Option value="Bovino Leiteiro">Bovino leiteiro</Option>
                </Select>
            </Form.Item> */}



                {
                    !openAlert &&
                    <Form.Item {...tailFormItemLayout}>

                        <Button type="primary" onClick={async () => {
                            try{
                                await form.validateFields();
                                setOpenAlert(true);
                            }
                            catch(err){
                                message.error("Preencha corretamente os campos");
                            }
                        }}>
                            Salvar
                        </Button>

                    </Form.Item>
                }

                {
                    openAlert &&
                    <AlertContainer>
                        <Alert
                            message="Salvar"
                            description={"Para completar o processo de salvamento, ao clicar em continuar, você deve \
                            aproximar a TAG, (brinco), do sensor para fazer a gravação. O salvamento só concluirá após a gravação. \
                            Caso não leia a TAG o salvamento irá falahar."}
                            type="info"
                            action={
                                <Space direction="vertical">
                                    <Button size="small" type="primary" onClick={() => {
                                        form.submit();
                                    }}>
                                        Continuar
                                    </Button>
                                    <Button size="small" danger ghost onClick={() => {
                                        setOpenAlert(false);
                                    }}>
                                        Cancelar
                                    </Button>
                                </Space>
                            }
                            // closable
                    />
                    </AlertContainer>
                }
            </Form>
        </div>
    );
};

export default Registration_bovine;