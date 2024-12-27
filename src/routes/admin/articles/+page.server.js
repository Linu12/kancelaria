import {getArticles} from "$lib/js/articles.js";

export async function load({cookies}) {
    const articles = await getArticles();
    return {articles}
}