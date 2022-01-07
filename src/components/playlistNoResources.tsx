import 'twin.macro'
import { IoMdMusicalNote } from 'react-icons/io'

const PlaylistNoResources = () => (
  <div tw="flex flex-col gap-4 justify-center items-center flex-grow pb-32">
    <div tw="flex text-4xl gap-2">
      <IoMdMusicalNote />
      <IoMdMusicalNote />
      <IoMdMusicalNote />
    </div>
    <div tw="text-2xl">{'Add your songs :)'}</div>
  </div>
)

export { PlaylistNoResources }
