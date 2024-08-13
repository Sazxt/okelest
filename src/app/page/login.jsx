"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Form, Input, Button, Card } from 'antd';
import { useRouter } from 'next/navigation'
import image from '../favicon.ico'

export default function LoginPage() {
    const router = useRouter()
    const onFinish = (values) => {
        console.log("click")
        router.push('/dashboard')
        console.log('Login form values:', values);
        // Handle login logic here
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
            <div className="relative max-w-md w-full">
                <Card
                    className="absolute top-0 left-0 w-full h-full transform -rotate-6 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-lg"
                    bordered={false}
                />
                <Card
                    className="relative z-10 p-8 bg-white shadow-lg rounded-lg"
                    bordered={false}
                >
                    <div className="text-center mb-8">
                        <Image src={image} alt="Logo" width={80} height={80} className="mx-auto" />
                        <h1 className="text-3xl font-bold text-gray-800 mt-4">Welcome Back</h1>
                        <p className="text-gray-600">Login to your account</p>
                    </div>
                    <Form onFinish={onFinish}>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input size="large" placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password size="large" placeholder="Password" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" size="large" block>
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className="mt-4 text-center">
                        <p className="text-gray-600">
                            Dont have an account?{' '}
                            <Link href="/register" className="text-indigo-500 hover:text-indigo-600 font-semibold">
                                Register
                            </Link>
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
}