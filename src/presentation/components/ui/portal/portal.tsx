import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  root: HTMLElement
  children: ReactNode
}

export default function Portal({ root, children }: Props) {
  const container = document.createElement('div')

  useEffect(() => {
    root.appendChild(container)

    return () => {
      root.removeChild(container)
    }
  }, [container, root])

  return createPortal(<>{children}</>, container)
}
