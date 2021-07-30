import React from 'react';
import './App.css';
import Accordion from './Components/Accordion/Accordion';
import Rating from './Components/Rating/Rating';





function App() {
  return (
    <div className="App">
      <AppTitle title={'App title - 1'} />
      <AppTitle title={'App title - 2'} />
      <Accordion titleValue={'Accordion title - collapsed={true}'} collapsed={true} />
      <Accordion titleValue={'Accordion title - collapsed={false}'} collapsed={false} />
      <Accordion titleValue={'Accordion title - collapsed === undefined'} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
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
