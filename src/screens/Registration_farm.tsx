
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

const Registration_people: React.FC = () => {

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
            setAutoCompleteResult(['@.gmail.com', '@.hotmail.com'].map((domain) => `${value}${domain}`));
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

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '65vh' }}>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{ prefix: '55' }}
                style={{ maxWidth: 600 }}
                scrollToFirstError
            >


                <Form.Item

                    name="brinco"
                    label="ID Brinco"
                    tooltip="Cadastrar o Brinvo pelo RFID"
                    rules={[{ required: true, message: 'Verifique se cadastrou o brinco corretamente!', whitespace: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="raca"
                    label="Raça"
                    tooltip="Selecione a Raça do Bovino"
                    rules={[{ required: true, message: 'Por favor seleciona a Raça!' }]}
                >
                    <Select placeholder="Selecionar Gênero">
                        <Option value="nelore">Nelore</Option>
                        <Option value="angus">Angus</Option>
                        <Option value="senepol">Senepol</Option>
                    </Select>
                </Form.Item>


                <Form.Item

                    name="cpf"
                    label="CPF"
                    tooltip="Informe  o CPF"

                    rules={[{ required: true, message: 'Por favor insira o CPF', whitespace: true }]}


                >
                    {/* <IMaskInput
                        mask="000.000.000-00"
                        placeholder="Digite o seu CPF"
                    /> */}
                    <Input />
                </Form.Item>

                <Form.Item
                name="data_nascimento"
                label="Nascimento"
                tooltip="Selecione a Data de Nascimento"
                rules={[{ required: true, message: 'Por favor selecione a Data de Nascimento', whitespace: true }]}
                >
                    <Space direction="vertical">
                    
                    <DatePicker onChange={onChange} />
                    
                </Space>
                </Form.Item>
                

                

                <Form.Item
                    name="telefone"
                    label="Telefone"
                    tooltip="Digite o número de contato"
                    rules={[{ required: true, message: 'Por favor insira seu número' }]}
                >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                </Form.Item>


                <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, message: 'Por favor insira seu email!' }]}
                >
                    <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="exemplo@gmail.com">
                        <Input />
                    </AutoComplete>
                </Form.Item>


                {/* <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                     <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="email">
                        <Input />
                    </AutoComplete>
                    <Input />
                </Form.Item> */}

                <Form.Item
                    name="senha"
                    label="Senha"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor insira a senha',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirma_senha"
                    label="Confirma Senha"
                    dependencies={['senha']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor inserir senha corretamente',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('senha') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('A senha inserida não corresponde!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>



                {/* <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                        I have read the <a href="">agreement</a>
                    </Checkbox>
                </Form.Item> */}
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Salvar
                    </Button>
                    <Button type="primary" htmlType="submit">
                        <NavLink to='/registration'>
                            Voltar
                        </NavLink>
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Registration_people;