import React from "react";
import styled from "styled-components";
import { ReactComponent as NaverLogin } from "../assets/svgs/NaverLogin.svg";
import { ReactComponent as KakaoLogin } from "../assets/svgs/KakaoLogin.svg";
import { ReactComponent as GoogleLogin } from "../assets/svgs/GoogleLogin.svg";

const LoginPage: React.FC = () => {
  return (
    <LoginSection>
      <LoginBoxDiv>
        <Login>
          <LoginDiv>
            <LoginInputDiv>
              <LoginInput placeholder="아이디를 입력해주세요" />
              <LoginInput
                type="password"
                placeholder="비밀번호를 입력해주세요"
              />
            </LoginInputDiv>
            <LoginButton>로그인</LoginButton>
          </LoginDiv>
          <LoginOption>
            <LoginIDSave>
              <input type="checkbox" />
              <p>아이디 저장</p>
            </LoginIDSave>
            <LoginFindAndJoin>
              <p>아이디 찾기</p>
              <p>비밀번호 찾기</p>
              <p>회원가입</p>
            </LoginFindAndJoin>
          </LoginOption>
        </Login>
        <SNS>
          <SNSLogin>
            <p>소셜 로그인</p>
            <KakaoLogin />
            <NaverLogin />
            <GoogleLogin />
          </SNSLogin>
        </SNS>
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

const Login = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
`;

const LoginBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 450px;
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
  margin-bottom: 8px;
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

const LoginOption = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: space-around;
  align-items: center;
`;

const LoginIDSave = styled.div`
  display: flex;
  align-items: center;
  > p {
    cursor: pointer;
  }
`;

const LoginFindAndJoin = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
  > p {
    cursor: pointer;
  }
`;

const SNS = styled.div`
  display: flex;
`;

const SNSLogin = styled.div`
  display: flex;
  flex-direction: column;

  > svg {
    width: 50%;
  }
`;
