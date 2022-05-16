import { Drawer } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from "@mui/material";
import BuildIcon from '@mui/icons-material/Build';
import BarChartIcon from '@mui/icons-material/BarChart';
import ArticleIcon from '@mui/icons-material/Article';

interface Props {
    clickFunction: (value: boolean) => void
}

export const LeftMenuSummary: React.FC<Props> = ({clickFunction}: Props) => {
    return (
        <div>
            <Drawer anchor="left" variant='permanent' PaperProps={ { sx: { backgroundColor: 'gray' } }}>
                <Button color='secondary' startIcon = {<ArrowForwardIosIcon />} onClick={() => clickFunction(true)}/>
                <Button color='secondary' startIcon = {<BuildIcon />} />
                <Button color='secondary' startIcon = {<BarChartIcon />} />
                <Button color='secondary' startIcon = {<ArticleIcon />} />
            </Drawer>
        </div>
    ) 
}