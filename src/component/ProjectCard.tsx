import { Card, Text, Button, Row, Grid, Container } from "@nextui-org/react";
import { SiCplusplus } from "react-icons/si";
export default function ProjectCard() {
    return (
        <Card variant="bordered" 
            css={{
                mw: "1000px",
                left: "50%",
                transform: "translate(-50%, 0%)",
                padding: "0px 36px 0px 36px"
            }}>
            <Grid.Container justify="center">
                <Grid xs={12} sm={10}>
                    <Card variant="bordered" borderWeight="normal"  css={{ w: "100%", h: "240px", margin: "25px 0px 25px 0px" }}>
                        <Card.Body css={{ p: 0 }}>
                            <Card.Image
                                src="https://i.imgur.com/9pbJG4A.png"
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
                                        src="./src/svg/cpp.svg"
                                        css={{ background: "#00000000", br: "50%", padding: "4px 4px 4px 4px" }}
                                        height={40}
                                        width={40}
                                        alt="Lang icon"
                                    />
                                </Grid>

                                <Grid xs={8} sm={9}>
                                    <Grid.Container>
                                        <Grid>
                                            <Text color="#FFFFFF" weight="semibold" size={16}>
                                                Project Name
                                            </Text>
                                        </Grid>
                                        <Grid>
                                            <Text color="#d1d1d1" size={12}>
                                                Project desciption desciption desciption desciption desciption desciption desciption desciption desciption desciption desciption
                                            </Text>
                                        </Grid>
                                        <Grid>
                                            <Row>
                                                <Container css={{ backgroundColor: '$tagBgColor', margin: "4px 4px 4px 4px", padding: "0px 12px 0px 12px", borderRadius: "8pt" }}>
                                                    <Text size={8}>tag</Text>
                                                </Container>
                                                <Container css={{ backgroundColor: "$tagBgColor", margin: "4px 4px 4px 4px", padding: "0px 12px 0px 12px", borderRadius: "8pt" }}>
                                                    <Text size={8}>tagtag</Text>
                                                </Container>
                                            </Row>
                                        </Grid>
                                    </Grid.Container>
                                </Grid>
                                <Grid xs={2.5} sm={2} alignItems="center">
                                    <Row justify="flex-end">
                                        <Button
                                            flat
                                            auto
                                            rounded
                                            css={{ color: "#67fff1", bg: "#94f9f026" }}
                                            onClick={() => window.open("")}
                                        >
                                            <Text
                                                css={{ color: "inherit" }}
                                                size={12}
                                                weight="semibold"
                                                transform="uppercase"
                                            >
                                                view code
                                            </Text>
                                        </Button>
                                    </Row>
                                </Grid>
                            </Grid.Container>
                        </Card.Footer>
                    </Card>
                </Grid>
            </Grid.Container>
        </Card>
    )
}