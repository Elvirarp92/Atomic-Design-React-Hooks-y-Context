

import  styled  from "styled-components";

const Text = styled.p`
  line-height: 18px;
  color: red;
  font-weight: 500;
`;

const TextItalic = styled(Text)`
  font-family: Roboto-Italic;
`;

export { Text, TextItalic };