import axios from './axios'

//获取所有文章分类
const getAllCat = (data) => {
    return axios.request({
        url:'/api/articleCat/all',
        method:'get',
        data
    })
}

const getArticlesByCateId = (cateid) => {
    return axios.request({
        url:`/api/article/${cateid}`,
        method:'get',
    })
}

export {
    getAllCat,
    getArticlesByCateId
}