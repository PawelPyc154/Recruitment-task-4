import { DialogContent, DialogOverlay } from '@reach/dialog'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import 'twin.macro'
import { MdOutlineClose } from 'react-icons/md'

interface DialogProps {
  isOpenDialog: boolean
  setIsOpenDialog: Dispatch<SetStateAction<boolean>>
  children: ReactNode
}

const Dialog = ({ isOpenDialog, setIsOpenDialog, children }: DialogProps) => {
  const handleCloseDialog = () => setIsOpenDialog(false)

  return isOpenDialog ? (
    <DialogOverlay>
      <DialogContent tw="bg-secondary relative rounded-sm m-0 w-full h-screen p-0 flex flex-col">
        <button
          tw="absolute top-4 right-4 text-white"
          onClick={handleCloseDialog}
        >
          <MdOutlineClose size={30} />
        </button>
        {children}
      </DialogContent>
    </DialogOverlay>
  ) : null
}

export { Dialog }
