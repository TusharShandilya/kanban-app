import { useEffect } from 'react'

export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    /**
     * Calls callback if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && callback) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, callback])
}
