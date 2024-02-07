'use client'
import { TextInput, PasswordInput, Button } from '@mantine/core';
import Link from 'next/link';
function LoginPassword() {
  return(
    <div className="flex flex-row items-end justify-between">
      <PasswordInput
      size="lg"
      radius="xl"
      label="密碼"
      placeholder="請輸入密碼"
      className='basis-9/12'
    />
      <Button variant="filled" size="lg" radius="xl" className='basis-3/12 mx-2'><Link tabIndex={-1} href="/lobby"><span className="material-symbols-outlined">
login
</span></Link></Button>
    </div>
    
  );
}

function LoginUsername() {
  return(
    <TextInput
      size="lg"
      radius="xl"
      label="帳號"
      placeholder="請輸入學號"
    />
  );
}

function LoginInputs({children}: {children: React.ReactNode}) {
  return<form className="flex flex-col gap-3">{children}</form>
}

function LoginHeader() {
  return<h1>登入北科大!</h1>
}

function LoginForm({children}: {children: React.ReactNode}) {
  return(
    <div className='flex flex-col gap-5 mx-4 lg:w-96 lg:justify-center'>{children}</div>
  )
}

export default function Login() {
  return (
    <LoginForm>
      <LoginHeader />
      <LoginInputs>
        <LoginUsername />
        <LoginPassword />
      </LoginInputs>
    </LoginForm>
  
    
      );
}
