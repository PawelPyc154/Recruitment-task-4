import axios from 'axios'
import { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { FiCheck } from 'react-icons/fi'
import { useQuery } from 'react-query'
import { PlaylistItem } from '../models/playlistItem'
import ButtonIcon from './base/buttonIcon'
import { Card } from './base/card'
import { Input } from './base/input'
import { SearchResultList } from './searchResultList'
import 'twin.macro'
import { NoResources } from './noResources'

interface SearchCardProps {
  addNewTrack: (element: PlaylistItem) => void
  playlist: PlaylistItem[]
}

const SearchCard = ({ addNewTrack, playlist }: SearchCardProps) => {
  const [search, setSearch] = useState('')
  const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=' + search
  const { data: list, isLoading } = useQuery({
    enabled: !!search,
    queryKey: url,
    queryFn: ({ signal }) => {
      const cancelToken = axios.CancelToken
      const source = cancelToken.source()

      const promise = axios
        .get(url, {
          headers: {
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
            'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
          },
          cancelToken: source.token,
        })
        .then(res => {
          if (res.data.hasOwnProperty('data')) {
            return res.data.data
          }
          console.log(res)
          throw new Error('TODO - handle api errors')
        })

      signal?.addEventListener('abort', () => {
        source.cancel('Query was cancelled by React Query')
      })

      return promise
    },
  })

  return (
    <Card tw="xl:col-span-7 overflow-auto h-[calc(100vh - 72px - 48px)]">
      <header tw="p-4 pb-6">
        <Input
          name="search"
          isLoading={isLoading}
          label="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </header>

      {list?.length && search ? (
        <SearchResultList
          list={list}
          action={item => {
            const isSelected = playlist.find(({ id }: any) => item.id === id)
            return (
              <ButtonIcon
                onClick={() => addNewTrack(item)}
                disabled={!!isSelected || playlist.length >= 5}
              >
                {isSelected ? <FiCheck /> : <AiOutlinePlusCircle />}
              </ButtonIcon>
            )
          }}
        />
      ) : (
        <NoResources text="Type your favorite artist or song" tw="pt-20" />
      )}
    </Card>
  )
}

export default SearchCard
