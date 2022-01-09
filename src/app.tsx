import 'twin.macro'
import '@reach/dialog/styles.css'
import { Navigation } from './components/navigation'
import { useArrayLocalStorage } from './hook/useArray'
import { PlayList } from './components/playList'
import { PlaylistItem } from './models/playlistItem'
import SearchCard from './components/searchCard'
import { useState } from 'react'
import { Dialog } from './components/base/dialog'
import { Button } from './components/base/button'

const App = () => {
  const {
    array: playlist,
    push: addNewTrack,
    filter: playlistFilter,
  } = useArrayLocalStorage<PlaylistItem>('playList')
  const [isOpenDialog, setIsOpenDialog] = useState(false)

  const handleOpenMobilePlayList = () => setIsOpenDialog(true)

  return (
    <div tw="min-h-screen flex flex-col">
      <Navigation />
      <main tw="flex-grow p-6 grid xl:grid-cols-12 gap-10 2xl:gap-32">
        <PlayList
          tw="hidden xl:col-span-5 xl:flex"
          list={playlist}
          playlistFilter={playlistFilter}
        />
        <SearchCard addNewTrack={addNewTrack} playlist={playlist} />
        <Button
          tw="fixed right-10 bottom-10 xl:hidden"
          onClick={handleOpenMobilePlayList}
        >
          Playlist ({playlist.length})
        </Button>
        <Dialog isOpenDialog={isOpenDialog} setIsOpenDialog={setIsOpenDialog}>
          <PlayList
            tw="flex-grow"
            list={playlist}
            playlistFilter={playlistFilter}
          />
        </Dialog>
      </main>
    </div>
  )
}

export { App }
