import { Card, Text, Button, Row, Grid, Container } from "@nextui-org/react";
import { SiCplusplus } from "react-icons/si";
import ProjectItem from "../interface/project"
type Props = {
    project: ProjectItem
}
export default function ProjectCard(props: Props) {
    const renderTag = () => {
        let projectLists = [];
        var tagList = props.project.tag.split(",")
        for (var i of tagList) {
            projectLists.push(

                <Container key={props.project.title + i} css={{ width: "fit-content", cursor: "default", backgroundColor: '$tagBgColor', outline: "1.5px solid $tagOutline", margin: "6px 6px 6px 6px", padding: "0px 14px 0px 14px", borderRadius: "8pt" }}>
                    <Text size={8}>{i}</Text>
                </Container>

            )
        }
        return projectLists;
    }
    return (
        <Grid.Container justify="center">
            <Grid xs={12} sm={10}>
                <Card variant="bordered" borderWeight="normal" css={{ w: "100%", h: "260px", margin: "20px 0px 20px 0px" }}>
                    <Card.Body css={{ p: 0 }}>
                        <Card.Image
                            src={props.project.imgLink}
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            alt="Project image"
                            containerCss={{ maskImage: "var(--nextui-colors-projectBgMask)" }}
                        />
                    </Card.Body>
                    <Card.Footer
                        isBlurred
                        css={{
                            position: "absolute",
                            bgBlur: "$projectCardFooterBg",
                            borderTop: "$borderWeights$light solid $gray800",
                            bottom: 0,
                            zIndex: 1,
                        }}
                    >
                        <Grid.Container >
                            <Grid xs={1.5} sm={1} alignItems="center">
                                <Card.Image
                                    src={"./src/svg/" + props.project.lang + ".svg"}
                                    css={{ background: "#00000000", br: "50%", padding: "4px 4px 4px 4px" }}
                                    height={40}
                                    width={40}
                                    alt="Lang icon"
                                />
                            </Grid>

                            <Grid xs={8.5} sm={9}>
                                <Grid.Container>
                                    <Grid xs={12} sm={12}>
                                        <Text color="#FFFFFF" weight="semibold" size={20}>
                                            {props.project.title}
                                        </Text>
                                    </Grid>
                                    <Grid xs={12} sm={12}>
                                        <Text color="#d1d1d1" size={12}>
                                            {props.project.description}
                                        </Text>
                                    </Grid>
                                    <Grid xs={12} sm={12}>
                                        <Row>
                                            <Grid.Container>
                                                {renderTag()}
                                            </Grid.Container>
                                        </Row>
                                    </Grid>
                                </Grid.Container>
                            </Grid>
                            <Grid xs={2} sm={2} alignItems="center">
                                <Row justify="flex-end">
                                    <Button
                                        flat
                                        auto
                                        rounded
                                        css={{ color: "#67fff1", bg: "#94f9f026" }}
                                        onClick={() => window.open(props.project.link)}
                                    >
                                        <Text
                                            css={{ color: "inherit" }}
                                            size={12}
                                            weight="semibold"
                                            transform="uppercase"
                                        >
                                            view
                                        </Text>
                                    </Button>
                                </Row>
                            </Grid>
                        </Grid.Container>
                    </Card.Footer>
                </Card>
            </Grid>
        </Grid.Container>
    )
}