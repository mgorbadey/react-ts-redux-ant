import { Layout, Menu } from 'antd';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../router';

const Navbar: FC = () => {

  const router = useHistory()
  const { isAuth } = useTypedSelector(state => state.auth)
  
  return (
    <Layout.Header className="header">
      {isAuth 
      ?
      
      <Menu theme="dark" mode="horizontal" selectable={false}>
      <Menu.Item 
          onClick={() => router.push(RouteNames.LOGIN)}
          key={1}
          >
            user
          </Menu.Item>
          <Menu.Item 
          onClick={() => console.log('Logout')}
          key={2}
          >
            Logout
          </Menu.Item>
        </Menu>
      
      :
      <>
      <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item 
          onClick={() => router.push(RouteNames.LOGIN)}
          key={1}
          >
            Login
          </Menu.Item>
        </Menu>
      </>
      }
    </Layout.Header>
  );
};

export default Navbar;