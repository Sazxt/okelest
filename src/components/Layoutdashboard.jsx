"use client"
import React, { useState } from 'react';
import { Layout, Menu, Dropdown, Avatar, Button } from 'antd';
import {
    HomeOutlined,
    UserOutlined,
    SettingOutlined,
    BarChartOutlined,
    EditOutlined,
    LogoutOutlined,
    FileOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import { useRouter } from 'next/navigation'

const { Header, Content, Footer, Sider } = Layout;
export default function Layoutdashboard({ children }) {
    const router = useRouter()
    const [collapsed, setCollapsed] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('1');

    const menuItems = [
        { key: '1', icon: <HomeOutlined />, label: 'Beranda' },
        { key: '2', icon: <UserOutlined />, label: 'Pengguna' },
        { key: '3', icon: <BarChartOutlined />, label: 'Statistik' },
        { key: '4', icon: <FileOutlined />, label: 'Laporan' },
        { key: '5', icon: <SettingOutlined />, label: 'Pengaturan' },
    ];

    const userMenuItems = [
        {
            key: '1',
            icon: <EditOutlined />,
            label: 'Edit Profil',
        },
        {
            key: '2',
            icon: <LogoutOutlined />,
            label: 'Logout',
        },
    ];

    const handleUserMenuClick = ({ key }) => {
        if (key === '1') {
            // Logika untuk edit profil
            console.log('Edit Profil');
        } else if (key === '2') {
            // Logika untuk logout
            console.log('Logout');
            router.push('/')
        }
    };

    const renderContent = () => {
        switch (selectedMenu) {
            case '1':
                return <div className="text-2xl font-bold">Selamat datang di Dashboard</div>;
            case '2':
                return <div className="text-2xl font-bold">Manajemen Pengguna</div>;
            case '3':
                return <div className="text-2xl font-bold">Statistik</div>;
            case '4':
                return <div className="text-2xl font-bold">Laporan</div>;
            case '5':
                return <div className="text-2xl font-bold">Pengaturan</div>;
            default:
                return <div className="text-2xl font-bold">Pilih menu</div>;
        }
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider 
                trigger={null} 
                collapsible 
                collapsed={collapsed}
                className="bg-base-200" // Apply a background color to the sider
            >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    items={menuItems}
                    onSelect={({ key }) => setSelectedMenu(key)}
                />
            </Sider>
            <Layout>
                <Header className="bg-base-100 p-0 flex justify-between items-center px-4"> 
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        className="text-xl"
                    />
                    <Dropdown
                        menu={{
                            items: userMenuItems,
                            onClick: handleUserMenuClick,
                        }}
                        placement="bottomRight"
                        arrow
                    >
                        <div className="flex items-center cursor-pointer">
                            <span className="mr-2 text-gray-700">John Doe</span>
                            <Avatar icon={<UserOutlined />} />
                        </div>
                    </Dropdown>
                </Header>
                <Content className="m-4">
                    <div className="p-6 bg-base-100 rounded-lg shadow-md min-h-[360px]"> 
                        {renderContent()}
                        {children}
                    </div>
                </Content>
                <Footer className="text-center bg-base-200 p-4">Admin Panel ©2024 Sazxt</Footer> 
            </Layout>
        </Layout>
    )
}