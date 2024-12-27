<script>
    import {page} from "$app/stores";

    import Login from "/src/components/admin/+login.svelte";
    import Navigation from "/src/components/admin/+links.svelte";
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