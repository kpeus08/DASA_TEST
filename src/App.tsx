import './App.css';
import { LeftCard } from './Components/LeftCard';
import { RightCard } from './Components/RightCard'
import { Grid } from '@mui/material';
import TopAppBar from './Components/TopAppBar'
import { LeftMenu } from './Components/LeftMenu';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

function App() {
  return (
    <div>
      {/*Mobile design*/}
      <Box sx={{ display: { xs: 'block', md:'none' } }}>
        <TopAppBar />
        <Grid container spacing={4} justifyContent='center'>
          <Grid item xs={12}>
            <LeftCard />
          </Grid>
          <Grid item xs={12}>
            <RightCard />
          </Grid>
      </Grid>
      </Box>

      {/*Desktop design*/}
      <Box sx={{ display: { xs: 'none', md:'block' } }}>
        <LeftMenu />
        <Typography variant="h4" style={{textAlign:'center', background:'darkgrey', marginBottom:'20px'}}>Configuration</Typography>
          <Grid container spacing={4} justifyContent='center'>
            <Grid item xs={4}>
              <LeftCard />
            </Grid>
            <Grid item xs={4}>
              <RightCard />
            </Grid>
          </Grid>
      </Box>
    </div>
  )
}

export default App;
