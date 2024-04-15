import styled, { css } from "styled-components";

const Button = styled.button`
  border-radius: 8px;
  color: blue;
  background: transparent;
  border: 1px solid blue;
  padding: 10px 14px;
  cursor: pointer;
  transition: 300ms;

  ${(props) =>
    props.$primary &&
    css`
      background-color: blue;
      color: white;
    `}
`;

export default Button;
