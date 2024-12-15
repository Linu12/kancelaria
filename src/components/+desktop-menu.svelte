<script>


      // States for toggling menu, dropdown, and modal
  let isMenuOpen = false;
  let isDropdownOpen = false;
  let isModalOpen = false;

    // Toggles
    const toggleMenu = () => (isMenuOpen = !isMenuOpen);
  const toggleDropdown = () => (isDropdownOpen = !isDropdownOpen);
  const openModal = (language) => {
    selectedLanguage = language;
    isModalOpen = true;
  };
  const closeModal = () => (isModalOpen = false);
</script>

<!-- Desktop Menu (Visible on larger screens) -->
<div class="hidden sm:block">
    <div class="flex justify-center items-center space-x-10 uppercase mb-0 mt-0 bg-slate-950 py-4 text-white">
      <!-- Desktop Navigation Links -->
      <a href="/"
      class="text-sm font-semibold flex items-center space-x-1 hover:text-cyan-700 ">
     <!-- Icon before text -->
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
    
     <span>strona główna</span>
   </a>
   
   <a href="/blog/blog-post-2"
   class="text-sm font-semibold flex items-center space-x-1 hover:text-cyan-700">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
  </svg>
  
  <span>Opłaty</span>
  </a>
  
   
  <a href="/co-warto-wiedziec"
  class="text-sm font-semibold flex items-center space-x-1 hover:text-cyan-700">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
  </svg>
  
  
  <span>Co warto wiedzieć</span>
  </a>
   
  <a href="/#contact"
  class="text-sm font-semibold flex items-center space-x-1 hover:text-cyan-700">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
  </svg>
  
  
  <span>Kontakt</span>
  </a>
  
      <div class=" sm:block sm:ml-auto flex items-center relative">
        <button
          class="flex justify-between items-center px-4 py-2 bg-white text-sm font-bold text-cyan-900 hover:bg-gray-50 rounded-md"
          on:click={toggleDropdown}
        >
          <img src="/pl.svg" alt="Polish Flag" class="w-6 h-6 mr-3"  />
          PL
        </button>
  
        {#if isDropdownOpen}
      <div class="absolute top-full right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
  
  
        
  
          <div class="py-1">
                  <a href="#" class="flex items-center block px-4 py-2 text-sm text-black hover:bg-gray-100">
                    <img src="/gb.svg" alt="English Flag" class="w-5 h-5 mr-2" />
                    Eng
                  </a>
                  <a href="#" class="flex items-center block px-4 py-2 text-sm text-black hover:bg-gray-100">
                    <img src="/fr.svg" alt="French Flag" class="w-5 h-5 mr-2" />
                    Fr
                  </a>
                  <a href="#" class="flex items-center block px-4 py-2 text-sm text-black hover:bg-gray-100">
                    <img src="/de.svg" alt="German Flag" class="w-5 h-5 mr-2" />
                    Ger
                  </a>
                  <a href="#" class="flex items-center block px-4 py-2 text-sm text-black hover:bg-gray-100">
                    <img src="/by.svg" alt="Belarusian Flag" class="w-5 h-5 mr-2" />
                    Bel
                  </a>
                  <a href="#" class="flex items-center block px-4 py-2 text-sm text-black hover:bg-gray-100">
                    <img src="/ua.svg" alt="Ukrainian Flag" class="w-5 h-5 mr-2" />
                    Ukr
                  </a>
                </div>
        
      </div>
    {/if}
        
  
    </div>
  </div>
  
      </div>
  