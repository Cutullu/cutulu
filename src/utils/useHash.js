import { useState, useCallback } from "react"
import {useLifecycles} from "react-use"

/**
 * read and write url hash, response to url hash change
 */
const doesIHaveWindow = () => typeof window !== 'undefined';
const useHash = () => {
  const hasWindow = doesIHaveWindow();
  const defaultValue = hasWindow ? window.location.hash : undefined;
  const [hash, setHash] = useState(() => defaultValue)

  const onHashChange = useCallback(() => {
    setHash(window.location.hash)
  }, [])

  useLifecycles(() => {
    if(hasWindow)
      window.addEventListener('hashchange', onHashChange)
  }, () => {
    if(hasWindow)
      window.removeEventListener('hashchange', onHashChange)
  })

  const _setHash = useCallback((newHash) => {
    if (newHash !== hash) {
      if(hasWindow)
        window.location.hash = newHash
    }
  }, [hash])

  return [hash, _setHash]
}
export default useHash