<script>
    import {page} from "$app/stores";
    import {goto} from "$app/navigation";

    import AddArticle from "/src/components/admin/+addArticle.svelte";
</script>

<AddArticle articleData={$page.data.article}/>