import { Container, Card, Text, Button, Popover, Grid } from "@nextui-org/react";
import { SiFacebook, SiGmail, SiGithub } from "react-icons/si";
import { useState } from 'react';
function Home() {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const copyEmail = () => {
        setIsPopoverOpen(true);
        navigator.clipboard.writeText("st1020575@gmail.com");
        setTimeout(() => setIsPopoverOpen(false), 1500);
    }
    return (
        <Container fluid css={{
            padding: "24px 0px 24px 0px"
        }}>
            <Card variant="bordered" css={{
                mw: "1000px",
                left: "50%",
                transform: "translate(-50%, 0%)",
                padding: "0px 60px 0px 60px"
            }}>
                <Card.Body>
                    <Container className="homeBlock" >
                        <Text className="introFontTitle">About</Text>
                        <Card.Divider className="dividerStyle" />
                        <Text css={{ justifyContent: "center", display: "flex" }} className="introFont">Albireo, Su</Text>
                        <Text css={{ justifyContent: "center", display: "flex" }} className="introFont">Bachelor of Interdisciplinary Program of Sciences,</Text>
                        <Text css={{ justifyContent: "center", display: "flex" }} className="introFont">National Tsing Hua University (2020~2024)</Text>
                        <Text css={{ justifyContent: "center", display: "flex" }} className="introFont">Major in Data Science, minor in Computer Science.</Text>
                    </Container>
                    <Container className="homeBlock">
                        <Text className="introFontTitle">Experience</Text>
                        <Card.Divider className="dividerStyle" />
                        <Grid.Container justify="center">
                            {/* <Grid xs={0} sm={1} /> */}
                            <Grid xs={10.5} sm={10.5}>
                            <Grid.Container justify="center">
                                    <Grid xs={12} >
                                        <Text className="introSubTitleFont">National Tsing Hua University, Hsinchu, Taiwan</Text>
                                    </Grid>
                                    <Grid xs={10} >
                                        <Text className="introFont">Research Assistant (part-time) ｜ 2022 ~ current</Text>
                                    </Grid>
                                    <Grid xs={12} >
                                        <Text className="introSubTitleFont">National Taiwan University, Taipei, Taiwan</Text>
                                    </Grid>
                                    <Grid xs={10} >
                                        <Text className="introFont">Research Assistant (part-time) ｜ 2024 ~ current</Text>
                                    </Grid>

                                </Grid.Container>
                            </Grid>
                            {/* <Grid xs={10} sm={5.5}>
                                <Grid.Container justify="center">
                                    <Grid xs={12} >
                                        <Text className="introSubTitleFont">Programming languages</Text>
                                    </Grid>
                                    
                                    <Grid xs={11}>

                                        <ul style={{ display: "inline-block", listStylePosition: 'outside', listStyleType: "disc" }}>
                                            <li className="introFont">C/C++</li>
                                            <li className="introFont">Python</li>
                                            <li className="introFont">Go</li>
                                            <li className="introFont">JavaScript/TypeScript</li>
                                            <li className="introFont">Java</li>
                                        </ul>
                                    </Grid>

                                </Grid.Container>
                            </Grid>
                            <Grid xs={10} sm={5.5}>
                                <Grid.Container justify="center">
                                    <Grid xs={12} >
                                        <Text className="introSubTitleFont">Development tools</Text>
                                    </Grid>
                                    <Grid xs={11} >
                                        <ul style={{ listStylePosition: 'outside', listStyleType: "disc" }}>
                                            <li className="introFont">Git</li>
                                            <li className="introFont">Docker</li>
                                            <li className="introFont">Terraform</li>
                                        </ul>
                                    </Grid>
                                </Grid.Container>
                            </Grid>
                            <Grid xs={0} sm={1} />
                            <Grid xs={10} sm={5.5}>
                                <Grid.Container justify="center">
                                    <Grid xs={12} >
                                        <Text className="introSubTitleFont">Frontend development</Text>
                                    </Grid>
                                    <Grid xs={11} >
                                        <ul style={{ listStylePosition: 'outside', listStyleType: "disc" }}>
                                            <li className="introFont">html/css</li>
                                            <li className="introFont">React</li>
                                            <li className="introFont">Android app (Java/React Native)</li>
                                        </ul>
                                    </Grid>
                                </Grid.Container>
                            </Grid>
                            <Grid xs={10} sm={5.5}>
                                <Grid.Container justify="center">
                                    <Grid xs={12} >
                                        <Text className="introSubTitleFont">Backend development</Text>
                                    </Grid>
                                    <Grid xs={11} >
                                        <ul style={{ listStylePosition: 'outside', listStyleType: "disc" }}>
                                            <li className="introFont">SQL</li>
                                            <li className="introFont">REST API design</li>
                                        </ul>
                                    </Grid>
                                </Grid.Container>
                            </Grid>
                            <Grid xs={0} sm={1} />
                            <Grid xs={10} sm={5.5}>
                                <Grid.Container justify="center">
                                    <Grid xs={12} >
                                        <Text className="introSubTitleFont">Cloud service</Text>
                                    </Grid>
                                    <Grid xs={11} >
                                        <ul style={{ listStylePosition: 'outside', listStyleType: "disc" }}>
                                            <li className="introFont">Firebase</li>
                                            <li className="introFont">AWS</li>
                                            <li className="introFont">Azure</li>
                                        </ul>
                                    </Grid>
                                </Grid.Container>
                            </Grid>
                            <Grid xs={10} sm={5.5}>
                                <Grid.Container justify="center">
                                    <Grid xs={12} >
                                        <Text className="introSubTitleFont">Machine Learning</Text>
                                    </Grid>
                                    <Grid xs={11} >
                                        <ul style={{ listStylePosition: 'outside', listStyleType: "disc" }}>
                                            <li className="introFont">PyTorch</li>
                                            <li className="introFont">Data Mining</li>
                                            <li className="introFont">HuggingFace API</li>
                                        </ul>
                                    </Grid>
                                </Grid.Container>
                            </Grid>
                            <Grid xs={0} sm={1} />
                            <Grid xs={10} sm={5.5}>
                                <Grid.Container justify="center">
                                    <Grid xs={12} >
                                        <Text className="introSubTitleFont">Game engine</Text>
                                    </Grid>
                                    <Grid xs={11} >
                                        <ul style={{ listStylePosition: 'outside', listStyleType: "disc" }}>
                                            <li className="introFont">Allegro5</li>
                                            <li className="introFont">Cocos2d</li>
                                            <li className="introFont">Unity</li>
                                        </ul>
                                    </Grid>
                                </Grid.Container>
                            </Grid>
                            <Grid xs={10} sm={5.5} >
                                <Grid.Container justify="center">
                                    <Grid xs={12} >
                                        <Text className="introSubTitleFont">Other technique</Text>
                                    </Grid>
                                    <Grid xs={11} >
                                        <ul style={{ listStylePosition: 'outside', listStyleType: "disc" }}>
                                            <li className="introFont">CUDA programming</li>
                                        </ul>
                                    </Grid>
                                </Grid.Container>
                            </Grid>
                            <Grid xs={10} sm={5.5}>
                                <Grid.Container justify="center">
                                    <Grid xs={12} />
                                    <Grid xs={11} />
                                </Grid.Container>
                            </Grid> */}
                        </Grid.Container>
                    </Container>
                    <Container className="homeBlock">
                        <Text className="introFontTitle">Contact</Text>
                        <Card.Divider className="dividerStyle" />
                        <Grid.Container justify="center">
                            <Grid xs={0} sm={1.5} />
                            <Grid xs={12} sm={3}>
                                <Popover isOpen={isPopoverOpen} isBordered disableShadow>
                                    <Popover.Trigger>
                                        <Button
                                            auto
                                            color="secondary"
                                            icon={<SiGmail />}
                                            bordered
                                            onClick={copyEmail}
                                            borderWeight="light"
                                            className="contactLink"
                                            css={{
                                                borderColor: '$pureColor',
                                                color: "$pureColor",
                                            }}>
                                            Email
                                        </Button>
                                    </Popover.Trigger>
                                    <Popover.Content>
                                        <Text css={{ p: "$10" }}>The email address has been copied.</Text>
                                    </Popover.Content>
                                </Popover>
                            </Grid>
                            <Grid xs={12} sm={3}>
                                <Button
                                    auto
                                    color="secondary"
                                    icon={<SiFacebook />}
                                    bordered
                                    onClick={() => window.open("https://www.facebook.com/SWC.su/")}
                                    borderWeight="light"
                                    className="contactLink"
                                    css={{
                                        borderColor: '$pureColor',
                                        color: "$pureColor",
                                    }}>
                                    Facebook
                                </Button>
                            </Grid>
                            <Grid xs={12} sm={3}>
                                <Button
                                    auto
                                    color="secondary"
                                    icon={<SiGithub />}
                                    bordered
                                    onClick={() => window.open("https://github.com/SWCst1020575")}
                                    borderWeight="light"
                                    className="contactLink"
                                    css={{
                                        borderColor: '$pureColor',
                                        color: "$pureColor",
                                    }}>
                                    Github
                                </Button>
                            </Grid>
                            <Grid xs={0} sm={1.5} />
                        </Grid.Container>



                    </Container>
                </Card.Body>
            </Card>
        </Container >
    );
}

export default Home;