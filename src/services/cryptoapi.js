import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders={
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl=import.meta.env.VITE_API_URL;

const createRequest=(url)=>({url,headers:cryptoApiHeaders});

export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`),
        })
    })
});

export const {
    useGetCryptosQuery,
}=cryptoApi;