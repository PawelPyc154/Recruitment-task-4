import { FiTrash } from 'react-icons/fi'
import ButtonIcon from './base/buttonIcon'
import { Card } from './base/card'
import { Heading } from './base/heading'
import { SearchResultList } from './searchResultList'
import 'twin.macro'
import { PlaylistItem } from '../models/playlistItem'
import { NoResources } from './NoResources'

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
        <SearchResultList
          list={list}
          action={item => (
            <ButtonIcon onClick={() => handleRemoveItem(item.id)}>
              <FiTrash />
            </ButtonIcon>
          )}
        ></SearchResultList>
      ) : (
        <NoResources text="Add your songs :)" />
      )}
    </Card>
  )
}

export { PlayList }
