import apiClient from './client'


const allNews = '/news/?page='

const allNewsApi = (no) => apiClient.get(allNews+no)

export default allNewsApi