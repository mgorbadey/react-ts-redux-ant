import { Card, Layout } from 'antd';
import React, { FC } from 'react';
import LoginForm from '../components/LoginForm';

const { Content } = Layout;

const Login: FC = () => {
  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Content
        style={{
          padding: 24,
          margin: 0,
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Card>
          <LoginForm />
        </Card>
      </Content>
    </Layout>
  );
};

export default Login;