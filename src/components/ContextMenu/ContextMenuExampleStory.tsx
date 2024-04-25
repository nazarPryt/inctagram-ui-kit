import { useState } from 'react'

import * as RadixContextMenu from '@radix-ui/react-context-menu'

import { ArrowForward, DotsHorizontal, HomeIcon } from '../../icons'
import {
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuItemIndicator,
  ContextMenuLabel,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  RightSlot,
} from './ContextMenu.styled'

export const ContextMenuExampleStory = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(true)
  const [urlsChecked, setUrlsChecked] = useState(false)
  const [person, setPerson] = useState('pedro')

  return (
    <RadixContextMenu.Root>
      <ContextMenuTrigger>Right-click here.</ContextMenuTrigger>
      <RadixContextMenu.Portal>
        <ContextMenuContent>
          <ContextMenuItem>
            Back <RightSlot>⌘+[</RightSlot>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            Forward <RightSlot>⌘+]</RightSlot>
          </ContextMenuItem>

          <ContextMenuItem>
            Reload <RightSlot>⌘+R</RightSlot>
          </ContextMenuItem>
          <RadixContextMenu.Sub>
            <ContextMenuSubTrigger>
              More Tools
              <RightSlot>
                <ArrowForward />
              </RightSlot>
            </ContextMenuSubTrigger>
            <RadixContextMenu.Portal>
              <ContextMenuSubContent alignOffset={-5} sideOffset={2}>
                <ContextMenuItem>
                  Save Page As… <RightSlot>⌘+S</RightSlot>
                </ContextMenuItem>
                <ContextMenuItem>Create Shortcut…</ContextMenuItem>
                <ContextMenuItem>Name Window…</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuSubContent>
            </RadixContextMenu.Portal>
          </RadixContextMenu.Sub>

          <ContextMenuSeparator />

          <ContextMenuCheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
            <ContextMenuItemIndicator>
              <HomeIcon />
            </ContextMenuItemIndicator>
            Show Bookmarks <RightSlot>⌘+B</RightSlot>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
            <ContextMenuItemIndicator>
              <HomeIcon />
            </ContextMenuItemIndicator>
            Show Full URLs
          </ContextMenuCheckboxItem>

          <ContextMenuSeparator />

          <ContextMenuLabel>People</ContextMenuLabel>
          <RadixContextMenu.RadioGroup onValueChange={setPerson} value={person}>
            <ContextMenuRadioItem value={'pedro'}>
              <ContextMenuItemIndicator>
                <DotsHorizontal />
              </ContextMenuItemIndicator>
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value={'colm'}>
              <ContextMenuItemIndicator>
                <DotsHorizontal />
              </ContextMenuItemIndicator>
              Colm Tuite
            </ContextMenuRadioItem>
          </RadixContextMenu.RadioGroup>
        </ContextMenuContent>
      </RadixContextMenu.Portal>
    </RadixContextMenu.Root>
  )
}
