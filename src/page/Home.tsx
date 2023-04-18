import { Container, Card, Text } from "@nextui-org/react";

function Home() {
    return (
        <Container fluid css={{
            padding:"24px 0px 24px 0px"
        }}>
            <Card variant="bordered" css={{
                mw: "1000px",
                backgroundColor: "White",
                left: "50%",
                transform: "translate(-50%, 0%)",
            }}>
                <Card.Body>
                    <Text>A basic card</Text>
                    <Text>A basic card</Text>
                    <Text>A basic card</Text>
                    <Text>A basic card</Text>
                    <Text>A basic card</Text>
                    <Text>A basic card</Text>
                    <Text>A basic card</Text>
                    <Text>A basic card</Text>
                    <Text>A basic card</Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Home;