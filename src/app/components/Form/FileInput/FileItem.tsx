import { formatBytes } from '@/app/utils/format-bytes'
import { Trash2, UploadCloud } from 'lucide-react'
import { Button } from '../../Button'

interface FileItemProps {
  name: string
  size: number
}

export function FileItem({ name, size }: FileItemProps) {
  return (
    <div
      key={name}
      className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4 dark:border-zinc-700"
    >
      <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500">
        <UploadCloud className="h-4 w-4" />
      </div>

      <div className="flex flex-1 flex-col items-start gap-1">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
            {name}
          </span>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {formatBytes(size)}
          </span>
        </div>

        <div className="flex w-full items-center gap-3">
          <div className="h-2 flex-1 rounded-full bg-zinc-100 dark:bg-zinc-600">
            <div className="h-2 w-4/5 rounded-full bg-violet-600 dark:bg-violet-400" />
          </div>
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            80%
          </span>
        </div>
      </div>

      <Button type="button" variant="ghost">
        <Trash2 className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
