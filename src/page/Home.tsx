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
                padding: "0px 50px 0px 50px"
            }}>
                <Card.Body>
                    <Container className="homeBlock">
                        <Text className="introFontTitle">Introduction</Text>
                        <Card.Divider className="dividerStyle" />
                        <Text className="introFont">Hi, I'm Albireo. You also can call me Albi.</Text>
                        <Text className="introFont">歡迎來到我的網站，這是我放置作品集和Blog的地方。Blog我區分為學習內容和娛樂內容，學習的部分我會分享我的學習紀錄和一些看法，也有可能會更新系列的教學文章。娛樂部份我會寫一些遊戲感想和雜七雜八的內容。</Text>
                    </Container>
                    <Container className="homeBlock">
                        <Text className="introFontTitle">Skill</Text>
                        <Card.Divider className="dividerStyle" />
                        <Grid.Container justify="center">
                            <Grid xs={10} sm={5.5}>
                                <Grid.Container justify="center">
                                    <Grid xs={12} >
                                        <Text className="introSubTitleFont">Programming languages</Text>
                                    </Grid>
                                    <Grid xs={12}>
                                        <ul style={{ display: "inline-block", listStylePosition: 'outside', listStyleType: "disc" }}>
                                            <li className="introFont">C/C++</li>
                                            <li className="introFont">Python</li>
                                            <li className="introFont">JavaScript/TypeScript</li>
                                            <li className="introFont">Java</li>
                                            <li className="introFont">C#</li>
                                        </ul>
                                    </Grid>
                                </Grid.Container>
                            </Grid>
                            <Grid xs={10} sm={5.5}>
                                <Grid.Container justify="center">
                                    <Grid xs={12} >
                                        <Text className="introSubTitleFont">Code management</Text>
                                    </Grid>
                                    <Grid xs={12} >
                                        <ul style={{ listStylePosition: 'outside', listStyleType: "disc" }}>
                                            <li className="introFont">git</li>
                                            <li className="introFont">docker</li>
                                        </ul>
                                    </Grid>
                                </Grid.Container>
                            </Grid>
                            <Grid xs={10} sm={5.5}>
                                <Grid.Container justify="center">
                                    <Grid xs={12} >
                                        <Text className="introSubTitleFont">Frontend development</Text>
                                    </Grid>
                                    <Grid xs={12} >
                                        <ul style={{ listStylePosition: 'outside', listStyleType: "disc" }}>
                                            <li className="introFont">html/css</li>
                                            <li className="introFont">React</li>
                                            <li className="introFont">Android app (Java)</li>
                                        </ul>
                                    </Grid>
                                </Grid.Container>
                            </Grid>
                            <Grid xs={10} sm={5.5}>
                                <Grid.Container justify="center">
                                    <Grid xs={12} >
                                        <Text className="introSubTitleFont">Backend development</Text>
                                    </Grid>
                                    <Grid xs={12} >
                                        <ul style={{ listStylePosition: 'outside', listStyleType: "disc" }}>
                                            <li className="introFont">MySQL</li>
                                        </ul>
                                    </Grid>
                                </Grid.Container>
                            </Grid>
                            <Grid xs={10} sm={5.5}>
                                <Grid.Container justify="center">
                                    <Grid xs={12} >
                                        <Text className="introSubTitleFont">Cloud service</Text>
                                    </Grid>
                                    <Grid xs={12} >
                                        <ul style={{ listStylePosition: 'outside', listStyleType: "disc" }}>
                                            <li className="introFont">Firebase</li>
                                            <li className="introFont">AWS</li>
                                        </ul>
                                    </Grid>
                                </Grid.Container>
                            </Grid>
                            <Grid xs={10} sm={5.5}>
                                <Grid.Container justify="center">
                                    <Grid xs={12} >
                                        <Text className="introSubTitleFont">Game engine</Text>
                                    </Grid>
                                    <Grid xs={12} >
                                        <ul style={{ listStylePosition: 'outside', listStyleType: "disc" }}>
                                            <li className="introFont">Allegro5</li>
                                            <li className="introFont">Cocos2d</li>
                                            <li className="introFont">Unity</li>
                                        </ul>
                                    </Grid>
                                </Grid.Container>
                            </Grid>
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