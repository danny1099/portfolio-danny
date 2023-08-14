import styled from 'styled-components'

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  width: 45%;

  & span {
    color: var(--color-text-secondary);
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 4rem;
    padding: 0 1rem;
  }
`
