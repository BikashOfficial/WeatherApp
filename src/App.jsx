import './App.css'
import InfoBox from './components/InfoBox'
import SearchBox from './components/SearchBox'
import { useState } from 'react'

function App() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 23,
    tempMin:22,
    tempMax: 35,
    humidity: 45,
    feelsLike: 25,
    weather:"sunny"
  })

  let updateInfo =(newInfo)=>{
    setWeatherInfo(newInfo);
  }
  return (
    <>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </>
  )
}

export default App
