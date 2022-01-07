import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import tw from 'twin.macro'
import { Spinner } from './spinner'

const colors = {
  transparent: tw`bg-transparent`,
  orange: tw`bg-orange`,
}

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  color?: keyof typeof colors
  isLoading?: boolean
}

const Button = ({
  color = 'orange',
  children,
  isLoading,
  ...props
}: ButtonProps) => (
  <button
    css={[
      tw`px-4 h-11 rounded-sm mx-auto flex items-center gap-2 relative`,
      colors[color],
      isLoading && tw`text-transparent`,
    ]}
    {...props}
  >
    {children}
    {isLoading && (
      <div tw="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Spinner tw="" />
      </div>
    )}
  </button>
)

export { Button }
