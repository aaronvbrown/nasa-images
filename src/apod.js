export default class APOD {
    static async getPic() {
        try {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
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
//         const = api url
//         return fetch (url)
//         .then(function(response) { //.then creates a promise
//             if (!response.ok) {
//                 const errorMessage = `${response.status} ${response.statusText}`;
//                 throw new Error(errorMessage);
//             }  else {
//                 return response.json();
//             }
//         })
//         .catch(function(error) { // catches errors missed by response?
//             return error;
//         });
//     }
