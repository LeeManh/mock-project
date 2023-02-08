import { useCallback, useEffect } from 'react'

type UseKeyPressFunc = (targetKey: string, handler: () => void) => void

const useKeyPress: UseKeyPressFunc = (targetKey, handler) => {
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === targetKey) handler()
    },
    [handler, targetKey]
  )

  useEffect(() => {
    // attach the event listener if the modal is shown
    document.addEventListener('keydown', handleKeyPress)
    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])
}

export default useKeyPress
