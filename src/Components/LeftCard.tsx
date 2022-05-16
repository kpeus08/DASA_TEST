import { CardContent } from '@mui/material'
import { Card } from '@mui/material'
import { Container } from '@mui/material'
import { SensorValue } from './SensorValue'
import { Typography } from '@mui/material'
import { Switch } from '@mui/material'
import '../Css/CardStyle.css'
export function LeftCard(){
    return(
        <Container>
            <Card style={{height:350, padding:'20px'}}>
                <CardContent>
                    <div>
                        <Typography className='Headline' variant='h6'>Engine</Typography>
                    </div>
                    <div>
                        <SensorValue sensorText="Engine Value 1"/>
                    </div>
                    <div>
                        <SensorValue sensorText="Engine Value 2"/>
                    </div>
                    <div>
                        <Typography className='Headline' variant='h6'>Transmission</Typography>
                    </div>
                    <div>
                        <SensorValue sensorText="Transmission Value 1"/>
                    </div>
                    <div>
                        <SensorValue sensorText="Transmission Value 2"/>
                    </div>
                    <div>
                        <Typography className='Headline' variant='h6'>Lights</Typography>
                    </div>
                    <div>
                        <div className='labelDiv'>
                            <Typography variant="body1" >Forward Lights</Typography>
                        </div>
                        <div className='inputDiv'>
                            <Switch defaultChecked size='medium' />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Container>
    )
}