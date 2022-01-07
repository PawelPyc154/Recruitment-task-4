import { ReactNode } from 'react'
import { CSSProp } from 'styled-components'
import 'twin.macro'

interface CardProps {
  children: ReactNode
  className?: string
}

const Card = ({ children, ...props }: CardProps) => (
  <div tw="bg-secondary rounded-sm" {...props}>
    {children}
  </div>
)

export { Card }
