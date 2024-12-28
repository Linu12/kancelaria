<script>
    import {page} from "$app/stores";

    import Login from "$lib/components/admin/+login.svelte";
    import Navigation from "$lib/components/admin/+links.svelte";
</script>

{#if !$page.data.admin}
    <Login/>
{/if}

{#if $page.data.admin}
    <main class="container mx-auto flex flex-col gap-5">
        <Navigation/>
        <slot/>
    </main>
{/if}