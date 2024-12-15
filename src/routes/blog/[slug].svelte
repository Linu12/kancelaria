<script context="module">
    export async function load({ params }) {
      const slug = params.slug;
  
      // Example data (replace with your API or database logic)
      const blogPosts = [
        {
          title: 'Ugoda o Alimenty w Formie Aktu Notarialnego: Przewodnik',
          content: `W pełnej wersji znajdziesz szczegóły dotyczące ugody...`,
          slug: 'blog-post-1',
        },
      ];
  
      const post = blogPosts.find((post) => post.slug === slug);
  
      if (!post) {
        return {
          status: 404,
          error: new Error('Post not found'),
        };
      }
  
      return { props: { post } };
    }
  export let post;
  </script>
  
  
  <article class="container mx-auto px-5 py-10">
    <h1 class="text-3xl font-bold mb-4">{post.title}</h1>
    <div class="prose">
      {@html post.content} <!-- This renders HTML content properly -->
    </div>
  </article>
  