
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
} from 'antd';
import { NavLink } from "react-router-dom";
import { } from 'react-icons'

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

const Registration_pharmacy: React.FC = () => {

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


    return (

        <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>



            <div style={{ display: 'flex' }}>

                <div  >
                    <Form.Item

                        name="tipo_medicamento"
                        label=" "
                        tooltip="Selecione o tipo de medicamento que deseja cadastrar"
                        rules={[{ required: true, message: 'Por favor seleciona o tipo!' }]}
                    >
                        <Select placeholder="Tipo de Medicamento" style={{ width: 500}}>
                            <option value="antibioticos">Antibióticos</option>
                            <option value="anti_inflamatorios">Anti-inflamatórios</option>
                            <option value="antiparasitarios">Antiparasitários</option>
                            <option value="matabicheira">Matabicheira</option>
                            <option value="pomadas">Pomadas</option>
                            <option value="tratamento_cascos">Produtos para tratamento de cascos</option>
                            <option value="mosquicidas">Mosquicidas</option>
                            <option value="carrapaticidas">Carrapaticidas</option>
                            <option value="vitaminicos_minerais">Suplementos vitamínicos e minerais</option>
                            <option value="antitoxicos">Antitóxicos</option>
                        </Select>
                    </Form.Item>
                </div>


            </div>

            <Form.Item
                name="nome_medicamento"
                label=" "
                tooltip="Informe o nome do medicamento que deseja cadastrar"
                rules={[{ required: true, message: 'Por favor digite o nome', whitespace: true }]}
            >
                <Input placeholder="Nome do Medicamento" style={{width:500}}/>
            </Form.Item>


            <Form.Item
                name="fabrica_medicamento"
                label=" "
                tooltip="Informe a fabricamente do medicamento."
                rules={[{ required: true, message: 'Digite o nome da fabricante do medicamento.', whitespace: true }]}
            >
                <Input placeholder="Fabricante do medicamento."  style={{width:500}}/>
            </Form.Item>




            <div style={{ display: 'flex' }}>

                <div >
                    <Form.Item
                        name="quantidade_medicamento"
                        label=" "
                        tooltip="V"
                        rules={[{ required: true, message: 'Por favor digite a quatidade', whitespace: true }]}
                    >
                        <Input placeholder="Quantidade" style={{width:230}}/>
                    </Form.Item>

                </div>

                <div >
                    <Form.Item

                        name="unidade_medida_quantidade"
                        label=" "
                        tooltip="Ao informar a quantidade do medicamento informe a sua unidade de medida. Ex: 20g, 100ml..."
                        rules={[{ required: true, message: 'Por favor seleciona a unidade' }]}
                    >
                        <Select placeholder="Unidade de Media" style={{ width: 230 }}>
                            <option value="grama" title="grama">g</option>
                            <option value="mili">ml</option>
                            <option value="antiparasitarios">cp</option>
                            
                        </Select>
                    </Form.Item>
                </div>

            </div>

            <div style={{ display: 'flex' }}>

                <div >

                    <Form.Item
                        name="data_validade_medicamento"
                        label=" "

                        tooltip="Selecione a data de validade do medicamento"
                        rules={[{ required: true, message: 'Por favor selecione a data de validade', whitespace: true }]}
                    >
                        <Space direction="vertical" >

                            <DatePicker onChange={onChange} placeholder="Data de Validade" style={{ width: 230 }} />

                        </Space>
                    </Form.Item >
                </div>

                <div >
                    <Form.Item
                        name="data_cadastro_medicamento"
                        label=" "
                        tooltip="Cadastro do medicamento"
                        rules={[{ required: true, message: 'Por favor selecione a para cadastrar o medicamento', whitespace: true }]}
                    >
                        <Space direction="vertical">

                            <DatePicker onChange={onChange} placeholder="Data do Registro" style={{ width: 230 }} />

                        </Space>
                    </Form.Item>
                </div>

            </div>

            

            

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    <NavLink to='#'>
                        Salvar
                    </NavLink>
                </Button>

                <Button type="primary" htmlType="submit">
                    <NavLink to='/registration_option'>
                        Voltar
                    </NavLink>
                </Button>

            </Form.Item>
            {/* </Form> */}

        </div>
    );
};

export default Registration_pharmacy;