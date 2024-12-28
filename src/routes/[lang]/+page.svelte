<script>
    import '$lib/styles/app.css';
    import Form from '$lib/components/+form.svelte';
    import Horizontal from '$lib/components/+horizontal.svelte';
    import ScrollToTop from '$lib/components/+scrollToTop.svelte';
    import Footer from '$lib/components/+footer.svelte';
    import QuillEditor from '$lib/components/+quillEditor.svelte';
    import {goto} from '$app/navigation';
    import {languagesList} from "$lib/js/languages.js";
    import {page} from "$app/stores";
    import {changeLang} from "$lib/js/languages.js";
    import Navigation from "$lib/components/+navigation.svelte";
    import {onMount} from 'svelte';

    export let data;

    const lang = data.lang;

    console.log(lang)

    const scrollToSection = () => {
        goto('#contact');
    };

    const scrollToMap = () => {
        goto('#map');
    };

    function goToMap() {
        const url = "https://www.google.com/maps/dir//Notariusz+Joanna+Czernikiewicz+-+Kancelaria+Notarialna+Andrzeja+Struga+7+90-420+%C5%81%C3%B3d%C5%BA/@51.7654779,19.4549993,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x471bcb2a89f9d1c7:0x6049035063f884f7";
        window.location.href = url; // Redirects the browser to the URL
    }
</script>

<Navigation lang={lang}/>

<div class="w-full h-auto">
    <div class="relative w-11/12 mx-auto h-[32rem] mt-3 bg-cover bg-left  rounded-lg md:hidden"
         style="background-image: url('notariusz.jpg'); background-position: -180px center ">
        <div class="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <div class="absolute inset-0 flex justify-center items-center text-white">
            <div class="container mx-auto px-5 py-12 items-center flex flex-col">
                <div class="w-full animate-fade-in-down">
                    <h1 class="text-3xl mb-2 font-extrabold tracking-tight leading-tight text-white">
                        {lang?.langFile?.main?.notary_office}
                    </h1>
                    <h1 class="text-2xl mb-4 font-bold text-white tracking-tight leading-tight">
                        Joanna <span class="border-b-4 border-green-400 -mb-20"></span>Czernikiewicz
                    </h1>
                    <p class="mt-2 mb-1 leading-normal tracking-tight text-white text-sm lg:text-base">
                        90-420 Łódź, ul. Andrzeja Struga 7 lok. 4
                    </p>
                    <p class="mt-0 mb-1 leading-normal tracking-tight text-white text-sm lg:text-base">
                        510 873 091 | 42 630 27 63
                    </p>
                    <p class="mt-0 mb-1 leading-normal tracking-tight text-white text-sm lg:text-base">
                        kancelaria@notariusz-lodz.com
                    </p>
                    <div class="flex flex-col lg:flex-row lg:space-x-4">
                        <button
                                on:click={scrollToSection}
                                class="bg-transparent hover:bg-cyan-800 text-white font-semibold py-4 px-4 my-3 border border-teal-200 shadow-md hover:border-transparent rounded text-center flex items-center justify-center space-x-2">
                            <span></span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" class="h-6 w-6 text-cyan-400">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                        </button>
                        <button
                                on:click={scrollToMap}
                                class="bg-transparent hover:bg-cyan-800 text-white font-semibold py-4 px-4 my-3 border border-teal-200 shadow-md hover:border-transparent rounded text-center flex items-center justify-center space-x-2">
                            <span>Jak dojechać?</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" class="h-6 w-6 text-cyan-400">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                        </button>
                        <button
                                on:click={goToMap}
                                class="bg-transparent hover:bg-cyan-800 text-white font-semibold py-4 px-4 my-3 border border-teal-200 shadow-md hover:border-transparent rounded text-center flex items-center justify-center space-x-2">
                            <span>Wyznacz trasę</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" class="h-6 w-6 text-cyan-400">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<!--DESKTOP VIEW-->


<div class="hidden md:flex w-full h-[40rem]">
    <!-- Left Section: Gradient Background -->
    <div class="flex-[3] bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-700 flex items-center justify-center text-white">
        <div class="container mx-auto px-5 py-12 items-center flex flex-col">
            <div class="lg:w-2/3 w-full animate-fade-in-down">
                <h1 class="text-6xl mb-2 font-extrabold tracking-tight leading-tight">
                    {lang?.langFile?.main?.info?.notary_office}
                </h1>
                <h1 class="text-5xl mb-4 font-bold tracking-tight leading-tight">
                    Joanna <span class="border-b-4 border-green-400 -mb-20"></span>Czernikiewicz
                </h1>
                <p class="mt-3 mb-1 tracking-wider lg:text-2xl font-light flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                    </svg>
                    <span>90-420 Łódź, ul. Andrzeja Struga 7 lok. 4</span>
                </p>
                <p class="mt-2 mb-1 tracking-wider lg:text-2xl font-light flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"/>
                    </svg>
                    <span>510 873 091 | 42 630 27 63</span>
                </p>
                <p class="mt-2 mb-1 lg:text-2xl font-light tracking-wider flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"/>
                    </svg>
                    <span>kancelaria@notariusz-lodz.com</span>
                </p>
                <!-- Button Section -->
                <div class="flex flex-col lg:flex-row lg:space-x-4 mt-12">
                    <button
                            on:click={scrollToSection}
                            class="bg-transparent hover:bg-cyan-800 text-white font-semibold py-4 px-4 my-3 border border-teal-200 shadow-md hover:border-transparent rounded text-center flex items-center justify-center space-x-2 z-20">
                        <span>{lang?.langFile?.main?.info?.buttons?.contact_with_us}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="h-6 w-6 text-cyan-400">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                    </button>
                    <button
                            on:click={scrollToMap}
                            class="bg-transparent hover:bg-cyan-800 text-white font-semibold py-4 px-4 my-3 border border-teal-200 shadow-md hover:border-transparent rounded text-center flex items-center justify-center space-x-2 z-20">
                        <span>{lang?.langFile?.main?.info?.buttons?.how_to_get_there}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="h-6 w-6 text-cyan-400">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                    </button>
                    <button
                            on:click={goToMap}
                            class="bg-transparent hover:bg-cyan-800 text-white font-semibold py-4 px-4 my-3 border border-teal-200 shadow-md hover:border-transparent rounded text-center flex items-center justify-center space-x-2 z-20 ">
                        <span>{lang?.langFile?.main?.info?.buttons?.set_route}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="h-6 w-6 text-cyan-400">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="flex justify-center items-center absolute inset-0 z-10 ">
        <img src="/orzel.png" width="250px" alt="Polish Emblem"
             class="opacity-25 transform translate-x-48 translate-y-[-100px] w-42"/>
    </div>

    <div class="flex-[2] relative bg-cover bg-no-repeat bg-[center_bottom]"
         style="background-image: url('/kancelaria.jpg');">
        <div class="absolute inset-0 bg-black opacity-40"></div>
        <p id="dynamicText"></p>
    </div>
</div>

<section
        class="text-gray-600 body-font flex bg-gray-900 relative md:text-base p-4 sm:h-auto sm:p-6 sm:bg-gray-900 bg-gradient-to-r from-teal-700 from-10% to-cyan-900 to-90% w-[90%] rounded-md mx-auto sm:w-[90%] md:w-[100%] lg:my-0 my-5 shadow-2xl shadow-teal-900 overflow-hidden">
    <div class="container mx-auto flex px-5 py-12 items-center justify-center flex-col lg:flex-row lg:justify-between">
        <div class="lg:w-2/3 w-full animate-fade-in-down">
            <h1 class="md:text-6xl text-3xl mb-2 font-extrabold tracking-tight leading-tight text-white md:text-white flex items-center lg:space-x-6">
                <span>{lang?.langFile?.main?.notary?.title}</span>
                <svg class="w-6 h-6 ml-2 text-white lg:w-12 lg:h-12 lg:ml-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                </svg>
            </h1>

            <p class="mt-2 mb-1 md:leading-relaxed leading-normal tracking-tight text-white text-base lg:leading-10 lg:text-xl">
                {lang?.langFile?.main?.notary?.text}
            </p>
        </div>

        <div class="hidden lg:block lg:w-1/3 lg:ml-20 shadow-lg">
            <img src="/kanc.jpg" alt="Kancelaria Notarialna Joanna Czernikiewicz" class="rounded-lg shadow-lg">
        </div>
    </div>
</section>

<div class="relative z-10">
    <div class="absolute w-fit inset-x-0 top-1/2 transform -translate-y-1/2 lg:top-[60%] lg:transform lg:-translate-y-[-30%] lg:translate-x-12 flex justify-center items-center z-0 sm:block">
        <img src="orzel.png" width="250px" alt="Polish Emblem" class="opacity-25"/>
    </div>
</div>

<section
        class="text-gray-600 body-font flex bg-gray-900 relative md:text-base p-4 sm:h-auto sm:p-6 sm:bg-gray-900 bg-gradient-to-r from-cyan-900 from-10% to-teal-700 to-90% w-[90%] rounded-md mx-auto sm:w-[90%] md:w-[100%] lg:my-0 my-5 shadow-2xl shadow-teal-900 lg:shadow-none overflow-hidden">
    <div class="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
        <div class="lg:w-2/3 w-full animate-fade-in-down">
            <div class="flex items-center space-x-3 lg:space-x-5">
                <h1 class="md:text-6xl text-3xl mb-2 font-extrabold tracking-tight leading-tight text-white md:text-white">
                    {lang?.langFile?.main?.experience?.title}
                </h1>
                <svg class="w-6 h-6 ml-2 text-white lg:w-12 lg:h-12 translate-y-[-3px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                </svg>
            </div>

            <p class="mt-2 mb-1 md:leading-relaxed leading-normal tracking-tight text-white text-base lg:leading-10 lg:text-xl">
                {lang?.langFile?.main?.experience?.text}
            </p>
        </div>
    </div>
</section>

<main id="contact" class="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-700 from-10% to-cyan-900 to-90%  relative">
    <div class="max-w-5xl mx-auto">
        <h1 class="text-3xl font-extrabold text-left md:text-6xl mb-8 text-white">{lang?.langFile?.main?.contact_form?.title}</h1>
        <Form lang={lang}/>
    </div>
</main>


<section class="p-6 w-full shadow-sm" id="map">
    <div class="h-96 rounded-lg overflow-hidden shadow-md mt-7">
        <!-- svelte-ignore a11y_missing_attribute -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2469.225862326579!2d19.454999!3d51.765478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bcb2a89f9d1c7%3A0x6049035063f884f7!2sNotariusz%20Joanna%20Czernikiewicz%20-%20Kancelaria%20Notarialna!5e0!3m2!1sen!2spl!4v1733324927397!5m2!1sen!2spl"
                width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</section>

<Footer lang={lang}/>
<ScrollToTop/>