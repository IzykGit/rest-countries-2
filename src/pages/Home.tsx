import React, { useEffect, useState } from 'react'
import { getCountries } from '../hooks/getCountries'


import DropDown from '../components/DropDown'

const Home = () => {

    const [countries, setCountries] = useState(getCountries())

    console.log(countries)

    useEffect(() => {
        const fetch = async () => {
            const data = await getCountries();
            setCountries(data)
        };

        fetch()
    }, []);




    return (
        <>

        <main>
            <section>
                <DropDown />
            </section>
            <section>

            </section>
        </main>
        </>
    )
}

export default Home
