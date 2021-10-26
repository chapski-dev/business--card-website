
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { CameraOutlined, CheckSquareOutlined, FormOutlined, UserOutlined } from '@ant-design/icons';
import './style.scss'

const { Header, Content, Footer } = Layout;


const PageWrapper = (props:any) => {
  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu  mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item className='menu-item' key="home" icon={<CheckSquareOutlined />}>
          <Link className='menu-link' to='/home'>Home Page</Link>
        </Menu.Item>
        <Menu.Item className='menu-item' key="funiro" icon={<UserOutlined />}>
          <Link className='menu-link' to='/funiro' >Funiro</Link>
        </Menu.Item>
        <Menu.Item className='menu-item' key="figma-land" icon={<CameraOutlined />}>
          <Link className='menu-link' to='/figma-land'>Figma Land</Link>
        </Menu.Item>
        <Menu.Item className='menu-item' key="it-studio-page" icon={<FormOutlined />}>
          <Link className='menu-link' to='/it-studio-page'>It Studio</Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      {props.children}
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  )
}

export default PageWrapper;