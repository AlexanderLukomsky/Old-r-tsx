import React, { useState } from 'react';
import './App.scss';
import Accordion from './Components/Accordion/Accordion';
import { NotControlledAccordion } from './Components/NotControlledAccordion/NotControlledAccordion';
import { NotControlledRating } from './Components/NotControlledRating/NotControlledRating';
import Rating from './Components/Rating/Rating';
import { Select } from './Components/Select/Select';
import { NotControlledSwitcher } from './Components/Switcher/NotControlledSwitcher';
import { Switcher } from './Components/Switcher/Switcher';


export type ratingValueType = 0 | 1 | 2 | 3 | 4 | 5
export type UsersType = {
  name: string
  id: string
}

function App() {
  const [users, setUsers] = useState<UsersType[]>([
    { name: 'Alex', id: '1' }, { name: 'Dima', id: '2' }, { name: 'Serj', id: '3' }, { name: 'Egor', id: '4' }
  ])
  const [ratingValue, setRatingValue] = useState<ratingValueType>(0)
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [collapsed2, setCollapsed2] = useState<boolean>(false)
  const [switcher, setSwitcher] = useState<boolean>(false)
  const [value, setItems] = useState<string | null>('1')
  return (
    <div className="App">
      <AppTitle title={'App title - 1'} />
      <Switcher setSwitcher={setSwitcher} switcher={switcher} />
      <Accordion titleValue={'controlled acc - 1'} collapsed={collapsed} setCollapsed={() => setCollapsed(!collapsed)} item={users} />
      <Accordion titleValue={'controlled acc - 2'} collapsed={collapsed2} setCollapsed={() => setCollapsed2(!collapsed2)} item={users} />
      <Rating value={ratingValue} setRatingValue={setRatingValue} />

      <NotControlledAccordion titleValue={'NotControlledAccordion - 1'} />
      <NotControlledRating />
      <NotControlledSwitcher setSwitcher={setSwitcher} />{switcher.toString()}
      <Select items={users} value={value} onChange={setItems} />
    </div>
  );
}
type AppTitleType = {
  title: string
}
function AppTitle(props: AppTitleType) {
  return <h1>{props.title}</h1>
}
export default App;
