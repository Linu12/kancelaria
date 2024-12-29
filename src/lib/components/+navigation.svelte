<script>
    import {changeLang, languagesList} from "$lib/js/languages.js";
    import {page} from "$app/stores";

    let isMenuOpen = false;
    let isDropdownOpen = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen
    };
    const toggleDropdown = () => {
        isDropdownOpen = !isDropdownOpen
    };

    export let lang;
</script>

<nav class="bg-white-800 ">
    <div class="hidden sm:block fixed top-0 left-0 w-full z-50">
        <div class="flex justify-center items-center space-x-10 uppercase mb-0 mt-0 bg-slate-950 py-4 text-white">
            <a href="/{lang.code}"
               class="text-sm font-semibold flex items-center space-x-1 hover:text-cyan-700  ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                </svg>
                <span>{lang.langFile?.header?.home}</span>
            </a>

            <a href="/{lang.code}/info"
               class="text-sm font-semibold flex items-center space-x-1 hover:text-cyan-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"/>
                </svg>
                <span>{lang.langFile?.header?.info}</span>
            </a>

            <a href="#contact"
               class="text-sm font-semibold flex items-center space-x-1 hover:text-cyan-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"/>
                </svg>
                <span>{lang.langFile?.header?.contact}</span>
            </a>

            <!--     Desktop languages       -->
            <div class=" sm:block sm:ml-auto flex items-center relative">
                <button class="flex justify-between items-center px-4 py-2  text-sm font-bold text-white hover:bg-gray-50 rounded-md"
                        on:click={toggleDropdown}>
                    <img src={lang.flag} alt="" class="w-6 h-6 mr-3"/>
                    {lang.title}
                </button>

                {#if isDropdownOpen}
                    <div class="absolute top-full right-0 mt-2 shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                        <div class="py-1">

                            {#each languagesList as item }
                                {#if item.code !== lang.code}
                                    <button on:click={() => {changeLang($page, item.code)}}
                                            class="flex items-center px-4 py-2 text-sm text-black hover:bg-gray-100">
                                        <img src={item.flag} alt="" class="w-5 h-5 mr-2"/>
                                        {item.title}
                                    </button>
                                {/if}
                            {/each}

                        </div>
                    </div>
                {/if}
            </div>

        </div>
    </div>


    <div class="mx-auto mt-2 max-w-7xl px-2 sm:px-6 lg:px-10">
        <div class="relative flex h-8 items-center justify-between ">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                <button
                        type="button"
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-cyan-800 hover:bg-cyan-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white "
                        aria-controls="mobile-menu"
                        aria-expanded={isMenuOpen}
                        on:click={toggleMenu}
                >
                    <span class="sr-only"></span>
                    {#if !isMenuOpen}
                        <svg
                                class="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    {/if}
                    {#if isMenuOpen}
                        <svg class="block h-6 w-6"
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             stroke="currentColor"
                             viewBox="0 0 24 24"
                             aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    {/if}
                </button>
            </div>
        </div>

        {#if isMenuOpen}
        <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-5 pt-2 pb-3 uppercase">
                <!-- Home Link -->
                <div class="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                         class="h-4 w-4 text-cyan-800">
                        <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z"/>
                    </svg>
                    <a href="/{lang.code}"
                       class="block rounded-md px-3 py-2 text-xs font-medium text-black-300 hover:bg-indigo-100 hover:text-black">
                        {lang.langFile?.header?.home}
                    </a>
                </div>
        
                <!-- Info Link -->
                <div class="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                         class="size-4 text-cyan-800">
                        <path fill-rule="evenodd"
                              d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z"
                              clip-rule="evenodd"/>
                    </svg>
                    <a href="/{lang.code}/info"
                       class="block rounded-md px-3 py-2 text-xs font-medium text-black-300 hover:bg-indigo-100 hover:text-black">
                        {lang.langFile?.header?.info}
                    </a>
                </div>
        
                <!-- Contact Link -->
                <div class="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                         class="size-4 text-cyan-800">
                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"/>
                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"/>
                    </svg>
                    <a href="#contact"
                       class="block rounded-md px-3 py-2 text-xs font-medium text-black-300 hover:bg-indigo-100 hover:text-black">
                        {lang.langFile?.header?.contact}
                    </a>
                </div>
        
                <!-- Language Selector -->
                <div class="relative">
                    <button class="flex justify-between items-center w-full px-3 py-2 rounded-md text-xs font-medium text-black-300 hover:bg-indigo-100 hover:text-black"
                            on:click={toggleDropdown}>
                        <img src={lang.flag} alt="" class="w-6 h-6 mr-3"/>
                        {lang.title}
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {#if isDropdownOpen}
                        <div class="absolute top-full mt-2 bg-white ring-1 ring-black ring-opacity-5 shadow-lg z-50 w-full">
                            <div class="py-1">
                                {#each languagesList as item}
                                    {#if item.code !== lang.code}
                                        <button on:click={() => {changeLang($page, item.code)}}
                                                class="flex items-center px-4 py-2 text-sm text-black hover:bg-gray-100">
                                            <img src={item.flag} alt="" class="w-5 h-5 mr-2"/>
                                            {item.title}
                                        </button>
                                    {/if}
                                {/each}
                            </div>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
        {/if}
        
    </div>
</nav>