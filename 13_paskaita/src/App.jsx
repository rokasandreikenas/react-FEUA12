import styled from "styled-components";
import StyledButton from "./components/StyledButton";
import Button from "./components/Button";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightblue;
`;

const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
`;

const ErrorText = styled(Text)`
  color: red;
  font-weight: 700;
`;

const App = () => {
  return (
    <Container>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <ErrorText>Important!</ErrorText>
      <StyledButton>Press me</StyledButton>
      <br />
      <br />
      <Button>Normal Button</Button>
      <Button $primary>Primary button</Button>
    </Container>
  );
};

export default App;
