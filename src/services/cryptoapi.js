import {createApi,fetchBaseQuery} from "@reduxjs/toolkit";

const cryptoApiHeaders={
    'X-RapidAPI-Key': '12849130e9msh2d907e7012eb3b7p1a4bf7jsnd062d2a5b6d9',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl="https://coinranking1.p.rapidapi.com";

const createRequest=(url)=>({url,headers:cryptoApiHeaders});

export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:()=>createRequest("/exchanges")
        })
    })
})