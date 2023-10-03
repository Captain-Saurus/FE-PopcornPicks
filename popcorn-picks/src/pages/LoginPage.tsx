import React from "react";
import styled from "styled-components";

const LoginPage: React.FC = () => {
  return (
    <LoginSection>
      <LoginBoxDiv>
        <LoginDiv>
          <LoginInputDiv>
            <LoginInput placeholder="아이디를 입력해주세요" />
            <LoginInput type="password" placeholder="비밀번호를 입력해주세요" />
          </LoginInputDiv>
          <LoginButton>로그인</LoginButton>
        </LoginDiv>
        <SNSLogin>
          <p>소셜 로그인</p>
        </SNSLogin>
      </LoginBoxDiv>
    </LoginSection>
  );
};

export default LoginPage;

const LoginSection = styled.section`
  display: flex;
  width: 100%;
  height: 70vh;
  justify-content: center;
  align-items: center;
`;

const LoginBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 500px;
  border: 1px solid black;
  border-radius: 8px;
`;

const LoginDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
`;

const LoginInputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginInput = styled.input`
  display: flex;
  margin-bottom: 10px;
`;

const LoginButton = styled.button`
  display: flex;
  width: 80px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border: 0px;
  border-radius: 8px;
`;

const SNSLogin = styled.div`
  display: flex;
`;
