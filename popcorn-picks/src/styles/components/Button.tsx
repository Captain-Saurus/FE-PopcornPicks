import styled from "styled-components";

interface ButtonProps {
  comment: string | { text: string };
}

const Button: React.FC<ButtonProps> = ({ comment }) => {
  if (typeof comment === "string") {
    return <ButtonDiv>{comment}</ButtonDiv>;
  } else {
    return <ButtonDiv>{comment.text}</ButtonDiv>;
  }
};
export default Button;

const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  background-color: #fd7f49;
  color: white;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  @media screen and (min-width: 768px) {
    height: 40px;
  }
  @media screen and (min-width: 1024px) {
    height: 55px;
  }
  @media screen and (min-width: 1440px) {
    height: 55px;
  }
`;
