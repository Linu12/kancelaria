<script>
    import { page } from "$app/stores";
    import ScrollToTop from "$lib/components/+scrollToTop.svelte";
    import Navigation from "$lib/components/+navigation.svelte";
    import Footer from "$lib/components/+footer.svelte";

    export let data;

    const lang = data.lang;
</script>

<svelte:head>
    <title>{data.article.page.title[lang.code]}</title>
    <meta name="description" content={data.article.page.description[lang.code]}>
</svelte:head>

<Navigation lang={lang}/>

<article class="w-full max-w-3xl mx-auto px-5 py-10">
    <h1 class="text-3xl font-bold  border border-cyan-700 rounded bg-gradient-to-r from-cyan-700 from-10% to-cyan-900 to-90% text-white p-3 text-center lg: mb-16">
        {$page.data.article.title[lang.code]}
    </h1>
    <div class="prose mx-auto">
        {@html $page.data.article.content[lang.code]}
    </div>
</article>

<Footer lang={lang}/>
<ScrollToTop/>