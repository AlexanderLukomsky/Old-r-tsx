import { useState } from "react"

import { Switcher } from "./Switcher"

export default {
  title: 'Switcher Controlled',
  component: Switcher,
}

export const OnMode = () => <Switcher setSwitcher={() => { }} switcher={true} />
export const OffMode = () => <Switcher setSwitcher={() => { }} switcher={false} />
export const SwitcherChanged = () => {
  const [switcher, setSwitcher] = useState<boolean>(true);
  return <Switcher setSwitcher={setSwitcher} switcher={switcher} />
}

