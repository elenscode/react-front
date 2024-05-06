import { Outlet } from "react-router-dom";
import WithSubnavigation from "./Header";
import { Box, Button, Grid, GridItem } from "@chakra-ui/react";

export default function Layout() {
  return (
    <>
      <Grid
        templateAreas={`"header"
                        "main"
                        "footer"`}
        gridTemplateRows={"60px 1fr 50px"}
        gridTemplateColumns={"1fr"}
        h="100vh"
        minWidth="1200px"
        gap="1"
        p="4"
      >
        <GridItem pl="2" area={"header"} borderRadius="md" m="1">
          <WithSubnavigation />
        </GridItem>
        <GridItem
          pl="2"
          area={"main"}
          borderRadius="md"
          p="2"
          m="1"
          fontSize="1.2rem"
        >
          <Outlet />
        </GridItem>
        <GridItem
          pl="2"
          area={"footer"}
          borderRadius="md"
          m="1"
          fontSize="15px"
        >
          <div>Platform</div>
        </GridItem>
      </Grid>
      <Box position="fixed" bottom="20px" right={["16px", "84px"]} zIndex={1}>
        <Button>ABC</Button>
      </Box>
    </>
  );
}
