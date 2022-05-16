import { Typography } from '@mui/material'
import '../Css/CardStyle.css'
import { FormGroup } from '@mui/material'

interface Props {
    sensorText: string
}

export const SensorValue: React.FC<Props> = ({sensorText}: Props) => {
    return (
        <FormGroup>
            <div className='container'>
                <div className='labelDiv'>
                    <Typography variant="body1" >{sensorText}</Typography>
                </div>
                <div className='inputDiv'>
                    <input type="text" style={{width: 70}} />
                </div>
            </div>
        </FormGroup>
    )
}