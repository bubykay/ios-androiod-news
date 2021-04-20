import apiClient from './client'


const allNews = '/news/'

const allNewsApi = () => apiClient.get(allNews)

export default allNewsApi