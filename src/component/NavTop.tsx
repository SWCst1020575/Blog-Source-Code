import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import './NavTop.css'
function NavTop() {
    const collapseItems = [
        "Home",
        "Project",
        "Learning",
        "Entertainment",
    ];
    return (
        <Navbar maxWidth="fluid" isBordered variant="sticky">
            <Navbar.Toggle showIn="xs" />
            <Navbar.Brand css={{
                    padding:"0px 0px 0px 0px",
                    float:"right"
                }}>
                <Text b color="inherit" css={{
                    
                }}>
                    Wei-Chung
                </Text>
            </Navbar.Brand>
            <Navbar.Content
                enableCursorHighlight
                activeColor="secondary"
                hideIn="xs"
                variant="underline"
            >
                {collapseItems.map((item, index) => (
                    <Navbar.Link key={item} isActive={index === 0} href="#">{item}</Navbar.Link>
                ))}
            </Navbar.Content>
            <Navbar.Content />
            <Navbar.Collapse disableBlur css={{backgroundColor:"#FFFFFFE5"}}>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem
                        key={item}
                        activeColor="secondary"
                        isActive={index === 0}
                    >
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href="#"
                        >
                            {item}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavTop;