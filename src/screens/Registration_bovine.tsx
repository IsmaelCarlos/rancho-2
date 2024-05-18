
import { IMaskInput } from "react-imask";
import React, { useEffect, useRef, useState } from 'react';

import type { CascaderProps } from 'antd';
// import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space, message } from 'antd';
import {
    AutoComplete,
    Button,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
    ConfigProvider,
} from 'antd';
import { NavLink, useNavigate, useLocation, useLoaderData } from "react-router-dom";
import { FaChevronLeft as BackIcon } from "react-icons/fa6";
import { IoSaveSharp as SaveIcon } from "react-icons/io5";
import BackNSave from '@/components/CommonButtons';
import { MessageType } from "antd/es/message/interface";
import { BovinoType } from "@/types/bovino";
import axios from "axios";



const { Option } = Select;

interface DataNodeType {
    value: string;
    label: string;
    children?: DataNodeType[];
}


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

const Registration_bovine: React.FC = () => {

    const { search } = useLocation();

    const queryParams = new URLSearchParams(search);

    const idBrincoRef = useRef<HTMLElement>(null);

    const [form] = Form.useForm();

    const hideLoading = useRef<MessageType>();

    const [loading, setLoading] = useState<boolean>(false);
    const [insertionResult, setInsertionResult] = useState<BovinoType>();

    useEffect(() => console.log({ insertionResult }), [insertionResult]);

    useEffect(() => {
        if (loading) {
            const hide = message.loading(`Inserindo...`, 0);
            hideLoading.current = hide;
        } else {
            hideLoading.current && hideLoading.current();
        }
    }, [loading]);

    const onFinish = async (values: any) => {
        // console.log('Received values of form: ', values);
        try {
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
                    name="uid_bovino"
                    label=" "
                    tooltip="Identificação do brinco, o número que contem no brinco"
                    // rules={[{ required: true, message: 'Por favor informe a identificação do brinco', whitespace: true }]}
                >
                    {/* @ts-ignore */}
                    <Input ref={idBrincoRef} placeholder=" " disabled title="ID do Brinco" />
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



                <Form.Item {...tailFormItemLayout}>

                    <Button type="primary" htmlType="submit">
                        Salvar
                    </Button>

                </Form.Item>
            </Form>
        </div>
    );
};

export default Registration_bovine;