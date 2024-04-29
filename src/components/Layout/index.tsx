/**
 * Created by Capricorncd
 * https://github.com/capricorncd
 * Date: 2022/09/09 21:46:09 (GMT+0900)
 */
import { HomeOutlined, GithubOutlined } from '@ant-design/icons';
import { Button, PageHeader } from 'antd';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { AuthStatus } from '../Auth';
import { Wrapper } from '../Ui';

export function Layout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <PageHeader
        ghost={false}
        title="Blockchain"
        subTitle="Ant Design & React18 & Vite"
        style={{ position: 'sticky', top: 0, zIndex: 1 }}
        extra={[
          // 不用Link，AuthProvider的数据会丢失
          // AuthProvider status will be lost when don't use Link
          <Link key="home" to="/">
            <Button type={pathname === '/' ? 'primary' : 'default'}>
              Home
            </Button>
          </Link>,
          <Link key="protected" to="/protected">
            <Button type={pathname === '/protected' ? 'primary' : 'default'}>
              Protected Page
            </Button>
          </Link>,
          <Link key="public" to="/public">
            <Button type={pathname === '/public' ? 'primary' : 'default'}>
              Public
            </Button>
          </Link>,
          <Button
            key="github"
            shape="circle"
            href="https://github.com/capricorncd/blockchain"
            target="_blank"
          >
            <GithubOutlined />
          </Button>,
        ]}
        backIcon={<HomeOutlined />}
        onBack={() => navigate('/')}
      ></PageHeader>
      <Wrapper p="24" bg="#f0f2f5" mh="calc(100vh - 152px)">
        <AuthStatus />
        <Outlet />
      </Wrapper>
      <Wrapper p="24 50" ta="center">
        ©2022 Created by{' '}
        <Button
          type="link"
          href="https://github.com/capricorncd"
          target="_blank"
          style={{ padding: 0 }}
        >
          Capricorncd
        </Button>
        .
      </Wrapper>
    </>
  );
}
