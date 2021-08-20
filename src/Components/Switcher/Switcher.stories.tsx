import { useState } from "react"

import { Switcher } from "./Switcher"

export default {
  title: 'Switcher',
  component: Switcher,
}

export const OnMode = () => <Switcher setSwitcher={() => { }} switcher={true} />
export const OffMode = () => <Switcher setSwitcher={() => { }} switcher={false} />
export const SwitcherStories = () => {
  const [switcher, setSwitcher] = useState<boolean>(true);
  return <Switcher setSwitcher={setSwitcher} switcher={switcher} />
}

