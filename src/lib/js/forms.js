import api from "$lib/js/api.js";

export const getForms = async ({ limit = 5, page } = {}) => {
    const params = new URLSearchParams();
    if (limit) params.append('limit', limit);
    if (page) params.append('page', page);

    try {
        const response = await api.get(`/v1/forms/get?${params.toString()}`, {
            validateStatus: (status) => {
                return status === 200 || status === 404;
            },
        });
        return response.data.forms || [];
    } catch (error) {
        return [];
    }
};

export const getForm = async (articleID) => {
    try {
        const response = await api.get(`/v1/forms/get/${articleID}/`)
        return response.data.form || null;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const deleteForm = async (formID) => {
    try {
        const response = await api.delete(`/v1/forms/delete/${formID}/`)
        return response.data.forms || null;
    } catch (error) {
        console.log(error);
        return null;
    }
};