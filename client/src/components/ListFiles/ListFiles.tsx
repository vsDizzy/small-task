import { Link, useLoaderData, useParams } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'

interface FileEntry {
  type: 'dir' | 'file'
  name: string
}

const fileIcons = { '..': '↑', dir: '📁', file: '📄' }

export function ListFiles() {
  const { '*': path } = useParams()
  const fileEntries = useLoaderData() as FileEntry[]

  return (
    <div>
      <div>Current path: {`/${path}`}</div>
      <br />
      <div
        style={{
          display: 'grid',
          alignItems: 'baseline',
          gridTemplateColumns: 'auto 1fr',
          columnGap: '.2em',
        }}
      >
        {path && (
          <>
            <div style={{ justifySelf: 'center' }}>{fileIcons['..']}</div>
            <Link to={`${path}/..`}>..</Link>
          </>
        )}
        {fileEntries.map((e, i) => (
          <Fragment key={i}>
            <div style={{ justifySelf: 'center' }}>{fileIcons[e.type]}</div>
            {e.type === 'dir' ? (
              <Link to={`${path}/${e.name}`}>{e.name}</Link>
            ) : (
              <div>{e.name}</div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
