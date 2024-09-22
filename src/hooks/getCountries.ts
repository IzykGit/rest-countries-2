import axios from "axios"

export const getCountries = async () => {
    try {

        const response = await axios.get("/data.json")
        return response.data
    }
    catch(error) {
        return error
    }
}