import { Box } from "@chakra-ui/react";

import Navbar from "../components/navbar.tsx";
import Hero from "../components/hero.tsx";
import Footer from "../components/footer.tsx";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Footer />
    </Box>
  );
}
