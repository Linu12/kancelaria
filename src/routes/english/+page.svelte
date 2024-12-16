<script>
  import { translations } from "$lib/translations.js";
    import DesktopMenu from "../../components/+desktop-menu.svelte";
  const { title, introduction, documents, conclusion } = translations.english;
   // Language is 'en' for English page
   const currentLanguage = "eng";
</script>

<DesktopMenu {currentLanguage} />

<div class="container mx-auto px-8 py-12 bg-gray-50">
  <h1 class="text-xl font-semibold text-white bg-gradient-to-r from-cyan-700 from-10% to-cyan-900 to-90% p-4 rounded shadow-xl shadow-cyan-700 lg:shadow-sm mb-10">{title}</h1>
  <p class="text-gray-600 mb-6">{introduction}</p>
  <ul class="list-decimal list-inside space-y-4 pl-4 text-gray-700">
    {#each documents as doc}
      <li>{doc}</li>
    {/each}
  </ul>
  <p class="text-gray-600 mt-6">{conclusion}</p>
</div>

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
