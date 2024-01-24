import { Box } from '@mui/material'
import ModalMui from '@mui/material/Modal'
import { ReactNode, useRef } from 'react'
import { Portal } from '../'

interface Props {
  children: ReactNode
  onClose: () => void
  open: boolean
}

const classis = {
  box: 'absolute top-1/2 left-1/2 -translate-x-1/2 min-w-72 max-w-7xl bg-white border shadow p-4 rounded',
  i: 'absolute not-italic top-0 right-0 w-5 h-5 flex items-center justify-center cursor-pointer rounded'
}

export default function Modal({ children, onClose, open }: Props) {
  const modalRef = useRef(document.createElement('div'))

  return (
    <Portal root={modalRef.current}>
      <ModalMui
        keepMounted
        open={open}
        onClose={onClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className={classis.box}>
          <i onClick={onClose} className={classis.i}>
            &times;
          </i>
          {children}
        </Box>
      </ModalMui>
    </Portal>
  )
}
