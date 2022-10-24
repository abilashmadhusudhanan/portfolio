import Card from "../util/Card";
import Table from "../util/Table";
import experienceData from "../resources/data/experienceData";

const Experience = () => {
    return <Card>
        {experienceData.map(experience => <Table content={experience} />)}
    </Card>
};

export default Experience;