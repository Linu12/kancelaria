<script>
    import {createArticle, updateArticle} from "$lib/js/articles.js";
    import {page} from "$app/stores";
    import {goto} from "$app/navigation";
    import Quill from "$lib/components/+quillEditor.svelte";

    export let articleData;

    const initArticleData = articleData;

    const languages = [
        {lang: "EN", code: "en"},
        {lang: "PL", code: "pl"},
        {lang: "DE", code: "de"},
        {lang: "FR", code: "fr"},
        {lang: "BEL", code: "bel"},
        {lang: "UK", code: "uk"},
    ];

    let openIndex = 0;

    let content = languages.reduce((acc, {code}) => {
        acc[code] = articleData?.content[code] || "";
        return acc;
    }, {});

    const toggle = (index) => {
        openIndex = openIndex === index ? null : index;
    };

    const collectArticleData = () => {
        const result = {
            title: {},
            content: {...content},
            page: {
                url: document.getElementById(`article_page_url`).value,
                title: {},
                description: {}
            }
        };

        languages.forEach(({code}) => {
            const titleInput = document.getElementById(`article_title_${code}`);
            const pageTitleInput = document.getElementById(`article_page_title_${code}`);
            const pageDescriptionInput = document.getElementById(`article_page_description_${code}`);

            if (titleInput?.value) result.title[code] = titleInput.value;
            if (pageTitleInput?.value) result.page.title[code] = pageTitleInput.value;
            if (pageDescriptionInput?.value) result.page.description[code] = pageDescriptionInput.value;
        });

        return result;
    };

    const removeEmptyFields = (obj) => {
        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }

        const newObj = Array.isArray(obj) ? [] : {};

        for (const [key, value] of Object.entries(obj)) {
            const cleanedValue = removeEmptyFields(value);
            if (
                cleanedValue !== undefined &&
                cleanedValue !== null &&
                (typeof cleanedValue !== 'object' || Object.keys(cleanedValue).length > 0)
            ) {
                newObj[key] = cleanedValue;
            }
        }

        return Array.isArray(obj) ? newObj : Object.keys(newObj).length > 0 ? newObj : undefined;
    }

    const submitArticle = async () => {
        const newArticleData = collectArticleData();

        if (articleData) {
            const differences = findDifferences(initArticleData, newArticleData);
            await updateArticle(articleData.article_id, removeEmptyFields(differences));
            // await goto("/admin/articles");
        } else {
            await createArticle(newArticleData);
        }
    };

    const findDifferences = (init, current) => {
        const diff = {};
        for (const key in init) {
            if (typeof init[key] === "object" && !Array.isArray(init[key])) {
                const nestedDiff = findDifferences(init[key], current[key]);
                if (Object.keys(nestedDiff).length > 0) {
                    diff[key] = nestedDiff;
                }
            } else if (init[key] !== current[key]) {
                diff[key] = current[key];
            }
        }
        return diff;
    };
</script>

<div>
    <form on:submit|preventDefault={submitArticle} class="max-w-[600px] my-auto space-y-4">
        {#each languages as item, index}
            <div class="border rounded-[5px] shadow-sm">
                <button
                        class="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-t-lg font-medium text-gray-800"
                        on:click={() => toggle(index)}
                        type="button">
                    {item.lang}
                </button>

                <div class="p-4 bg-white border-t rounded-b-[5px]" class:hidden={openIndex !== index}>
                    <div class="flex flex-col gap-2">
                        <div>
                            <input
                                    class="p-2 border outline-none rounded-[5px]"
                                    type="text"
                                    name="article_title_{item.code}"
                                    id="article_title_{item.code}"
                                    placeholder="Article Title - {item.code}"
                                    value={articleData ? articleData.title[item.code] : ""}/>
                        </div>
                        <div class="flex flex-col gap-1">
                            <label for="article_content_{item.code}">Article text - {item.code}</label>
                            <Quill bind:content={content[item.code]}/>
                        </div>

                        <h1>Page options</h1>

                        <div>
                            <input
                                    class="p-2 border outline-none rounded-[5px]"
                                    type="text"
                                    name="article_page_title_{item.code}"
                                    id="article_page_title_{item.code}"
                                    placeholder="Article Page Title - {item.code}"
                                    value={articleData ? articleData.page.title[item.code] : ""}/>
                        </div>
                        <div class="flex flex-col gap-1">
                            <label for="article_page_description_{item.code}">Article page description
                                - {item.code}</label>
                            <textarea
                                    class="p-2 border outline-none rounded-[5px] resize-none"
                                    name="article_page_description_{item.code}"
                                    id="article_page_description_{item.code}">{articleData ? articleData.page.description[item.code] : ""}</textarea>
                        </div>
                    </div>
                </div>
            </div>
        {/each}

        <div>
            <span>{$page.url.origin}/info/articles/</span>
            <input
                    class="p-[5px] border outline-none rounded-[5px]"
                    type="text"
                    name="article_page_url"
                    id="article_page_url"
                    placeholder="Article Page Url"
                    value={articleData ? articleData.url : ""} required/>
        </div>

        <button class="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-blue-600" type="submit">
            {#if articleData}
                Update article
            {:else}
                Create Article
            {/if}
        </button>
    </form>
</div>
