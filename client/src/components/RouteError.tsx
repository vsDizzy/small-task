import { useRouteError } from 'react-router-dom'

export function RouteError() {
  const err = useRouteError() as Error
  console.error(err)

  return <div style={{ color: 'red' }}>{err.message}</div>
}
