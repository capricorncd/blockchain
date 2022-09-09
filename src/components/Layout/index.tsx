/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/09/09 21:46:09 (GMT+0900)
 */
import { HomeOutlined, GithubOutlined } from '@ant-design/icons';
import { Button, PageHeader, Layout as AntLayout } from 'antd';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { AuthStatus } from '../Auth';

const { Content, Footer } = AntLayout;

export function Layout() {
  const navigate = useNavigate();

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <PageHeader
        ghost={false}
        title="React18 Hooks Typescript Vite"
        subTitle="Ant Design"
        extra={[
          // 不用Link，AuthProvider的数据会丢失
          // AuthProvider status will be lost when don't use Link
          <Link key="protected" to="/protected">
            <Button>Protected Page</Button>
          </Link>,
          <Link key="public" to="/public">
            <Button type="primary">Public</Button>
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
      <Content style={{ padding: '24px' }}>
        <AuthStatus />
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
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
      </Footer>
    </AntLayout>
  );
}
