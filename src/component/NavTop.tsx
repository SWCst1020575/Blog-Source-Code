import { Navbar, Link, Text, changeTheme, useTheme, Button } from "@nextui-org/react";
import { MdNightlight } from "react-icons/md";
import { useLocation } from "react-router-dom";
function NavTop() {
    const { type, isDark } = useTheme();
    const location = useLocation();
    const getCurrentPage = (): number => {
        const page: string = location.pathname.split('/')[1];
        switch (page) {
            case "home":
                return 0;
            case "project":
                return 1;
            case "learning":
                return 2;
            case "entertainment":
                return 3;
        }
        return -1;
    }
    const handleChange = () => {
        const nextTheme = isDark ? 'light' : 'dark';
        window.localStorage.setItem('data-theme', nextTheme); // you can use any storage
        changeTheme(nextTheme);
    }
    const collapseItems = [
        "Home",
        "Project",
        "Learning",
        "Entertainment",
    ];
    return (
        <Navbar maxWidth="fluid" isBordered shouldHideOnScroll variant="sticky" css={{ fontSize: "14pt" }}>
            <Navbar.Toggle showIn="xs" />
            <Navbar.Brand css={{
                padding: "0px 0px 0px 0px",
                float: "right"
            }}>
                <Text b color="inherit" size="18pt">
                    Albireo
                </Text>
            </Navbar.Brand>
            <Navbar.Content
                enableCursorHighlight
                activeColor="secondary"
                hideIn="xs"
                variant="underline"
            >
                {collapseItems.map((item, index) => (
                    <Navbar.Link key={item} isActive={index === getCurrentPage()} href={'/' + item.toLowerCase()}>{item}</Navbar.Link>
                ))}
            </Navbar.Content>
            <Navbar.Content>
                <Button
                    auto
                    bordered
                    color="secondary"
                    css={{ borderColor: '$pureColor', color: '$pureColor' }}
                    onClick={handleChange}
                    icon={<MdNightlight />}
                />
            </Navbar.Content>
            <Navbar.Collapse showIn="xs">
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem
                        key={item}
                        activeColor="secondary"
                        isActive={index === getCurrentPage()}
                    >
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href={'/' + item.toLowerCase()}
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