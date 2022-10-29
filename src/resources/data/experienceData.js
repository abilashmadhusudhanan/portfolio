import { AgeFromDateString } from "age-calculator";

const experienceData = [
    {
        head: "Systems Engineer",
        body: [
            {
                key: "Company",
                value: "Tata Consultancy Service, Chennai, Tamil Nadu, India",
                type: "text"
            },
            {
                key: "Period",
                value: `2020 - Present (${new AgeFromDateString('2020-08-03').age} years)`,
                type: "text"
            },
            {
                key: "Description",
                value: "Mainly working as a Apigee proxy developer for backend APIs. Worked in developing and enhancing Concourse CI/CD pipelines which is used for Apigee proxy deployment and others applications. Also, worked in some minor enhancement of applications developed using Spring Boot and NodeJS.",
                type: "text"
            }
        ]
    }
];

export default experienceData;