import 'twin.macro'
import { IoMdMusicalNote } from 'react-icons/io'
interface NoResourcesProps {
  text: string
}
const NoResources = ({ text, ...props }: NoResourcesProps) => (
  <div
    tw="flex flex-col gap-4 justify-center items-center flex-grow pb-32"
    {...props}
  >
    <div tw="flex text-4xl gap-2">
      <IoMdMusicalNote />
      <IoMdMusicalNote />
      <IoMdMusicalNote />
    </div>
    <div tw="text-2xl">{text}</div>
  </div>
)

export { NoResources }
