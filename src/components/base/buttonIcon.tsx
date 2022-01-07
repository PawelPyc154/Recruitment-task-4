import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import 'twin.macro'

type ButtonIconProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const ButtonIcon = (props: ButtonIconProps) => (
  <button
    tw="h-10 w-10 flex items-center justify-center text-2xl bg-orange text-white rounded-sm disabled:(opacity-50 pointer-events-none)"
    {...props}
  />
)

export default ButtonIcon
