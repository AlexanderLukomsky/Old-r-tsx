import { useState } from "react";

type propsType = {
  titleValue: string
}
export function NotControlledAccordion(props: propsType) {
  let [collapsed, setCollapsed] = useState(false)
  const setCollapsedFoo = () => {
    collapsed ? setCollapsed(false) : setCollapsed(true)
  }
  return (
    <div>
      <AccordionTitle title={props.titleValue} setCollapsedFoo={setCollapsedFoo} />
      {collapsed === false && <AccordionBody />}

    </div>
  );
};
type AccordionTitlePropsType = {
  title: string
  setCollapsedFoo: () => void

}
function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={() => props.setCollapsedFoo()}>{props.title}</h3>
  );
};

function AccordionBody() {
  return (
    <ul>
      <li >1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
};