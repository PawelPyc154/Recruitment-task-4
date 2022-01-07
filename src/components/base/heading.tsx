import React from 'react'
import { ReactNode } from 'react'
import { CSSProp } from 'styled-components'
import tw from 'twin.macro'

type As = 'h1' | 'h2'

const sizes = {
  sm: tw`text-sm`,
  base: tw`text-base`,
  lg: tw`text-lg`,
}

interface ComponentProps {
  tag: As
  children: ReactNode
  className?: string
  css?: CSSProp
}
const Component = ({ tag, className, children }: ComponentProps) =>
  React.createElement(tag, { className }, children)

interface HeadingProps {
  children: ReactNode
  tag?: As
  size: keyof typeof sizes
}

const Heading = ({ children, tag = 'h1', size, ...props }: HeadingProps) => (
  <Component tag={tag} css={[sizes[size]]} {...props}>
    {children}
  </Component>
)

export { Heading }
