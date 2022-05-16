import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import BuildIcon from '@mui/icons-material/Build';
import BarChartIcon from '@mui/icons-material/BarChart';
import ArticleIcon from '@mui/icons-material/Article';
import { Button } from '@mui/material';
import { Drawer } from '@mui/material';

interface Props {
    clickFunction: (value: boolean) => void
}

export const LeftMenuDetailed: React.FC<Props> = ({clickFunction}: Props) => {
    return (
        <div>
            <Drawer anchor="left" variant='permanent' PaperProps={{sx: { backgroundColor: 'gray' }  }}>
                <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <Button color='secondary' startIcon = {<ArrowBackIosNewIcon />} onClick={() => clickFunction(false)}/>
                </div>

                <div style={{float:'left'}}>
                    <Button color='secondary' startIcon = {<BuildIcon />}>Configuration</Button>
                </div>

                <div style={{float:'left'}}>
                    <Button color='secondary' startIcon = {<BarChartIcon />}>Status</Button>
                </div>

                <div style={{float:'left'}}>
                    <Button color='secondary' startIcon = {<ArticleIcon />}>Logs</Button>
                </div>
            </Drawer>
        </div>
    ) 
}
