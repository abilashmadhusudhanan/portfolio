import { AgeFromDateString } from "age-calculator";

const experienceData = [
    {
        head: [
            {
                key: "Company",
                value: "Tata Consultancy Service, Chennai, Tamil Nadu, India"
            },
            {
                key: "Designation",
                value: "Systems Engineer"
            },
            {
                key: "Period",
                value: `2020 - Present (${new AgeFromDateString('2020-08-03').age} years)`
            }
        ],
        body: {
            key: "Description",
            value: "Mainly working as a Apigee proxy developer for backend APIs. Worked in developing and enhancing Concourse CI/CD pipelines which is used for Apigee proxy deployment and others applications. Also, worked in some minor enhancement of applications developed using Spring Boot and NodeJS."
        }
    }
];

export default experienceData;