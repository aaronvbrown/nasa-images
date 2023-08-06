export default class APOD {
    static async getPic(date) {
        try {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${date}`)
            //const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
            if(!response.ok) {
                const error = `${response.status} ${response.statusText}`;
                throw new Error(error)
            }
            return response.json();
        }
        catch(error) {
            return error;
        }
    }
}   
