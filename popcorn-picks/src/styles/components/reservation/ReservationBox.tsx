import React from "react";
import styled from "styled-components";

interface IMockdata {
  title: string;
  content: string[];
}
const ReservationBox: React.FC<{ data: IMockdata }> = ({ data }) => {
  return (
    <>
      <DataDiv>
        <TitleDiv>{data.title}</TitleDiv>
        <ContentDiv>{data.content}</ContentDiv>
      </DataDiv>
    </>
  );
};

export default ReservationBox;

const DataDiv = styled.div`
  display: flex;
  flex-direction: column;
  width : 100%:
  height : 100%;
  margin-left: 10px;

`;

const TitleDiv = styled.div`
  display: flex;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
`;

const ContentDiv = styled.div`
  display: flex;
  width: 100%;
  font-size: 12px;
`;
