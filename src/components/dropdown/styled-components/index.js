import { Dropdown } from '@nextui-org/react'
import styled from 'styled-components'

export const DDNextUIButton = styled(Dropdown.Button)`
  align-items: center;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  font-size: small;
  justify-content: center;

  & > span.nextui-button-icon {
    display: none;
  }
`

export const DDNextUIItem = styled(Dropdown.Item)`
  background-color: var(--color-background);
  font-family: 'Poppins';
  font-size: small;
  width: fit-content;
`

export const DDNextUIMenu = styled(Dropdown.Menu)`
  background-color: var(--color-background);
  font-family: 'Poppins';
  font-size: small;
`
