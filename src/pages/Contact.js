import Card from "../util/Card";
import contactData from "../resources/data/contactData"
import Table_T2 from "../util/Table_T2";

const Contact = () => {
    

    return <Card>
        {contactData.map((contact) => <Table_T2 content={contact} />)}
    </Card>
};

export default Contact;