import React from 'react';
import './App.css';
import Accordion from './Components/Accordion/Accordion';
import Rating from './Components/Rating/Rating';





function App() {
  return (
    <div className="App">
      {/* <AppTitle title={'App title - 1'} />
      <AppTitle title={'App title - 2'} /> */}
      <Accordion titleValue={'Accordion title - 1'} collapsed={true} />
      <Accordion titleValue={'Accordion title - 2'} collapsed={false} />
      {/* <Rating value={1} />
      <Rating value={2} /> */}
    </div>
  );
}
function AppTitle(props: any) {
  return <h1>{props.title}</h1>
}
export default App;
