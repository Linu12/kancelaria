import {getArticle, getArticles} from "$lib/js/articles.js";
import {error} from "@sveltejs/kit";

export async function load({ params, url }) {
    const article = await getArticle(params.article);

    // console.log(articlesResponse)

    // if (articlesResponse === "Page not found") {
    //     error(404, articlesResponse);
    //     return
    // }

	return { article };
}