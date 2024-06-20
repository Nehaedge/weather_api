import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios'

const StateContext = createContext()

export const StateContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({})
    const [values, setValues] = useState([])
    const [place, setPlace] = useState('Jaipur')
    const [thisLocation, setLocation] = useState('')



    const fetchWeather = async function(){ 
        
    
const options = {
  method: 'GET',
  url: 'https://open-weather13.p.rapidapi.com/city/landon/EN',
  headers: {
    'x-rapidapi-key': '7a738e82a3mshb31293c9a0fd568p159a42jsn37dea20955fe',
    'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
  }
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
  
}

    }

    useEffect(() => {
        fetchWeather()
    }, [place])

   

    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            thisLocation,
            place
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext) 