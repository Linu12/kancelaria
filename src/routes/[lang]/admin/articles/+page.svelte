<script>
    import {page} from "$app/stores";
    import {goto} from "$app/navigation";
    import {deleteArticle} from "$lib/js/articles.js";

    export let data;

    const lang = data.lang;

    let articles = data.articles ? data.articles : [];

    const delArticle = async (id) => {
        const result = await deleteArticle(id)
        articles = result.articles
    }
</script>

<div class="overflow-x-auto w-max flex flex-col gap-5">
    <table class="min-w-full border-collapse border border-gray-200 rounded-lg shadow-md">
        <thead>
            <tr class="bg-gray-100">
                <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 border-b">#</th>
                <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 border-b">URL</th>
                <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 border-b">Controls</th>
            </tr>
        </thead>
        <tbody>
            {#each articles as article }
                <tr class="hover:bg-gray-50">
                    <td class="px-6 py-4 text-sm text-gray-700 border-b">{article.article_id}</td>
                    <td class="px-6 py-4 text-sm text-gray-700 border-b">{$page.url.origin}/info/article/{article.url}
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-700 border-b">
                        <button on:click={() => {goto(`/info/articles/${article.url}`)}} class="px-4 py-2 text-white bg-black rounded hover:bg-blue-600">
                            Go to article
                        </button>
                        <button on:click={() => {goto(`/admin/articles/${article.article_id}`)}} class="px-4 py-2 text-white bg-black rounded hover:bg-blue-600">
                            Change
                        </button>
                        <button on:click={() => {delArticle(article.article_id)}} class="px-4 py-2 text-white bg-black rounded hover:bg-blue-600">
                            Delete
                        </button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
    <button on:click={() => {goto(`/${lang.code}/admin`)}} class="px-4 py-2 text-white bg-black rounded hover:bg-blue-600 w-[170px]">Create article</button>
</div>
