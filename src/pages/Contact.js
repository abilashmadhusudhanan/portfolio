import Card from "../util/Card";
import contactData from "../resources/data/contactData"
import Table from "../util/Table";

const Contact = () => {
    return <Card>
        {contactData.map((contact) => <Table content={contact} />)}
    </Card>
};

export default Contact;