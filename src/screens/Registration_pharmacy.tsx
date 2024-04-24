
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
import { NavLink, useNavigate } from "react-router-dom";
import { } from 'react-icons'
import BackNSave from "@/components/CommonButtons";

export const NUMERO_PI = 3.1415;

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

export default function() {

    const navigate = useNavigate();

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
                            <option value="vacina">Vacinas</option>
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
                            <option value="micrograma" title = "Microgramas">µg</option>
                            <option value="miligrama" title = "Miligramas">mg</option>
                            <option value="grama" title="Gramas">g</option>
                            <option value="mililitro" title="Mililitros">mL</option>
                            <option value="comprimido" title = "Comprimidos">CP</option>
                            <option value="ampola" title = "Ampolas">AM</option>
                            <option value="tubos" title = "Tubos">TB</option>
                            <option value="frasco" title = "Frascos">FR</option>
                            <option value="caixa" title = "Caixas">CX</option>
                            <option value="litro" title = "Litros">L</option>
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