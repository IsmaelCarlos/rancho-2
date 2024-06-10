
import { IMaskInput } from "react-imask";
import React, { useState, useEffect, useRef } from 'react';
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
    message
} from 'antd';


import axios from "axios";
import {RacaoType} from '@/types/racao'
import { MessageType } from "antd/es/message/interface";

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

    const hideLoading = useRef<MessageType>();

    const [loading, setLoading] = useState<boolean>(false);
    const [insertionResult, setInsertionResult] = useState<RacaoType>();

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
        try {
            setLoading(true);
            const { ..._racao } = values;
            const racao = _racao as Omit<RacaoType, 'id_racao'>;
            // const result = await axios.post('http://localhost:6754/medicamento', medicamento).then(({data}) => data.result[0] as MedicamentoType);
            const result = await axios.post('http://localhost:6754/racao', racao) as RacaoType;
            message.success(`${racao.nome_racao} inserido com sucesso`);
            setInsertionResult(result);
        }
        catch (err) {
            console.error(err);
            message.error('Erro ao inserir medicamento');
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


    return (

        <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>

                <div>
                    <h3>Registrar Ração</h3>
                </div>
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

                        name="tipo_racao"
                        label=" "
                        tooltip="Selecione o tipo de ração que deseja cadastrar"
                        rules={[{ required: true, message: 'Por favor seleciona o tipo!' }]}
                    >
                        <Select placeholder="Tipo de ração" style={{ width: 500 }}>
                            <option value="Ração">Ração</option>
                            <option value="Proteína">Proteína</option>
                            <option value="Nutricional">Nutricional</option>
                            <option value="Sal">Sal</option>
                            <option value="Suplemento">Suplemento</option>
                            
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
                name="fabricante_racao"
                label=" "
                tooltip="Informe a fabricamente do ração."
                rules={[{ required: true, message: 'Digite o nome a fabricante da ração.', whitespace: true }]}
            >
                <Input placeholder="Fabricante da ração." style={{ width: 500 }} />
            </Form.Item>




            <div style={{ display: 'flex' }}>

                <div >
                    <Form.Item
                        name="peso_saco"
                        label=" "
                        tooltip="Informe o peso"
                        rules={[{ required: true, message: 'Por favor digite o peso', whitespace: true }]}
                    >
                        <Input placeholder="Peso" style={{ width: 230 }} />
                    </Form.Item>

                </div>

                <div >
                    <Form.Item

                        name="unidade_medida"
                        label=" "
                        tooltip="Ao informar a quantidade do ração informe a sua unidade de medida. Ex: 20g, 100ml..."
                        rules={[{ required: true, message: 'Por favor seleciona a unidade' }]}
                    >
                        <Select placeholder="Unidade de Media" style={{ width: 230 }}>
                            <option value="T" title="Toneladas">T</option>
                            <option value="kg" title="Quilos">kg</option>
                            <option value="L" title="Litros">L</option>

                        </Select>
                    </Form.Item>
                </div>

            </div>

            <div style={{ display: 'flex' }}>

                <div >

                    <Form.Item
                        name="data_validade"
                        label=" "

                        tooltip="Selecione a data de validade do ração"
                        rules={[{ required: true, message: 'Por favor selecione a data de validade' }]}
                    >
                      

                            <DatePicker onChange={onChange} placeholder="Data de Validade" style={{ width: 230 }} />

                   
                    </Form.Item >
                </div>

                <div >
                    <Form.Item
                        name="data_registro"
                        label=" "
                        tooltip="Cadastro do ração"
                        rules={[{ required: true, message: 'Por favor selecione a para cadastrar o ração' }]}
                    >
                        

                            <DatePicker onChange={onChange} placeholder="Data do Registro" style={{ width: 230 }} />

                    
                    </Form.Item>
                </div>
                

            </div>


                <div>
                    <Form.Item
                        name="informacao_racao"
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
            </Form>
        </div>
    );
};

export default Registration_food;