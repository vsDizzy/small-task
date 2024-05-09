import { LoaderFunctionArgs } from 'react-router-dom'

export async function listFilesLoader({ request, params }: LoaderFunctionArgs) {
  const port = import.meta.env.VITE_SERVER_PORT
  const res = await fetch(`http://localhost:${port}/${params['*']}`, {
    signal: request.signal,
  })
  if (!res.ok) {
    throw new Error(await res.text())
  }

  return res
}
