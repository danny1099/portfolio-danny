import styled from 'styled-components'

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  width: 45%;

  & span {
    display: flex;
    color: var(--color-text-secondary);
    flex-direction: column;
    gap: 20px;
    margin-bottom: 50px;
    padding: 0 0.7rem;
  }
`
