<script>
    // Modal visibility control
    let isModalOpen = false;
  
    // Toggle modal visibility
    const toggleModal = () => {
      isModalOpen = !isModalOpen;
    };
  </script>
  
  <nav class="bg-white-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-10">
      <div class="relative flex h-16 items-center justify-between">
  
        <!-- Mobile menu button and Polish flag button aligned on the same line -->
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden space-x-4">
          <button
            type="button"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-teal-800 hover:bg-cyan-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            on:click={toggleMenu}
          >
            <span class="sr-only">Open main menu</span>
            {#if !isMenuOpen}
              <!-- Hamburger Icon when menu is closed -->
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            {/if}
            {#if isMenuOpen}
              <!-- Close Icon when menu is open -->
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            {/if}
          </button>
          
          <!-- Polish Flag Button (Right) -->
          <button
            type="button"
            on:click={toggleModal}
            class="text-cyan-900">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg" alt="PL" class="w-6 h-6" />
          </button>
          
        </div>
  
        <!-- Logo or Branding Section (Optional) -->
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex shrink-0 items-center">
            <!-- Optional Logo -->
          </div>
        </div>
  
        <!-- Desktop Menu (Visible on larger screens) -->
        <div class="hidden sm:flex sm:space-x-4">
          <a href="#" class="text-xs font-medium text-gray-900 hover:bg-cyan-50 hover:text-black-400">Strona główna</a>
          <a href="#fees" class="text-xs font-medium text-gray-900 hover:bg-cyan-50 hover:text-black-400">Opłaty</a>
          <a href="#" class="text-xs font-medium text-gray-900 hover:bg-cyan-50 hover:text-black-400">Co warto wiedzieć</a>
          <a href="#contact" class="text-xs font-medium text-gray-900 hover:bg-cyan-50 hover:text-black-400">Kontakt</a>
  
          <!-- Language Dropdown in Desktop -->
          <div class="relative">
            <button
              class="flex justify-between w-full rounded-md border border-gray-900 shadow-lg px-4 py-2 bg-white text-sm font-light text-cyan-900 hover:bg-gray-50"
              on:click={toggleModal}
            >
              Languages
              <svg
                class="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06-.02L10 10.94l3.72-3.75a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
  
      </div>
    </div>
  </nav>
  
  <!-- Modal -->
  {#if isModalOpen}
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded-lg max-w-sm w-full">
        <h2 class="text-xl font-semibold text-center mb-4">Select a Language</h2>
        <p class="text-gray-700 mb-4">
          Please select a language to continue.
        </p>
        <div class="flex justify-end">
          <button
            on:click={toggleModal}
            class="text-teal-900 hover:bg-teal-100 rounded px-4 py-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  {/if}
  