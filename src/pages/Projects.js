import projectsData from "../resources/data/projectsData";
import Card from "../util/Card";
import Table from "../util/Table";

const Projects = () => {
    return <Card>
        {projectsData.map((project) => <Table content={project} />)}
    </Card>
};

export default Projects;