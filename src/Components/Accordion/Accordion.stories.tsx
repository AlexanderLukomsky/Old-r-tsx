import { Story } from "@storybook/react"
import { useState } from "react"
import { UsersType } from "../../App"

import Accordion, { AccordionPropsType } from "./Accordion"

export default {
  title: 'Accordion',
  component: Accordion,
}

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />

export const Collapsed = Template.bind({})
Collapsed.args = {
  titleValue: 'Collapsed',
  collapsed: true,
  setCollapsed: () => { }
}
export const UnCollapsed = Template.bind({})
UnCollapsed.args = {
  titleValue: 'UnCollapsed',
  collapsed: false,
  setCollapsed: () => { }
}

export const ChangeCollapser = () => {
  const [users, setUsers] = useState<UsersType[]>([
    { name: 'Alex', id: '1' }, { name: 'Dima', id: '2' }, { name: 'Serj', id: '3' }, { name: 'Egor', id: '4' }
  ])
  const [collapsed, setCollapsed] = useState<boolean>(true)
  return (<Accordion setCollapsed={() => setCollapsed(!collapsed)} titleValue={'ChangeCollapser'} collapsed={!collapsed} item={users} />)
}

