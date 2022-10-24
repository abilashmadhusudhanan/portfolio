import Card from "../util/Card";
import Table from "../util/Table";
import educationData from "../resources/data/educationData"

const Education = () => {
    return <Card>
        {educationData.map((education) => <Table content={education} />)}
    </Card>
};

export default Education;