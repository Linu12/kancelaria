<script>
    import ScrollToTop from '$lib/components/+scrollToTop.svelte';
    import {page} from "$app/stores";
    import {goto} from "$app/navigation";
    import Navigation from '$lib/components/+navigation.svelte';
    import Footer from '$lib/components/+footer.svelte';

    export let data;

    const lang = data.lang;

    const changePage = async (pageNum) => {
        if (pageNum >= 1 && pageNum <= $page.data.articlesResponse.page.total) {
            $page.url.searchParams.set("page", pageNum);
            await goto($page.url, {invalidateAll: true});
        }
    }
</script>

<Navigation lang={lang}/>

<section class="py-12 bg-gray-100">
    <div class="container mx-auto px-5">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each $page.data.articlesResponse.articles as article}
                <div class="bg-cyan-500 lg:bg-white shadow-md rounded-lg overflow-hidden">
                    <div class="p-6">
                        <h2 class="text-xl font-semibold text-white bg-gradient-to-r from-cyan-700 from-10% to-cyan-900 to-90%  p-4 rounded shadow-xl shadow-cyan-700 lg:shadow-sm">{article.title[lang.code]}</h2>
                        <!-- <p class="text-sm text-gray-500">{date}</p> -->
                        <p class="mt-2 text-gray-700">{article.content[lang.code].substring(0, 150).replace(/<[^>]+>/g, '')}...</p>
                        <a href="/{lang.code}/info/articles/{article.url}"
                           class="text-cyan-700 hover:text-cyan-500 mt-4 inline-block text-base">Czytaj więcej</a>
                    </div>
                </div>
            {/each}
        </div>

        <div class="mt-5 flex gap-1">
            {#each Array($page.data.articlesResponse.page.total) as _, index (index)}
                <button class="flex items-center justify-center size-10 {$page.data.articlesResponse.page.current === index + 1 ? 'bg-teal-600' : 'bg-gray'}"
                        on:click={() => changePage(index + 1)}
                        disabled={$page.data.articlesResponse.page.current === index + 1}>{index + 1}
                </button>
            {/each}
        </div>

        <!-- Pagination Controls -->
        <!--        <div class="flex flex-col sm:flex-row justify-between items-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">-->
        <!--            <button-->
        <!--                    class="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-cyan-700 text-white rounded hover:bg-cyan-500 disabled:bg-gray-300"-->
        <!--                    on:click={prevPage}-->
        <!--                    disabled={currentPage === 1}>-->
        <!--                poprzednie wpisy-->
        <!--            </button>-->
        <!--            <p class="text-sm sm:text-base">Strona {currentPage} z {Math.ceil(blogPosts.length / itemsPerPage)}</p>-->
        <!--            <button-->
        <!--                    class="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-cyan-700 text-white rounded hover:bg-cyan-500 disabled:bg-gray-300"-->
        <!--                    on:click={nextPage}-->
        <!--                    disabled={currentPage === Math.ceil(blogPosts.length / itemsPerPage)}>-->
        <!--                następne wpisy-->
        <!--            </button>-->
        <!--        </div>-->

    </div>
</section>

<Footer lang={lang}/>
<ScrollToTop/>
