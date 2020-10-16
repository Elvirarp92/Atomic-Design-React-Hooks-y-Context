import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  min-height: 100vh;
`;

const Content = styled.section`
  width: 100%;
  margin: 2rem auto;
  max-width: 920px;
`;

export { Wrapper, Content };