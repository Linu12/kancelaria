<script>
    const links = [
        {
            title: "Articles",
            href: "/admin/articles"
        },
        {
            title: "Contact forms",
            href: "/admin/forms"
        },
        // {
        //     title: "Access",
        //     href: "/admin/access"
        // }
    ]
</script>

<header>
    <nav class="flex gap-5">
        <ul class="contents">
            {#each links as link }
                <a href="{link.href}">{link.title}</a>
            {/each}
        </ul>
    </nav>
</header>