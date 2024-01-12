import { ReactNode } from 'react'

import { TabsContent, TabsList, TabsRoot, TabsTrigger } from './Tabs.styled'

export type TabType = {
  disabled?: boolean
  title: string
  /** A unique value that associates the trigger with a content. */
  value: string
}
export type TabsVariantType = 'primary' | 'secondary'
type CommonProps = {
  /** Use TabsContent components as children. */
  children?: ReactNode
  /** The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs. */
  defaultValue?: string
  /** Event handler called when the value changes.  */
  onValueChange?: (value: string) => void
  /** An array of objects with the value and title of the tab.
   *  {value: string, title: string}
   * */
  tabs: TabType[]
  /** The controlled value of the tab to activate. Should be used in conjunction with onValueChange */
  value?: string
  variant?: TabsVariantType
}

type ConditionalProps =
  | {
      fullWidth?: boolean
      variant?: 'primary'
    }
  | {
      fullWidth?: never
      variant?: 'secondary'
    }

export type TabsProps = CommonProps & ConditionalProps

export const Tabs = ({
  children,
  defaultValue,
  fullWidth,
  onValueChange,
  tabs,
  value,
  variant = 'primary',
}: TabsProps) => {
  // const classNames = {
  //   list: clsx(s.list, s[variant]),
  //   root: s.root,
  //   trigger: clsx(s.trigger, fullWidth && s.fullWidth, s[variant]),
  // }

  return (
    <TabsRoot defaultValue={defaultValue} onValueChange={onValueChange} value={value}>
      <TabsList $variant={variant}>
        {tabs.map(tab => (
          <TabsTrigger
            $fullWidth={fullWidth}
            $variant={variant}
            disabled={tab.disabled}
            key={tab.value}
            value={tab.value}
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </TabsRoot>
  )
}

export type TabContentProps = {
  children: ReactNode
  /** A unique value that associates the trigger with a content. */
  value: string
}

export const TabContent = ({ children, value }: TabContentProps) => {
  return <TabsContent value={value}>{children}</TabsContent>
}
