import { FiTrash } from 'react-icons/fi'
import ButtonIcon from './base/buttonIcon'
import { Card } from './base/card'
import { Heading } from './base/heading'
import { List } from './list'
import 'twin.macro'
import { PlaylistItem } from '../models/playlistItem'
import { PlaylistNoResources } from './playlistNoResources'

interface PlayListProps {
  list: PlaylistItem[]
  playlistFilter: (callback: (element: { id: number }) => boolean) => void
}

const PlayList = ({ list, playlistFilter, ...props }: PlayListProps) => {
  const handleRemoveItem = (id: number) =>
    playlistFilter(item => id !== item.id)

  return (
    <Card tw="flex flex-col" {...props}>
      <Heading size="lg" tag="h2" tw="p-4">
        Your playlist
      </Heading>
      {list.length ? (
        <List
          list={list}
          action={item => (
            <ButtonIcon onClick={() => handleRemoveItem(item.id)}>
              <FiTrash />
            </ButtonIcon>
          )}
        ></List>
      ) : (
        <PlaylistNoResources />
      )}
    </Card>
  )
}

export { PlayList }
