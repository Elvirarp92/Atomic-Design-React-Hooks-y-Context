import  styled  from "styled-components";

const Button = styled.button`
  border: 1px solid red;
  padding: 10px;
`;

const ButtonCancel = styled(Button)`
  background-color: red;
`;

export { Button, ButtonCancel };