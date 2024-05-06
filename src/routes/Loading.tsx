import { Grid, GridItem } from "@chakra-ui/react";
import LineChart from "../components/chart/LineChart";
import GridExample from "../components/grid/GridExample";
export default function Loading() {
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={2}>
      <GridItem colSpan={5} h="70vh">
        <LineChart />
      </GridItem>
      <GridItem colStart={6} colEnd={13} h="70vh" bg="papayawhip">
        <GridExample />
      </GridItem>
    </Grid>
  );
}
