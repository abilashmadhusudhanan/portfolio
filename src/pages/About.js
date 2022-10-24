import Card from "../util/Card";
import javaLogo from "../resources/images/javaLogo.png";
import javascriptLogo from "../resources/images/javascriptLogo.png";
import reactjsLogo from "../resources/images/reactjsLogo.png";
import springbootLogo from "../resources/images/springbootLogo.png"
import apigeeLogo from "../resources/images/apigeeLogo.png";
import concourseLogo from "../resources/images/concourseLogo.png";
import googlecloudLogo from "../resources/images/googlecloudLogo.png";
import styles from "./About.module.css";
import { AgeFromDateString } from "age-calculator";

const About = () => {
    return <Card>
        <p className={styles.aboutPara}>Hi there! I'm Abilash a {new AgeFromDateString('1999-05-21').age} years old Engineer. I love to learn new things and solve the problems. Though I graduated as a Electronics and Communication Engineer, I got attracted towards programming and choose the "Software way" as my career . I'm currently working as Systems Engineer in Tata Consultancy Service.</p>
        <p className={styles.aboutPara}>I have experience of working and I'm constantly updating myself in the below technologies</p>
        <table className={styles.skillsTable}>
            <tr>
                <td className={styles.skillsTableRow}><img src={javaLogo} alt="Java Logo" title="Java" /></td>
                <td className={styles.skillsTableRow}><img src={javascriptLogo} alt="JavaScript Logo" title="JavaScript" /></td>
                <td className={styles.skillsTableRow}><img src={reactjsLogo} alt="ReactJS Logo" title="ReactJS" /></td>
                <td className={styles.skillsTableRow}><img src={springbootLogo} alt="Spring Boot Logo" title="Spring Boot" /></td>
                <td className={styles.skillsTableRow}><img src={apigeeLogo} alt="Apigee Logo" title="Google Apigee Edge" /></td>
                <td className={styles.skillsTableRow}><img src={concourseLogo} alt="Concourse Logo" title="Concourse CI/CD" /></td>
                <td className={styles.skillsTableRow}><img src={googlecloudLogo} alt="Google Cloud Logo" title="Google Cloud Platform" /></td>
            </tr>
        </table>
    </Card>
};

export default About;