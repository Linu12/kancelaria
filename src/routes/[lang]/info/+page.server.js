import {getArticles} from "$lib/js/articles.js";
import {error} from "@sveltejs/kit";
import api from "$lib/js/api.js";

export async function load({ url }) {
    const queryParams = Array.from(url.searchParams.entries());
    const queryParamsObject = Object.fromEntries(queryParams);
    const queryString = new URLSearchParams(queryParamsObject).toString();

    let articlesResponse = await api.get(`/v1/articles/get/?${queryString}`,{
        validateStatus: (status) => {
            return status === 200 || status === 404;
        }
    });

    if (articlesResponse.status === 404) {
        error(404, "Page not found");
        return
    }

    articlesResponse = articlesResponse.data;
	return { articlesResponse };
}