import { Box } from "./component/Box";
import NavTop from "./component/NavTop";
import Home from "./page/Home";
export const Layout = () => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    <NavTop />
    <Home />
  </Box>
);