import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function InfoBox({ info }) {
    let INIT_URL = "https://s7d2.scene7.com/is/image/TWCNews/051520_pix_sky_jpg?wid=1250&hei=703&$wide-bg$"
    let RAIN = "https://media.istockphoto.com/id/105934727/photo/rain.jpg?s=612x612&w=0&k=20&c=rJcjz9o_7spWniAhZ-oFOVQ9gBJCy2tY_s__RqsseVw="
    let COLD = "https://media.istockphoto.com/id/160840799/photo/icicles-and-snowstorm.jpg?s=612x612&w=0&k=20&c=LKgdYGIdh94AZ9Q5F9IE5TSHY1zz4oP4uauG79KIN8w="
    let SNOW = "https://media.gettyimages.com/id/107191741/photo/woman-sheltering-under-umbrella-in-a-snow-storm.jpg?s=612x612&w=0&k=20&c=zCw6hyjMrXHShmmVb1BNbVTjJ01tdFoummPmKPjFe5c="
    return (
        <div className='mt-5 ml-5'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.temp > 18 ? INIT_URL : info.temp < -4 ? SNOW : info.humidity > 80 ? RAIN : COLD}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <h3 className='text-xl'>Temperature = {info.temp} &deg;C</h3>
                        <h3 className='text-xl'>Temp min = {info.tempMin} &deg;C</h3>
                        <h3 className='text-xl'>Temp max = {info.tempMax} &deg;C</h3>
                        <h3 className='text-xl'>Humidity = {info.humidity}</h3>
                        <h3 className='text-xl'>Feels like = {info.feelsLike} &deg;C</h3>
                        <h3 className='text-xl'>Weather type = {info.weather}</h3>
                    </Typography>
                </CardContent>

            </Card>
        </div>
    )
}

export default InfoBox