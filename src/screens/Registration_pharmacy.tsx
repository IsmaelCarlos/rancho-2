
import { IMaskInput } from "react-imask";
import React, { useEffect, useRef, useState } from 'react';
import type { CascaderProps } from 'antd';
// import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import {
    Button,
    Form,
    Input,
    Select,
    message
} from 'antd';

import { MedicamentoType } from '@/types/medicamento';

import { NavLink, useNavigate } from "react-router-dom";
import { } from 'react-icons'
import BackNSave from "@/components/CommonButtons";
import { MessageType } from "antd/es/message/interface";
import axios from "axios";
// import { medication } from "@/data/medication";

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

export default function () {



    const navigate = useNavigate();

    const [form] = Form.useForm();

    const hideLoading = useRef<MessageType>();

    const [loading, setLoading] = useState<boolean>(false);
    const [insertionResult, setInsertionResult] = useState<MedicamentoType>();

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
            const { ..._medicamento } = values;
            const medicamento = _medicamento as Omit<MedicamentoType, 'id_medicamento'>;
            // const result = await axios.post('http://localhost:6754/medicamento', medicamento).then(({data}) => data.result[0] as MedicamentoType);
            const result = await axios.post('http://localhost:6754/medicamento', medicamento) as MedicamentoType;
            message.success(`${medicamento.nome_medicamento} inserido com sucesso`);
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

                            name="tipo_medicamento"
                            label=" "
                            tooltip="Selecione o tipo de medicamento que deseja cadastrar"
                            rules={[{ required: true, message: 'Por favor seleciona o tipo!' }]}
                        >
                            <Select placeholder="Tipo de Medicamento" style={{ width: 500 }}>
                                <option value="Antibióticos">Antibióticos</option>
                                <option value="Anti-inflamatórios">Anti-inflamatórios</option>
                                <option value="Antiparasitários">Antiparasitários</option>
                                <option value="Vacinas">Vacinas</option>
                                <option value="Vitamínico">Vitamínico</option>
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
                    <Input placeholder="Nome do Medicamento" style={{ width: 500 }} />
                </Form.Item>


                <Form.Item
                    name="fabricante_medicamento"
                    label=" "
                    tooltip="Informe a fabricamente do medicamento."
                    rules={[{ required: true, message: 'Digite o nome da fabricante do medicamento.', whitespace: true }]}
                >
                    <Input placeholder="Fabricante do medicamento." style={{ width: 500 }} />
                </Form.Item>




                <div style={{ display: 'flex' }}>

                    <div >
                        <Form.Item
                            name="volume_medicamento"
                            label=" "
                            tooltip="V"
                            rules={[{ required: true, message: 'Por favor digite a quatidade', whitespace: true }]}
                        >
                            <Input placeholder="Quantidade" style={{ width: 230 }} />
                        </Form.Item>

                    </div>

                    <div >
                        <Form.Item

                            name="unidade_medida"
                            label=" "
                            tooltip="Ao informar a quantidade do medicamento informe a sua unidade de medida. Ex: 20g, 100ml..."
                            rules={[{ required: true, message: 'Por favor seleciona a unidade' }]}
                        >
                            <Select placeholder="Unidade de Media" style={{ width: 230 }}>
                                <option value="ug" title="Microgramas">µg</option>
                                <option value="mg" title="Miligramas">mg</option>
                                <option value="g" title="Gramas">g</option>
                                <option value="mL" title="Mililitros">mL</option>
                                <option value="CP" title="Comprimidos">CP</option>
                                <option value="AP" title="Ampolas">AM</option>
                                <option value="TB" title="Tubos">TB</option>
                                <option value="FR" title="Frascos">FR</option>
                                <option value="CX" title="Caixas">CX</option>
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

                            tooltip="Selecione a data de validade do medicamento"
                            // rules={[{ required: true, message: 'Por favor selecione a data de validade', whitespace: true }]}
                        >
                            

                                <DatePicker onChange={onChange} placeholder="Data de Validade" style={{ width: 230 }} />

                            
                        </Form.Item >
                    </div>

                    <div >
                        <Form.Item
                            name="data_registro"
                            label=" "
                            tooltip="Cadastro do medicamento"
                            // rules={[{ required: true, message: 'Por favor selecione a para cadastrar o medicamento', whitespace: true }]}
                        >
                           

                                <DatePicker onChange={onChange} placeholder="Data do Registro" style={{ width: 230 }} />

                    
                        </Form.Item >
                    </div>



                </div>
                <div>
                    <Form.Item
                        name="bula"
                        label=" "
                        tooltip="Digite uma observação caso tenha uma. Este Campo não é obrigatório, mas ter o máximo de informação melhor para compreender sobre o medicamento."
                    >
                        <Input.TextArea placeholder="Informar a Bula." autoSize={{ minRows: 1, maxRows: 6 }} spellCheck={true} />
                    </Form.Item>
                </div>

                {/* <Form.Item {...tailFormItemLayout}>
                <BackNSave
                    onBackClick={() => {
                        navigate(-1);
                    }}
                    onSaveClick={() => {
                        <Button type="primary" htmlType="submit">
                            Salvar
                        </Button>
                    }}
                />
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
