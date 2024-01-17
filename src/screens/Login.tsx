// import logo from '@/assets/images/logotipo.png'
import React from 'react';
import '../../css/login.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { NavLink } from 'react-router-dom';

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className='login-container'>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Por favor insira seu nome de usuário!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Usuário" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Por favor insira sua senha!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Senha"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Lembrar</Checkbox>
        </Form.Item>

        <NavLink to={'#'} style={{color:'red'}}>
          Esqueceu a Senha
        </NavLink>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
            Entrar 
        </Button>
        ou <NavLink to={'/registration'} style={{color:'red'}}>Registrar</NavLink>
      </Form.Item>
    </Form>
    </div>
  );
};

export default App;