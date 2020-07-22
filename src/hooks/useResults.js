import {useEffect, useState} from 'react'
import yelp from '../api/yelp'

export default () => {
    const [errorMessage, setErrorMessage] = useState(``)
    const [results, setResults] = useState([])

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get(`/search`, {
                params: {
                    limit: 50,
                    location: `san jose`, // temp
                    term: searchTerm,
                }
            })
            setResults(response.data.businesses)
        } catch (err) {
            console.log(err)
            setErrorMessage(`There was an error, please try again`)
        }
    }

    // Call searchApi when component is first rendered
    useEffect(() => {
        searchApi(`pasta`)
    }, [])

    return [searchApi, results, errorMessage]
}