import { useState, useEffect, useMemo } from 'react'
import { Dropdown as DDNextUI } from '@nextui-org/react'
import { DDNextUIButton, DDNextUIMenu } from './styled-components'

export function Dropdown({ show, onChange, initialValue = '', children }) {
  const [selected, setSelected] = useState(new Set([initialValue]))

  const value = useMemo(
    () => Array.from(selected).join(', ').replaceAll('_', ' '),
    [selected]
  )

  useEffect(() => {
    onChange(value)
  }, [selected])

  return (
    <DDNextUI>
      <DDNextUIButton
        light
        style={{ padding: '0', height: '30px', width: '30px' }}
      >
        {show}
      </DDNextUIButton>
      <DDNextUIMenu
        aria-label="Selection actions"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
        color="secondary"
      >
        {children}
      </DDNextUIMenu>
    </DDNextUI>
  )
}
