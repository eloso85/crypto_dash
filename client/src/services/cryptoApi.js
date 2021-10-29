import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'e226df0ed0mshcd0559e7916dd0cp18ae0bjsn6bef09054673'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url)=>({url, headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl }),
    endpoints:(builder)=>({
        getCrypto: builder.query({
            query:()=>createRequest('/coins')
        })
    })
});

export const{
    useGetCryptoQuery,//exporting getCrypto
} = cryptoApi


// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: ',
//   headers: {
//    
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });