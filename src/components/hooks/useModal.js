import { useState } from 'react'

const useModal = (initialState = false) => {
  const [modalOpen, setModalOpen] = useState(initialState)

  const toggleModal = () => {
    setModalOpen((prev) => !prev)
  }

  /**
   * TODO: Fix body scrolling issue
   */

  return { modalOpen, toggleModal }
}

export default useModal
