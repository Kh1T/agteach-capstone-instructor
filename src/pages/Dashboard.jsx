import { Box, Stack } from "@mui/material";
import TopPerformance from "../components/dashboard/TopPerformance";
import Grid from "@mui/material/Grid2";
import CardSale from "../components/dashboard/CardSale";
import Overview from "../components/dashboard/Overview";
export default function DashboardPage() {
  const content = (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid size={12} sx={{mb: "50px"}}>
            <Overview />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack direction="column" spacing={2}>
              <CardSale title='Monthly' sale='12,000' percent='10'/>
              <CardSale title="Yearly" sale="15,000" percent="20" />
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <TopPerformance />
          </Grid>
        </Grid>
      </Box>
    </>
  );

  return content;
}