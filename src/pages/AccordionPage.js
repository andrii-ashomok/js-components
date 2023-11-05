import Accordion from "../components/Accordion";

function AccordionPage() {

    const items = [
        {
            id: 'lk1',
            label: 'React',
            content: 'js'
        },
        {
            id: 'lk2',
            label: 'Typescript',
            content: 'PropTypes'
        },
        {
            id: 'lk3',
            label: 'Java',
            content: 'JVM'
        }
    ]

    return <div>
        <Accordion items={items}/>
    </div>;
}

export default AccordionPage;