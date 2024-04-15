import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 8px;
  background-color: blue;
  color: white;
  border: none;
  padding: 10px 14px;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    background-color: darkblue;
  }
`;

export default StyledButton;
