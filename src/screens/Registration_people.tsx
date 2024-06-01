import React, { useEffect, useRef, useState } from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { NavLink } from "react-router-dom";
// import { Form, Input } from 'antd';
import InputMask from 'react-input-mask';
import {
    AutoComplete,
    Button,
    Form,
    Input,
    Select,
    message,
} from 'antd';

import { PessoaType } from '@/types/people';

import axios from 'axios';
import { MessageType } from 'antd/es/message/interface';

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

    const hideLoading = useRef<MessageType>();

    const [ loading, setLoading ] = useState<boolean>(false);
    const [ insertionResult, setInsertionResult ] = useState<PessoaType>();

    useEffect(() => console.log({ insertionResult }), [ insertionResult ]);

    useEffect(() => {
        if(loading){
            const hide = message.loading(`Inserindo...`, 0);
            hideLoading.current = hide;
        }
        else{
            hideLoading.current && hideLoading.current();
        }
    }, [ loading ]);

    const onFinish = async (values: any) => {
        try{
            setLoading(true);
            const { confirma_senha, prefix, ..._pessoa } = values;
            const pessoa = _pessoa as Omit<PessoaType, 'id_pessoa'>;
            // Corrigindo dado que está indo
            pessoa.cpf = pessoa.cpf.replace(/_$/, '');
            // console.log(pessoa) aqui  verifica o que está vindo 
            const result = await axios.post('http://localhost:6754/pessoas', pessoa).then(({ data }) => data.result[0] as PessoaType);
            message.success(`${pessoa.nome} inserido com sucesso`);
            setInsertionResult(result);
        }
        catch(err){
            console.error(err);
            message.error('Erro ao inserir pessoa');
        }
        finally{
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


    const validarCPF = (cpf: string): boolean => {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    
        let soma = 0;
        let resto;
    
        for (let i = 1; i <= 9; i++) {
            soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }
    
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.substring(9, 10))) return false;
    
        soma = 0;
        for (let i = 1; i <= 10; i++) {
            soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }
    
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.substring(10, 11))) return false;
    
        return true;
    };
    

    return (

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '65vh' }}>
            <Form
                // {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{ prefix: '55' }}
                // style={{ maxWidth: 600 }}
                scrollToFirstError
                disabled={loading}
            >


                <Form.Item

                    name="nome"
                    label=" "
                    tooltip="Digite o nome completo"
                    rules={[{ required: true, message: 'Por favor insira seu nome!', whitespace: true }]}
                >
                    <Input placeholder="Nome Completo" style={{ width: 500 }} />
                </Form.Item>



                <Form.Item

                    name="cpf"
                    label=" "
                    tooltip="Informe  o CPF"

                    // rules={[{ required: true, message: 'Por favor insira o CPF', whitespace: true }]}
                    rules={[
                        { required: true, message: 'Por favor insira o CPF', whitespace: true },
                        {
                            validator: (_, value) => {
                                if (!value) {
                                    return Promise.resolve();
                                }
                                return validarCPF(value)
                                    ? Promise.resolve()
                                    : Promise.reject(new Error('CPF inválido'));
                            }
                        }
                    ]}

                >
                    <InputMask mask="999.999.999-99" placeholder="CPF">
                        {/* @ts-ignore */}
                        {(inputProps: any) => <Input {...inputProps} style={{ width: 500 }} />}
                    </InputMask>
                    {/* <Input placeholder="CPF" style={{ width: 500 }} /> */}
                </Form.Item>

                <Form.Item
                    name="nascimento"
                    label=" "
                    tooltip="Selecione a Data de Nascimento"
                    // rules={[{ required: true, message: 'Por favor selecione a Data de Nascimento' }]}
                >
                    
                    <DatePicker onChange={onChange} placeholder='Data Nascimento' style={{width: 500}} />
                    
                
                </Form.Item>
                

                <Form.Item
                    name="genero"
                    label=" "
                    tooltip="Selecione o Gênero que se identifica"
                    rules={[{ required: true, message: 'Por favor seleciona o Gênero!' }]}
                >
                    <Select placeholder="Selecionar Gênero">
                        <Option value="Masculino">Masculino</Option>
                        <Option value="Feminino">Feminino</Option>
                        <Option value="Outros">Outros</Option>
                    </Select>
                </Form.Item>
                    
                <Form.Item
                    name="telefone"
                    label=" "
                    tooltip="Digite o número de contato"
                    rules={[{ required: true, message: 'Por favor insira seu número' }]}
                >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} placeholder='Telefone'/>
                </Form.Item>


                <Form.Item
                    name="email"
                    label=" "
                    tooltip="Digitar o Email para o cadastrato"
                    rules={[{ required: true, message: 'Por favor insira seu email!' }]}
                >
                    <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="Email:exemplo@gmail.com">
                        <Input />
                    </AutoComplete>
                </Form.Item>

                <Form.Item
                    name="senha"
                    label=" "
                    tooltip="Digite a senha, aconselho a digitar uma senha com letras maiúsculas minúsclas e números para uma segurança maior"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor insira a senha',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password  placeholder='Senha'/>
                </Form.Item>

                <Form.Item
                    name="confirma_senha"
                    label=" "
                    tooltip="Digite a senha novamente, para confirmar o cadastro"
                    dependencies={['senha']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Por favor inserir senha corretamente',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('senha') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('A senha inserida não corresponde, por favor verifique novamente!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder='Confirme a Senha'/>
                </Form.Item>



            
                {
                    !insertionResult
                        ? <Form.Item {...tailFormItemLayout}>
                            <Button
                                type="primary"
                                htmlType="submit"
                            >
                                Salvar
                            </Button>
                        
                        </Form.Item>
                        : <Form.Item {...tailFormItemLayout}>
                            <Button type='primary'>
                                <NavLink to={`/registration_farm?id_pessoa=${insertionResult.id_pessoa}`}>
                                    Próximo
                                </NavLink>
                            </Button>
                        </Form.Item>
                }
            </Form>
        </div>
    );
};

export default Registration_people;