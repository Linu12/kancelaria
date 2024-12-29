import {error} from "@sveltejs/kit";
import api from "$lib/js/api.js";
import {getArticle} from "$lib/js/articles.js";

export async function load({params}) {
    const article = await getArticle(params.article);
    return {article}
}