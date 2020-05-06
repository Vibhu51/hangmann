const getRequest = async (count) =>{
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${count}`)
    if (response.status === 200){
        const data = await response.json()
        return data.puzzle
    }
    else{
        throw new Error("Unable to get puzzle")
    }
}

const getCountry = async (code) =>{
    const response = await fetch('//restcountries.eu/rest/v2/all')
    if(response.status === 200){
        const data = await response.json()
        const country = data.find((d)=>d.alpha2Code === code)
        return country
    }
    else{
        throw new Error("Unable to find Country")
    }
}

const getLocation = async ()=>{
    const response = await fetch('//ipinfo.io/json?token=16e438a9d99b7d')
    if(response.status === 200){
        return  await response.json()
    }
    else{
        throw new Error('Unable to fetch location')
    }
}

// const getRequest = (count) => new Promise((resolve,reject)=>{
//     const request = new XMLHttpRequest()
//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             resolve(data)
//         } else if (e.target.readyState === 4) {
//             reject('An error has taken place')
//         }
//     })
//     request.open('GET',`http://puzzle.mead.io/puzzle?wordCount=${count}`)
//     request.send()
// })

// const getRequest = (count)=>{
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${count}`).then((response)=>{
//         if(response.status === 200){ 
//             return response.json()
//         }
//         else{
//             throw new Error('Unable to fetch puzzle')
//         }
//     }).then((data)=>{
//         return data.puzzle
//     })
// }

// const getLocation = ()=>{
//     return fetch('http://ipinfo.io/json?token=16e438a9d99b7d').then((response)=>{
//         if(response.status === 200){
//             return response.json()
//         }
//         else{
//             throw new Error("An error has occured")
//         }
//     })
// }

// const getCountry = (code)=> new Promise((resolve,reject)=>{
//     const countryRequest = new XMLHttpRequest()
//     countryRequest.addEventListener('readystatechange',(e)=>{
//         countryRequest.addEventListener('readystatechange', (e) => {
//             if (e.target.readyState === 4 && e.target.status === 200) {
//                 const data = JSON.parse(e.target.responseText)
//                 const country = data.find((country) => country.alpha2Code === code)
//                 resolve(country)
//             } else if (e.target.readyStatet === 4) {
//                 reject('Unable to fetch data')
//             }
//         })
//     })
//     countryRequest.open("GET",'http://restcountries.eu/rest/v2/all')
//     countryRequest.send()
// })

// const getCountry = (code)=>{
//     return fetch('http://restcountries.eu/rest/v2/all').then((response)=>{
//         if(response.status === 200){
//             return response.json()
//         }
//         else{
//             throw new Error('Unable to fetch data')
//         }
//     }).then((data)=>{
//         const country = data.find((country) => country.alpha2Code === code)
//         return country
//     })
// }