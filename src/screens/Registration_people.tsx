
import { IMaskInput } from "react-imask";
import React, { useState } from 'react';
import type { CascaderProps } from 'antd';
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

    const suffixSelector = (
        <Form.Item name="suffix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="USD">$</Option>
                <Option value="CNY">¥</Option>
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

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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

                    name="Nome"
                    label="Nome"
                    tooltip="Digite o nome completo"
                    rules={[{ required: true, message: 'Por favor insira seu nome!', whitespace: true }]}
                >
                    <Input />
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
                    name="genero"
                    label="Gênero"
                    tooltip="Selecione o Gênero que se identifica"
                    rules={[{ required: true, message: 'Por favor seleciona o Gênero!' }]}
                >
                    <Select placeholder="Selecionar Gênero">
                        <Option value="Masculino">Masculino</Option>
                        <Option value="Femenino">Femenino</Option>
                        <Option value="Outros">Outros</Option>
                    </Select>
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
                    <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="email">
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
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The new password that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>



                <Form.Item
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
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Registration_people;