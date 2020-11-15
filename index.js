import axios from "axios";

//token provided by iex cloud to access user account
const public_token = 'pk_ae113656c0fe4cbb8f2053e075fa29b8' 
const api = axios.create({
    baseURL: "https://cloud.iexapis.com/stable",
});

export const loadQuotesForStock = symbol => {

    return api.get(`/stock/${symbol}/quote?token=${public_token}`).then(res => res.data);
};

export const loadLogoForStock = symbol => {

    return api.get(`/stock/${symbol}/logo?token=${public_token}`).then(res => res.data.url);
};

export const loadRecentNewsForStock = symbol => {

    return api.get(`/stock/${symbol}/news?token=${public_token}`).then(res => res.data);
};

export const loadChartForStock = (symbol, range) => {

    return api.get(`/stock/${symbol}/chart/${range}?token=${public_token}`).then(res => res.data);
};