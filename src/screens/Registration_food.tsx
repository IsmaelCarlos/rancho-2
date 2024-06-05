
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
import BackNSave from '@/components/CommonButtons'
import { useNavigate } from 'react-router-dom'
import CommonButtons from '@/components/CommonButtons';
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

const Registration_food: React.FC = () => {

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

                <div>
                    <h3>Registrar Ração</h3>
                </div>

            <div style={{ display: 'flex' }}>

                <div  >
                    <Form.Item

                        name="tipo_racao"
                        label=" "
                        tooltip="Selecione o tipo de ração que deseja cadastrar"
                        rules={[{ required: true, message: 'Por favor seleciona o tipo!' }]}
                    >
                        <Select placeholder="Tipo de ração" style={{ width: 500 }}>
                            <option value="racao">Ração</option>
                            <option value="proteina">Proteína</option>
                            <option value="sal">Sal</option>
                            <option value="suplemento">Suplemento</option>
                            
                        </Select>
                    </Form.Item>
                </div>


            </div>

            <Form.Item
                name="nome_racao"
                label=" "
                tooltip="Informe o nome da racao que deseja cadastrar"
                rules={[{ required: true, message: 'Por favor digite o nome', whitespace: true }]}
            >
                <Input placeholder="Nome da racao" style={{ width: 500 }} />
            </Form.Item>


            <Form.Item
                name="fabrica_racao"
                label=" "
                tooltip="Informe a fabricamente do ração."
                rules={[{ required: true, message: 'Digite o nome a fabricante da ração.', whitespace: true }]}
            >
                <Input placeholder="Fabricante da ração." style={{ width: 500 }} />
            </Form.Item>




            <div style={{ display: 'flex' }}>

                <div >
                    <Form.Item
                        name="quantidade_racao"
                        label=" "
                        tooltip="Informar a quantidade da ração"
                        rules={[{ required: true, message: 'Por favor digite a quantidade', whitespace: true }]}
                    >
                        <Input placeholder="Quantidade" style={{ width: 230 }} />
                    </Form.Item>

                </div>

                <div >
                    <Form.Item

                        name="unidade_medida_quantidade_racao"
                        label=" "
                        tooltip="Ao informar a quantidade do ração informe a sua unidade de medida. Ex: 20g, 100ml..."
                        rules={[{ required: true, message: 'Por favor seleciona a unidade' }]}
                    >
                        <Select placeholder="Unidade de Media" style={{ width: 230 }}>
                            <option value="tonela" title="Toneladas">t</option>
                            <option value="quilos" title="Quilos">kg</option>
                            <option value="litro" title="Litros">L</option>

                        </Select>
                    </Form.Item>
                </div>

            </div>

            <div style={{ display: 'flex' }}>

                <div >

                    <Form.Item
                        name="data_validade_racao"
                        label=" "

                        tooltip="Selecione a data de validade do ração"
                        rules={[{ required: true, message: 'Por favor selecione a data de validade', whitespace: true }]}
                    >
                        <Space direction="vertical" >

                            <DatePicker onChange={onChange} placeholder="Data de Validade" style={{ width: 230 }} />

                        </Space>
                    </Form.Item >
                </div>

                <div >
                    <Form.Item
                        name="data_cadastro_racao"
                        label=" "
                        tooltip="Cadastro do ração"
                        rules={[{ required: true, message: 'Por favor selecione a para cadastrar o ração', whitespace: true }]}
                    >
                        <Space direction="vertical">

                            <DatePicker onChange={onChange} placeholder="Data do Registro" style={{ width: 230 }} />

                        </Space>
                    </Form.Item>
                </div>
                

            </div>


                <div>
                    <Form.Item
                        name="bula"
                        label=" "
                        tooltip="Digite uma observação caso tenha uma. Este Campo não é obrigatório, mas ter o máximo de informação melhor para compreender sobre a ração."
                    >
                        <Input.TextArea placeholder="Informar Detalhes." autoSize={{ minRows: 1, maxRows: 6 }} spellCheck={true} />
                    </Form.Item>
                </div>

                <div>
                    <div style={{display: 'flex'}}>
                        <CommonButtons
                            // onBackClick={() => navigate('/perfil_user')}
                            onBackClick={() => navigate(-1)}

                        />


                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">
                                Salvar
                            </Button>
                        </Form.Item>

                    </div>
                    
                    {/* <Form.Item >

                        <Button type="primary" htmlType="submit">
                            Salvar
                        </Button>

                    </Form.Item> */}

                </div>

        </div>
    );
};

export default Registration_food;