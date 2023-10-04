import React from "react";
import { useNavigate } from "react-router-dom";

const MyPage: React.FC = () => {
  alert("준비 중입니다!");
  const navigate = useNavigate();
  const moveMain = () => {
    navigate("/");
  };
  return (
    <>
      <button onClick={moveMain}>메인페이지로 이동하기</button>
    </>
  );
};

export default MyPage;
