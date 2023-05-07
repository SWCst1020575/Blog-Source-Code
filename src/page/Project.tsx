import { Container } from "@nextui-org/react";
import ProjectCard from "../component/ProjectCard";
export default function Project() {
    return (
        <Container fluid css={{
            padding: "24px 0px 24px 0px"
        }}>
            <ProjectCard />
        </Container>
    )
}