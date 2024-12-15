<script>
  import ScrollToTop from "../../../components/+scrollToTop.svelte";
  import DesktopMenu from "../../../components/+desktop-menu.svelte";

export let data;
const { post } = data;
</script>


<DesktopMenu />
<!-- Centered Article -->
<article class="w-full max-w-3xl mx-auto px-5 py-10">
<h1 class="text-3xl font-bold  border border-cyan-700 rounded bg-gradient-to-r from-cyan-700 from-10% to-cyan-900 to-90% text-white p-3 text-center lg: mb-16">
  {post.title}
</h1>
<!-- <p class="text-sm text-gray-500 mb-6 text-center">{post.date}</p> -->

<div class="prose mx-auto">
  {@html post.content}
</div>
</article>

<!-- Footer -->
<footer class="w-full ">
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <!-- Grid -->
  <div class="py-7 border-t border-cyan-800">
    <div class="flex items-center justify-center">
      <span class="text-gray">© Notariusz Joanna Czernikiewicz 2024</span>
    </div>
  </div>
</div>
</footer>

<ScrollToTop />

<style>
/* Add styles here */
</style>
