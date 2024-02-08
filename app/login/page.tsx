'use client';
import { TextInput, PasswordInput, Button } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { IconLogin2 } from '@tabler/icons-react';

function LoginPassword() {
  return (
    <div className="flex flex-row items-end justify-between">
      <PasswordInput
        size="lg"
        radius="xl"
        label="密碼"
        placeholder="請輸入密碼"
        className="basis-9/12"/>
      {/* <div> */}
      {/* <span className="material-symbols-outlined">
          login
         
        </span> */}
      {/* <Link href="/lobby">Temp Lobby Link</Link> */}
      {/* </div> */}

      <Button
        variant="filled"
        size="md"
        radius="xl"
        className="basis-3/12 mx-2"
        rightSection={<IconLogin2 size={25}/>}
         component={Link} 
         href="/lobby"
      >登入</Button>
    </div>
  );
  //
}

function LoginUsername() {
  return (
    <TextInput
      size="lg"
      radius="xl"
      label="帳號"
      placeholder="請輸入學號"
      autoFocus
      tabIndex={1}
    />
  );
}

function LoginInputs({ children }: { children: React.ReactNode }) {
  return <form className="flex flex-col h-full w-full lg:w-2/6 gap-3">{children}</form>;
}

function LoginHeader() {
  return <h1 className="self-center">登入北科大!</h1>;
}

function LoginForm({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 lg:w-4/6  lg:items-center max-h-svh justify-center">
      {children}
    </div>
  );
}

function LoginContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center justify-center basis-11/12">{children}</div>;
}

export default function Login() {
  return (
    <LoginContainer>
      <LoginForm>
        <LoginHeader />
        <LoginInputs>
          <LoginUsername />
          <LoginPassword />
        </LoginInputs>
      </LoginForm>
    </LoginContainer>
  );
}
