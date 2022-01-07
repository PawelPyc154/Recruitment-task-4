import { ReactNode } from 'react'
import 'twin.macro'
import { PlaylistItem } from '../models/playlistItem'

type ListItemProps = {
  children: ReactNode
} & PlaylistItem

const ListItem = ({ title, artist, children }: ListItemProps) => (
  <article tw="flex gap-6 px-6 py-4">
    <div tw="rounded-full h-12 w-12 overflow-hidden flex-shrink-0">
      <img src={artist.picture} alt={artist.name} />
    </div>
    <div tw="flex-grow">
      <div tw="text-lg">{title}</div>
      <div tw="">{artist.name}</div>
    </div>
    {children}
  </article>
)

export { ListItem }
