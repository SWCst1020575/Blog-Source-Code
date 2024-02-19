import { Container, Card, Grid } from "@nextui-org/react";
import ProjectCard from "../component/ProjectCard";
import { useState, useEffect } from 'react';
import ProjectItem from "../interface/project"
export default function Project() {
    const [projects, setProjects] = useState([]);

    // useEffect(() => {
    //     fetch('https://app-linux-blog-web-backend.azurewebsites.net/api/project', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setProjects(data.ResultMessage);
    //         })
    //         .catch((err) => {
    //             console.log(err.message);
    //         });
    // }, []);
    // const renderProject = () => {
    //     let projectLists = [];
    //     for (var i of projects) {
    //         const project: ProjectItem = {
    //             title: i["title"],
    //             description: i["description"],
    //             lang: i["lang"],
    //             tag: i["tag"],
    //             link: i["link"],
    //             imgLink: i["imgLink"]
    //         };
    //         projectLists.unshift(
    //             <Grid.Container key={"Grid" + i["title"]}>
    //                 <Grid key={"Grid1" + i["title"]} xs={0.5} sm={0} />
    //                 <Grid key={"Grid2" + i["title"]} xs={11} sm={12}>
    //                     <ProjectCard key={i["title"]} project={project} />
    //                 </Grid>
    //                 <Grid key={"Grid3" + i["title"]} xs={0.5} sm={0} />
    //             </Grid.Container>
    //         )
    //     }
    //     return projectLists;
    // }
    return (
        <Container fluid css={{
            padding: "24px 0px 24px 0px"
        }}>


            <Card variant="bordered"
                css={{
                    mw: "1000px",
                    left: "50%",
                    transform: "translate(-50%, 0%)",

                }}>


                {/* {renderProject()} */}
                <Container css={{ justifyContent: "center", width: "fit-content", fontSize: "22px", fontWeight: "bold", marginTop: "16px", marginBottom: "16px" }}>
                    Due to platform migration, this page is closed currently. 🚧🚧🚧
                </Container>


            </Card>
        </Container >
    )
}