import { useCallback, useEffect, useState } from 'react'
import { fetchMenu } from '../data/liveMenu'

function settle(setState) {
  return fetchMenu()
    .then((sections) => setState({ status: 'ready', sections }))
    .catch(() => setState({ status: 'error', sections: [] }))
}

export default function useLiveMenu() {
  const [state, setState] = useState({ status: 'loading', sections: [] })

  useEffect(() => { settle(setState) }, [])

  const retry = useCallback(() => {
    setState((s) => ({ ...s, status: 'loading' }))
    settle(setState)
  }, [])

  return { ...state, retry }
}
