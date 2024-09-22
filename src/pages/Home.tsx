import React, { useEffect, useState } from 'react'
import { getCountries } from '../hooks/getCountries'

const Home = () => {

    const [countries, setCountries] = useState(getCountries())

    console.log(countries)


    return (
        <div>
        
        </div>
    )
}

export default Home
