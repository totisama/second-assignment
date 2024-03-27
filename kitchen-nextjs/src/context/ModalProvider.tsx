'use client'

import { createContext, useState, type FC } from 'react'

export interface ModalContextType {
  open: boolean
  setOpen: (open: boolean) => void
}

interface ModalProps {
  children: React.ReactNode
}

export const ModalContext = createContext<ModalContextType | null>(null)

export const ModalProvider: FC<ModalProps> = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
