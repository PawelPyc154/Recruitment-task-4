import { ListItem } from './listItem'
import 'twin.macro'
import { ReactNode } from 'react'
import { PlaylistItem } from '../models/playlistItem'

interface ListProps {
  list: Array<PlaylistItem>
  action: (id: PlaylistItem) => ReactNode
}

const List = ({ list = [], action }: ListProps) => (
  <div tw="divide-y divide-light-gay ">
    {list.map(item => (
      <ListItem key={item.id} {...item}>
        {action(item)}
      </ListItem>
    ))}
  </div>
)

export { List }
