
import { IMaskInput } from "react-imask";
import React, { useState } from 'react';
import type { CascaderProps } from 'antd';
// import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
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
import { NavLink, useNavigate } from "react-router-dom";
import { FaChevronLeft as BackIcon } from "react-icons/fa6";
import { IoSaveSharp as SaveIcon } from "react-icons/io5";
import BackNSave from '@/components/CommonButtons';



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

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
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

    const navigate = useNavigate();

    return (

        <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>



            <div style={{ display: 'flex' }}>

                <div  >
                    <Form.Item

                        name="raca_bovino"
                        label=" "
                        tooltip="Selecione a raça do bovino de sua Fazenda/confinamento."
                        rules={[{ required: true, message: 'Por favor seleciona a raça!' }]}
                    >
                        <Select placeholder="Raças Bolvina" style={{ width: 250 }}>
                            <option value="agnus">Agnus</option>
                            <option value="nelore">Nelore</option>
                            <option value="brahman">Brahman</option>
                            <option value="brangus">Brangus</option>
                            <option value="senepol">Senepol</option>
                            <option value="hereford">Hereford</option>
                            <option value="caracu">caracu</option>
                            <option value="charoles">Charolês</option>
                            <option value="guzera">Guzerá</option>
                            <option value="tabapua">Tabapuã</option>
                            <option value="simental">Simental</option>
                            <option value="limousin">Limousin</option>
                            <option value="chiania">Chiania</option>
                            <option value="devon">Devon</option>
                            <option value="belgian_blue">Belgian Blue</option>
                            <option value="wagyu">Wagyu</option>
                        </Select>
                    </Form.Item>
                </div>
                <div >
                    <Form.Item

                        name="classificacao_bovino"
                        label=" "
                        tooltip="Localização de área de zona rural ou zona urbana da Fazenda."
                        rules={[{ required: true, message: 'Por favor seleciona o Gênero!' }]}
                    >
                        <Select placeholder="Classificação do Bovino" style={{ width: 250 }}>

                            <option value="cruzado">Cruzado</option>
                            <option value="gol" title="Gado de Origem Leiteira">Gol</option>
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
                <Input placeholder="Identificação do brinco" />
            </Form.Item>


            <Form.Item
                name="proprietario_anterior"
                label=" "
                tooltip="Informe à fazenda onde o bovino foi comprado."
                rules={[{ required: true, message: 'Informe à fazenda onde o bovino foi comprado.', whitespace: true }]}
            >
                <Input placeholder="Informe à fazenda onde o bovino foi comprado." />
            </Form.Item>




            <div style={{ display: 'flex' }}>

                <div >

                    <Form.Item
                        name="data_nascimento_bovino"
                        label=" "

                        tooltip="Selecione a data de Nascimento"
                        rules={[{ required: true, message: 'Por favor selecione a Data de Nascimento', whitespace: true }]}
                    >
                        <Space direction="vertical" >

                            <DatePicker onChange={onChange} placeholder="Data de Nascimento" style={{ width: 250 }} />

                        </Space>
                    </Form.Item >
                </div>

                <div >
                    <Form.Item
                        name="data_nascimento"
                        label=" "
                        tooltip="Selecione a entrada no Confinamento"
                        rules={[{ required: true, message: 'Por favor selecione a Data de Nascimento', whitespace: true }]}
                    >
                        <Space direction="vertical">

                            <DatePicker onChange={onChange} placeholder="Data do Confinamento" style={{ width: 250 }} />

                        </Space>
                    </Form.Item>
                </div>

            </div>

            <div style={{ display: 'flex' }}>

                <div >
                    <Form.Item

                        name="peso_nascimento"
                        label=" "
                        tooltip="Informe o peso em @ do nascimento do Bovino"

                        rules={[{ required: true, message: 'Por favor insira o peso', whitespace: true }]}

                    >
                        <Input style={{width:250}} placeholder="Peso de Nascimento"/>
                    </Form.Item>
                </div>
                <div >
                    <Form.Item

                        name="peso_confinamento"
                        label=" "
                        tooltip="Informe o peso em @ da chegada do Bovino no confinamento"

                        rules={[{ required: true, message: 'Por favor insira o peso', whitespace: true }]}

                    >
                        <Input style={{width:250}} placeholder="Peso de entrada no Confinamento"/>
                    </Form.Item>
                </div>

            </div>


            <Form.Item
                name="tipo_bovino"
                label=" "
                tooltip="Tipos de bovino, cada uma especializada em diferentes aspectos do destino."
                rules={[{ required: true, message: 'Por favor seleciona o tipo de destino do bovino!' }]}
            >
                <Select placeholder="Selecionar o Destino do Bovino">
                    <Option value="bovino_corte">Bovino de corte</Option>
                    <Option value="bovino_leiteiro">Bovino leiteiro</Option>
                </Select>
            </Form.Item>



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

export default Registration_bovine;