import React,{useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function SearchBox({updateInfo}) {
    const [srchLocation, setsrchLocation] = useState("");
    const [Error, setError] = useState(false)
    const API_KEY = "97303c7f4925a8d342aba6637b57946a";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"

    let getWeatherInfo = async () =>{
       
        let response =  await fetch(`${API_URL}?q=${srchLocation}&appid=${API_KEY}&units=metric`)
       let jsonResponse = await response.json();
       console.log(jsonResponse);
       let result = {
        city: srchLocation,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
       }
       console.log(result);
       return result;
       
    }
    const searchHandler = (event) =>{
        setsrchLocation(event.target.value)
    }
    const submitHandler = async(event) =>{
        try{
            event.preventDefault();
        console.log(srchLocation)
        setsrchLocation("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        setError(false);
        }catch{
            setError(true);
        }
    };
    
    return (
        <div>
            <h2 className='text-3xl mb-5 font-bold '>Search for the weather</h2>

            <form action="" onSubmit={submitHandler}>
                <TextField
                    fullWidth label="Enter Location" id="fullWidth" required value={srchLocation} onChange={searchHandler}
                />
                <br /> <br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
            {Error && <p className='text-[red] mt-4 text-xl'><b>No such Location Exists in our API Sorry!</b></p>}
             
        
        
               
            </form>
        </div>
    )
}

export default SearchBox