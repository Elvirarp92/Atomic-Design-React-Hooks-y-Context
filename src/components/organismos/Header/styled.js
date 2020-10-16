import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  & > :not(:first-child) {
    margin-left: 1rem;
  }
`

export { Wrapper, InnerWrapper } 