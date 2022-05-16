import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { LeftMenuDetailed } from './LeftMenyDetailed';

export default function TopAppBar() {
  const [contentVisable, SetContentVisable] = useState(false)

  function ToggleContentVisable(value:boolean){
    SetContentVisable(value)
  }
  return (
      <AppBar position="static" style={{background:'darkgrey'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 4 }}
            onClick = {() => ToggleContentVisable(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{textAlign:'center'}}>
            Configuration
          </Typography>
        </Toolbar>
        {contentVisable && <LeftMenuDetailed clickFunction = {ToggleContentVisable}/>}
      </AppBar> 
  )
}
