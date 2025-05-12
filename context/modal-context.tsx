"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface ModalContextType {
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hasShownInitialModal, setHasShownInitialModal] = useState(true)

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem("hasVisitedBefore")

    if (!hasVisited && hasShownInitialModal) {
      // Set a small delay to ensure the page has loaded
      const timer = setTimeout(() => {
        setIsModalOpen(true)
        setHasShownInitialModal(false)
        // Mark that the user has visited before
        localStorage.setItem("hasVisitedBefore", "true")
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [hasShownInitialModal])

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>{children}</ModalContext.Provider>
}

export function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}
