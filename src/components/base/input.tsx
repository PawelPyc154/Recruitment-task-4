import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import tw from 'twin.macro'
import { Spinner } from './spinner'

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string
  label: string
  isLoading?: boolean
}

const Input = ({ label, isLoading, name, ...props }: InputProps) => (
  <div>
    <label htmlFor={name}>{label}:</label>
    <div tw="relative">
      <input
        name={name}
        id={name}
        css={[
          tw`rounded-sm w-full bg-primary h-10 p-2`,
          isLoading && tw`pr-12`,
        ]}
        {...props}
      />
      {isLoading && (
        <div tw="absolute top-1/2 right-4 transform  -translate-y-1/2">
          <Spinner tw="" />
        </div>
      )}
    </div>
  </div>
)

export { Input }
