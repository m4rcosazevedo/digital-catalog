import { ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

interface Props extends LinkProps {
  children: ReactNode
}

export default function NavItem({ children, ...props }: Props) {
  const mergeClassis = twMerge(
    'text-white no-underline p-2 hover:bg-slate-500 rounded',
    props.className
  )

  return (
    <Link {...props} className={mergeClassis}>
      {children}
    </Link>
  )
}
