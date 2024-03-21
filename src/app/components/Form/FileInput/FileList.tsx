'use client'

import { FileItem } from './FileItem'
import { useFileInput } from './Root'

export function FileList() {
  const { files } = useFileInput()

  return (
    <div className="mt-4 space-y-3">
      {files.map((file) => (
        <FileItem key={file.name} name={file.name} size={file.size} />
      ))}
    </div>
  )
}
