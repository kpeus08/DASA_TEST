import { CardContent, MenuItem } from '@mui/material'
import { Card } from '@mui/material'
import { Container } from '@mui/material'
import { Typography } from '@mui/material'
import { Select } from '@mui/material'
import { SensorValue } from './SensorValue'
import { useState } from 'react'
import '../Css/CardStyle.css'
export function RightCard(){
    const [modelValue, SetModelValue] = useState("Diesel")
    return(
        <Container>
            <Card style={{height:350, padding:'20px'}}>
                <CardContent>
                    <div>
                        <Typography className='Headline' variant='h6'>Breaks</Typography>
                    </div>
                    <div>
                        <SensorValue sensorText="Breaks Value 1"/>
                    </div>
                    <div>
                        <SensorValue sensorText="Breaks Value 2"/>
                    </div>
                    <div>
                        <Typography className='Headline' variant='h6'>Model</Typography>
                    </div>
                    <div>
                        <div className='labelDiv'>
                            <Typography variant="body1" >Engine model</Typography>
                        </div>
                        <div className='inputDiv'>
                            <Select variant='standard' name="Model" value = {modelValue} onChange = { e => {SetModelValue(e.target.value)}}>
                                <MenuItem value={'Diesel'}>Diesel</MenuItem>
                                <MenuItem value={'Petrol'}>Petrol</MenuItem>
                                <MenuItem value={'Electricity'}>Electricity</MenuItem>
                            </Select>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Container>
        
    )
}