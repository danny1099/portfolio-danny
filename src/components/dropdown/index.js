import { useState, useEffect } from 'react'
import { Dropdown as DDNextUI } from '@nextui-org/react'
import { DDNextUIButton, DDNextUIMenu } from './styled-components'

export function Dropdown({ show, selected, onChange, items, children }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

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
        onSelectionChange={onChange}
        items={items}
      >
        {children}
      </DDNextUIMenu>
    </DDNextUI>
  )
}
