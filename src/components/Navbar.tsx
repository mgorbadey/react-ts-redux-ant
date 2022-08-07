import { Layout, Menu } from 'antd';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../router';
import { useActions } from '../hooks/useActions';

const Navbar: FC = () => {
  const router = useHistory()
  const { isAuth, user } = useTypedSelector(state => state.auth)
  const {logout} = useActions()
  
  return (
    <Layout.Header className="header">
      {isAuth 
      ?
      
      <Menu theme="dark" mode="horizontal" selectable={false}>
      <Menu.Item 
          onClick={() => router.push(RouteNames.LOGIN)}
          key={1}
          >
            {user.username}
          </Menu.Item>
          <Menu.Item 
          onClick={logout}
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