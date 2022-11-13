import React, { useEffect } from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';

import { AppleLoginButton, KakaoLoginButton } from '../components/atoms';
import Image from '../components/utils/Image';

const LogoContainer = styled.div`
  margin: 30vh auto 20vh;
  text-align: center;
`;

const AppleLoginButtonStyled = styled(AppleLoginButton)`
  margin-top: 20px;
`;

const Login = () => {
  useEffect(() => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY as string);
  }, []);

  const handleKakaoLogin = () => {
    Kakao.Auth.authorize({
      redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL
    });
  };

  return (
    <>
      <Head>
        <title>GRoom | Login</title>
      </Head>
      <LogoContainer>
        <Image
          src="/illustrations/Logo.png"
          alt="GRoom 로고"
          width="200"
          height="75.5"
        />
      </LogoContainer>

      <KakaoLoginButton onClick={handleKakaoLogin} width="100%" />
    </>
  );
};

export default Login;
