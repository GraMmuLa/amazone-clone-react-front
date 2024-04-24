import AccordionContent from "./AccordionContent";
import styles from "./Accordion.module.css";


const Accordion: React.FunctionComponent<{ accordionItems: Array<{ title: string, id: number, items: any[] }> }> = ({ accordionItems }) => {
   return (
      <div className="accordion">
         <form action="/">
            {accordionItems.map(accordionItem => <AccordionContent title={accordionItem.title} id={accordionItem.id} items={accordionItem.items} />)}
         </form>
      </div>
   );
}


export default Accordion;