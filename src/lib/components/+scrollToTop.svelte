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
      class="fixed bottom-5 right-5   p-3 rounded-full shadow-lg hover:bg-cyan-700 transition duration-300 ease-in-out z-20"
      aria-label="Scroll to top"
    >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="size-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
    
      
    </button>
  {/if}
  