type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  setCollapsed: () => void
}
function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} />
      {(!props.collapsed) && <AccordionBody />}

    </div>
  );
};
type AccordionTitlePropsType = {
  title: string
  setCollapsed: () => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={props.setCollapsed}> {props.title}</h3>
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
export default Accordion