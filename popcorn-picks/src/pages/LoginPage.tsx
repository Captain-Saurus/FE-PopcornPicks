import React from "react";
import styled from "styled-components";
import {
  LAPTOP_LARGE_SIZE,
  LAPTOP_SIZE,
  TABLET_SIZE,
} from "../constants/constants";
import NaverLogin from "../assets/svgs/NaverLogin.svg";
import KakaoLogin from "../assets/svgs/KakaoLogin.svg";
import GoogleLogin from "../assets/svgs/GoogleLogin.svg";
import { Link } from "react-router-dom";

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
              <Link to="/signup">회원가입</Link>
            </LoginFindAndJoin>
          </LoginOption>
        </Login>
        <SNS>
          <SNSLogin>
            <p>소셜 로그인</p>
            <img src={NaverLogin} alt="네이버 로그인 버튼" />
            <img src={KakaoLogin} alt="카카오 로그인 버튼" />
            <img src={GoogleLogin} alt="구글 로그인 버튼" />
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
  @media screen and (min-width: ${TABLET_SIZE}) {
    justify-content: center;
    height: 100%;
    width: 50%;
  }
`;

const LoginBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 60vh;
  border: 1px solid black;
  border-radius: 8px;
  @media screen and (min-width: ${TABLET_SIZE}) {
    flex-wrap: wrap;
  }
  @media screen and (min-width: ${LAPTOP_SIZE}) {
    width: 45%;
  }
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
  @media screen and (min-width: ${TABLET_SIZE}) {
    justify-content: center;
  }
  @media screen and (min-width: ${LAPTOP_SIZE}) {
    font-size: 14px;
  }
  @media screen and (min-width: ${LAPTOP_LARGE_SIZE}) {
    font-size: 16px;
  }
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
  height: 100%;

  @media screen and (min-width: ${TABLET_SIZE}) {
    flex-wrap: wrap;
    width: 50%;
  }
`;

const SNSLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  > img {
    width: 50%;
  }
  > p {
    font-weight: bold;
    font-size: 18px;
  }

  @media screen and (min-width: ${TABLET_SIZE}) {
    justify-content: center;
    margin: 0 auto;

    > p {
      margin-bottom: 15px;
    }
    > img {
      margin-bottom: 10px;
    }
  }
`;
