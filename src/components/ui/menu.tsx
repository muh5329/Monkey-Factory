"use client"
/* eslint-disable @typescript-eslint/no-unsafe-assignment*/
import * as React from "react"
import { useRouter } from 'next/navigation'
import { Button } from "~/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

/*
 * 
 * Shadrcn Drop Down Menu
 * */

export function ComboboxDropdownMenu() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  return (
    <div className="flex w-full flex-col items-start justify-between  px-4 py-3 sm:flex-row sm:items-center">
      <p className="text-sm font-medium leading-none">
        <span className="">
        </span>
      </p>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="default" size="sm">
            [menu]
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => router.push('/')} >
              [home]
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push('/aboutme')} >
              [about me]
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push('/projects')} >
              [projects]
            </DropdownMenuItem>
            <DropdownMenuItem className="text-green-600" onClick={() => router.push('/socials')} >
              [socials]
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
