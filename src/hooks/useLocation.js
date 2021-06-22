import { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "@env";
import Geocoder from "react-native-geocoding";

export default () => {
    const [ city, setCity ] = useState(``)
    const [ locationErrorMessage, setLocationErrorMessage ] = useState(``)
    const [ locationResults, setLocationResults ] = useState({})

    Geocoder.init(GOOGLE_API_KEY)

    const handleError = err => {
        console.warn(err)
        setLocationErrorMessage(`We're having trouble finding you...`)
    }
    const getCity = async ({ latitude, longitude }) => {
        Geocoder.from(`${ latitude }, ${ longitude }`)
            .then(json => {
                const locality = json.results[0].address_components.filter(component => component.types[0] === `locality`)
                const city = locality[0].long_name
                setCity(city)
            })
            .catch(handleError)
    }

    const searchLocation = async (searchLocation) => {
        try {
            navigator.geolocation.getCurrentPosition(
                position => {
                    getCity(position.coords)
                },
                error => {
                    console.warn(error)
                    setLocationErrorMessage(error.message)
                },
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
            )
        } catch (err) {
            handleError(err)
        }
    }

    useEffect(() => {
        searchLocation(``)
    }, [])

    return [ locationErrorMessage, city, locationResults, searchLocation, ]
}
