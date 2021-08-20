import { useState } from "react"

import Accordion from "./Accordion"

export default {
  title: 'Accordion',
  component: Accordion,
}

export const Collapsed = () => <Accordion setCollapsed={() => { }} titleValue={'Collapsed'} collapsed={true} />

export const UnCollapsed = () => <Accordion setCollapsed={() => { }} titleValue={'UnCollapsed'} collapsed={false} />

export const ChangeCollapser = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true)
  return (<Accordion setCollapsed={() => setCollapsed(!collapsed)} titleValue={'ChangeCollapser'} collapsed={!collapsed} />)
}

