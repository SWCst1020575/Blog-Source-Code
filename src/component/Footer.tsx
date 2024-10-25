import { Container, Card, Text } from "@nextui-org/react";

function Footer() {
    return (
        <Container fluid={true} css={{
            margin: "0 0 0 0",
            padding: "24px 0px 24px 0px",
            position: "relative",
            left: "50%",
            transform: "translate(-50%, 0%)",
        }}>
            <Container css={{
                marginBottom:"12px",
                maxW: "1200px",
                height: "2px",
                background: "#A5A5A570",
                position: "relative",
            }} />
            <Text className="footerText">2024 Albireo, Su</Text>
        </Container>
    );
}

export default Footer;