
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


    return (

        <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center'}}>



            <div style={{ display: 'flex' }}>

                <div style={{ width: 240 }} >
                    <Form.Item

                        name="raca_bovino"
                        label=" "
                        tooltip="Selecione a raça do bovino de sua Fazenda/confinamento."
                        rules={[{ required: true, message: 'Por favor seleciona a raça!' }]}
                    >
                        <Select placeholder="Raças Bolvina"  >
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
                <div style={{ width: 240 }}>
                    <Form.Item

                        name="classificacao_bovino"
                        label=" "
                        tooltip="Localização de área de zona rural ou zona urbana da Fazenda."
                        rules={[{ required: true, message: 'Por favor seleciona o Gênero!' }]}
                    >
                        <Select placeholder="Classificação do Bovino">
                      
                    <option value="cruzado">Cruzado</option>
                    <option value="gol" title="Gado de Origem Leiteira">Gol</option>
                        </Select>
                    </Form.Item>
                </div>

            </div>

            <Form.Item
             

                name="nome_fazenda"
                label=" "
                tooltip="Identificação do Bovino"
                rules={[{ required: true, message: 'Por favor insira o nome!', whitespace: true }]}
            >
                <Input placeholder="teste"/>
            </Form.Item>





            <div style={{ display: 'flex' }}>

                <div >

                    <Form.Item

                        name="estado"
                        label="Estado"
                        tooltip="Informe o Estado"

                        rules={[{ required: true, message: 'Por favor insira o Estado', whitespace: true }]}

                    >
                        <Input  />
                    </Form.Item>
                </div>

                <div >
                    <Form.Item

                        name="cidade"
                        label="Cidade"
                        tooltip="Informe a Cidade"

                        rules={[{ required: true, message: 'Por favor insira a Cidade', whitespace: true }]}

                    >
                        <Input style={{ maxWidth: 182 }} />
                    </Form.Item>
                </div>

            </div>


            <Form.Item
                name="tipo_fazenda"
                label="Pecuária "
                tooltip="Tipos de fazendas pecuárias, cada uma especializada em diferentes aspectos da criação de animais."
                rules={[{ required: true, message: 'Por favor seleciona o Gênero!' }]}
            >
                <Select placeholder="Selecionar o tipo de Fazendas Pecuárias">
                    <Option value="fazenda_corte">Fazendas de gado de corte</Option>
                    <Option value="fazenda_leiteiro">Fazendas de gado leiteiro</Option>
                    <Option value="pastagem_manejo">Pastagens e Manejo de Rebanho</Option>
                    <Option value="fazenda_ovinos">Fazendas de criação de ovinos</Option>
                    <Option value="fazend_suinos">Fazendas de suínos</Option>
                    <Option value="fazenda_mista">Fazendas mistas</Option>
                </Select>
            </Form.Item>


            <div style={{ display: 'flex' }}>

                <div >

                    <Form.Item

                        name="alqueiro"
                        label="Alqueiro"
                        tooltip="Alqueire é uma referência para definir o tamanho de uma área rural "

                        rules={[{ required: true, message: 'Por favor insira o tamanho do Alqueiro', whitespace: true }]}

                    >
                        <Input style={{ maxWidth: 184 }} />
                    </Form.Item>
                </div>



            </div>





            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    <NavLink to='/perfil_user'>
                        Salvar
                    </NavLink>
                </Button>

                <Button type="primary" htmlType="submit">
                    <NavLink to='/registration'>
                        Voltar
                    </NavLink>
                </Button>

            </Form.Item>
            {/* </Form> */}

        </div>
    );
};

export default Registration_bovine;