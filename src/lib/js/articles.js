import api from "$lib/js/api.js";

export const getArticles = async ({ limit = 10, page } = {}) => {
    const params = new URLSearchParams();
    if (limit) params.append('limit', limit);
    if (page) params.append('page', page);

    try {
        const response = await api.get(`/v1/articles/get?${params.toString()}`, {
            validateStatus: (status) => {
                return status === 200 || status === 404;
            },
        });
        return response.data.articles || [];
    } catch (error) {
        return [];
    }
};

export const getArticle = async (articleID) => {
    try {
        const response = await api.get(`/v1/articles/get/${articleID}/`)
        return response.data.article || null;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const createArticle = async (articleData) => {
    try {
        const response = await api.post(`/v1/articles/create/`, articleData)
        return response.data.created_article || null;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const updateArticle = async (articleID, articleData) => {
    try {
        const response = await api.patch(`/v1/articles/update/${articleID}/`, articleData)
        return response.data.updated_article || null;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const deleteArticle = async (articleID) => {
    try {
        const response = await api.delete(`/v1/articles/delete/${articleID}/`)
        return response.data.articles || null;
    } catch (error) {
        console.log(error);
        return null;
    }
};