import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Filters from '@widgets/filters';
import { useAppSelector } from '@shared/lib/hook/reduxHooks';
import ChartToggler from '@widgets/chart-toggler';
import { humanizeKey } from '@shared/lib/utils/stringMutation';
import { CircularProgress, Typography } from '@mui/material';

function Dashboard() {
  const { charts: dashboardCharts, dateArray, isLoading, errorMessage } = useAppSelector((state) => state.dashboard)

  if(isLoading) {
    return (
      <Box 
        sx={{ 
          height: 'calc(100vh - 33px)',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <CircularProgress />
      </Box>
    )
  }

  if(errorMessage) {
    return (
      <Box 
        sx={{ 
          height: 'calc(100vh - 33px)',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Typography>{errorMessage}</Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Filters />
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {
          dashboardCharts && Object.entries(dashboardCharts).map(([ key, collection ]) => {
            return (
              <Grid key={key} size={{ xs: 12, md: 6   }}>
                <ChartToggler
                  title={humanizeKey(key)}
                  dateArray={dateArray}
                  type={collection.type}
                  value={collection.value}
                />
              </Grid>
            )
          })
        }
      </Grid>
    </Box>
  );
}

export default Dashboard