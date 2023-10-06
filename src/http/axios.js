import axios from 'axios';

const instance = axios.create({
    //请求地址(根)
    baseURL:'https://api.jqrjq.cn/',
    timeout: 6000
});

//拦截器

instance.interceptors.request.use((config) => {
    return config;
},(err) => {
    return Promise.reject(err);
});

instance.interceptors.response.use((res) => {
    return res.data;
},(err) => {
    return Promise.reject(err);
})

export default instance;

//test-git