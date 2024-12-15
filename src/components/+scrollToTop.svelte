<script>
    import { onMount } from "svelte";
  
    let showButton = false;
  
    // Function to check scroll position and show/hide the button
    const handleScroll = () => {
      if (window.scrollY > 300) {  // Adjust this value based on when you want to show the button
        showButton = true;
      } else {
        showButton = false;
      }
    };
  
    // Scroll to the top of the page when the button is clicked
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    // Attach scroll event listener on mount
    onMount(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    });
  </script>
  
  <!-- Scroll to Top Button -->
  {#if showButton}
    <button
      on:click={scrollToTop}
      class="fixed bottom-5 right-5 bg-cyan-600 text-white p-3 rounded-full shadow-lg hover:bg-cyan-700 transition duration-300 ease-in-out z-20"
      aria-label="Scroll to top"
    >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
        <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.75-4.75a.75.75 0 0 0 1.5 0V8.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L6.2 9.74a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd" />
      </svg>
      
    </button>
  {/if}
  