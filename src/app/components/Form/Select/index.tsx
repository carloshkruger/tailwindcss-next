'use client'

import { ReactNode } from 'react'
import * as RadixSelect from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'

export interface SelectProps extends RadixSelect.SelectProps {
  placeholder: string
  children: ReactNode
}

export function Select({ placeholder, children, ...props }: SelectProps) {
  return (
    <RadixSelect.Root {...props}>
      <RadixSelect.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 data-[placeholder]:text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20 dark:data-[placeholder]:text-zinc-400">
        <RadixSelect.Value placeholder={placeholder} className="text-black" />
        <RadixSelect.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          side="bottom"
          position="popper"
          sideOffset={4}
          className="animate-slideDownAndFade z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-300 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
        >
          <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}
