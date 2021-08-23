import { Story } from "@storybook/react"
import { useState } from "react"
import { UsersType } from "../../App"
import { Select, SelectPropsType } from "./Select"

export default {
  title: 'Select',
  component: Select
}

export const Example = () => {
  const [items, setItems] = useState<string | null>('1')
  return (
    <Select
      value={items}
      items={[
        { name: 'Alex', id: '1' },
        { name: 'Dima', id: '2' },
        { name: 'Serj', id: '3' },
        { name: 'Egor', id: '4' }
      ]}
      onChange={setItems} />
  )
}
export const Example2 = () => {
  const [items, setItems] = useState<string | null>(null)
  return (
    <Select
      value={items}
      items={[
        { name: 'Alex', id: '1' },
        { name: 'Dima', id: '2' },
        { name: 'Serj', id: '3' },
        { name: 'Egor', id: '4' }
      ]}
      onChange={setItems} />
  )
}