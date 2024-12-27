<script>
    import '../app.css';
    import Form from '../components/+form.svelte';
    import Horizontal from '../components/+horizontal.svelte';
    import ScrollToTop from '../components/+scrollToTop.svelte';
    import Footer from '../components/+footer.svelte';
    import QuillEditor from '../components/+quillEditor.svelte';


    // @ts-ignore
    import {goto} from '$app/navigation';

    const scrollToSection = () => {
        goto('#contact'); // This scrolls to the section with id="contact-section"
    };

    const scrollToMap = () => {
        goto('#map'); // This scrolls to the section with id="contact-section"
    };
    import {onMount} from 'svelte';

    onMount(() => {
        const images = document.querySelectorAll('[data-twe-lazy-animation="true"]');

        // IntersectionObserver for lazy loading
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('opacity-100'); // Apply fade-in animation
                    img.classList.remove('opacity-0'); // Ensure image is visible
                    observer.unobserve(img); // Stop observing the image after it appears
                }
            });
        });

        images.forEach(img => {
            observer.observe(img);
        });
    });


    // let isMenuOpen = false; // Controls if the mobile menu is open
    // let isDropdownOpen = false; // Controls if the language dropdown is open

    // // Toggle the mobile menu visibility
    // function toggleMenu() {
    //   isMenuOpen = !isMenuOpen;
    // }

    // // Toggle the language dropdown visibility
    // function toggleDropdown() {
    //   isDropdownOpen = !isDropdownOpen;
    // }


    // States for toggling menu, dropdown, and modal
    let isMenuOpen = false;
    let isDropdownOpen = false;
    let isModalOpen = false;

    // State for selected language
    let selectedLanguage = null;

    const translations = {
        English: `
     <p>Documents Required for Foreigners Visiting a Notary.</p>
    <p>When a foreigner visits a notary, it is important to prepare the necessary documents that may be required depending on the nature of the notarial act. Below is a list of key documents that should be brought along:</p><br>
    <ul>
      <li>1. Identity Document – A passport or another recognized document that confirms identity, accepted in Poland.</li><br>
      <li>2. PESEL Number – A PESEL number is required, and if the person does not have a PESEL number, a certificate of its absence must be provided.</li><br>
      <li>3. Documents Related to the Specific Notarial Act – These may include property deeds, contracts, powers of attorney, certificates, or other legal documents, depending on the nature of the matter.</li><br>
      <li>4. Certified Translations – If any documents are written in a language other than Polish, certified translations into Polish may be required.</li><br>
    </ul>
    <p>It is advisable to contact the notary’s office in advance to confirm which specific documents will be needed for the particular situation, ensuring a smooth execution of notarial procedures.</p>
  `,

        French: `<p>Documents requis pour les étrangers lors d’une visite chez un notaire.Lorsque qu’un étranger se rend chez un notaire, il est important de préparer les documents nécessaires qui peuvent être requis en fonction de la nature de l’acte notarial.</p><br>
     <ul>Ci-dessous, une liste des principaux documents à apporter :<br><br>
      <li>1. Document d’identité – Un passeport ou un autre document reconnu confirmant l’identité, accepté en Pologne.
        </li><br>
        <li>2. Numéro PESEL – Un numéro PESEL est requis, et si la personne n’en possède pas, un certificat de son absence doit être fourni.
          </li><br>
          <li>3. Documents liés à l’acte notarial spécifique – Cela peut inclure des actes de propriété, des contrats, des procurations, des certificats ou d’autres documents juridiques, selon la nature de la demande.
            </li><br>
            <li>4. Traductions certifiées – Si des documents sont rédigés dans une langue autre que le polonais, des traductions certifiées en polonais peuvent être nécessaires.Il est recommandé de contacter le bureau notarial à l’avance pour confirmer quels documents spécifiques seront nécessaires dans la situation particulière, afin d’assurer le bon déroulement des procédures.</li>
            </ul>

    `,

        German: `<p>Dokumente, die Ausländer bei einem Notarbesuch benötigen. Wenn ein Ausländer einen Notar aufsucht, ist es wichtig, die erforderlichen Dokumente vorzubereiten, die je nach Art der notariellen Handlung erforderlich sein können.</p> <br>
    <ul> Im Folgenden finden Sie eine Liste der wichtigsten Dokumente, die mitgebracht werden sollten:<br> <br>
      <li>1. Identitätsdokument – Ein Reisepass oder ein anderes anerkanntes Dokument, das die Identität bestätigt und in Polen akzeptiert wird.
        </li><br>
        <li> 2. PESEL-Nummer – Eine PESEL-Nummer ist erforderlich. Wenn die Person keine PESEL-Nummer hat, muss eine Bescheinigung über deren Fehlen vorgelegt werden. </li><br>
      <li>     3. Dokumente im Zusammenhang mit der spezifischen notariellen Handlung – Dazu können Eigentumsurkunden, Verträge, Vollmachten, Bescheinigungen oder andere rechtliche Dokumente gehören, abhängig von der Art des Anliegens. </li><br>
      <li> 4. Beglaubigte Übersetzungen – Wenn Dokumente in einer anderen Sprache als Polnisch verfasst sind, können beglaubigte Übersetzungen ins Polnische erforderlich sein. Es wird empfohlen, sich im Voraus mit dem Notariat in Verbindung zu setzen, um zu bestätigen, welche spezifischen Dokumente für die jeweilige Situation benötigt werden, um einen reibungslosen Ablauf der notariellen Verfahren zu gewährleisten.</li>
      </ul>
    `,

        Belarus: `<p>Дакументы, неабходныя для замежнікаў пры наведванні натарыуса. Калі замежнік наведвае натарыуса, важна падрыхтаваць неабходныя дакументы, якія могуць спатрэбіцца ў залежнасці ад характару натарыяльнага дзеяння.
  </p>
   Ніжэй прыведзены спіс асноўных дакументаў, якія варта мець пры сабе: <br><br>
  <ul>
    <li>1. Дакумент, які пацвярджае асобу – Паспорт або іншы прызнаны дакумент, які пацвярджае асобу і прымаецца ў Польшчы  <br><br>
      </li>
      <li>2. Нумар PESEL – Патрабуецца нумар PESEL, і калі ў асобы яго няма, трэба прадаставіць сертыфікат аб яго адсутнасці. <br><br>
        </li>
        <li> 3. Дакументы, звязаныя з канкрэтным натарыяльным дзеяннем – Гэта могуць быць праваўстаноўчыя дакументы, дагаворы, даверанасці, сертыфікаты або іншыя юрыдычныя дакументы, у залежнасці ад характару справы.<br><br>
          </li> 4. Завераныя пераклады – Калі якія-небудзь дакументы складзены на мове, іншай за польскую, могуць спатрэбіцца завераныя пераклады на польскую мову. Рэкамендуецца загадзя звязацца з натарыяльнай канторай, каб пацвердзіць, якія дакументы канкрэтна спатрэбяцца для дадзенай сітуацыі, каб забяспечыць бесперашкоднае ажыццяўленне натарыяльных працэдур
    </ul>
 `,

        Ukrainian: `<p>Документи, необхідні іноземцеві під час візиту до нотаріуса.
  </p> Коли іноземець звертається до нотаріуса, важливо підготувати відповідні документи, які можуть бути необхідні залежно від характеру нотаріальної дії. Нижче наведено список основних документів, які варто мати при собі: 1. Документ, що засвідчує особу – Паспорт або інший визнаний документ, що підтверджує особу, який приймається в Польщі. 2. Номер PESEL – Потрібен номер PESEL, а якщо особа не має номера PESEL, необхідно надати свідоцтво про його відсутність. 3. Документи, пов’язані з конкретною нотаріальною дією – Це можуть бути акти власності, угоди, довіреності, довідки чи інші юридичні документи залежно від характеру справи. 4. Присяжні переклади – Якщо будь-які документи складені іншою мовою, можуть знадобитися присяжні переклади на польську мову. Рекомендується заздалегідь зв’язатися з нотаріальною конторою, щоб упевнитися, які саме документи будуть потрібні в конкретній ситуації, що дозволить оперативно провести.`
    };

    // Toggles
    const toggleMenu = () => (isMenuOpen = !isMenuOpen);
    const toggleDropdown = () => (isDropdownOpen = !isDropdownOpen);
    const openModal = (language) => {
        selectedLanguage = language;
        isModalOpen = true;
    };
    const closeModal = () => (isModalOpen = false);


    function goToMap() {
        const url = "https://www.google.com/maps/dir//Notariusz+Joanna+Czernikiewicz+-+Kancelaria+Notarialna+Andrzeja+Struga+7+90-420+%C5%81%C3%B3d%C5%BA/@51.7654779,19.4549993,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x471bcb2a89f9d1c7:0x6049035063f884f7";
        window.location.href = url; // Redirects the browser to the URL
    }


</script>

<nav class="bg-white-800 ">
    <div class="mx-auto mt-2 max-w-7xl px-2 sm:px-6 lg:px-10">
        <div class="relative flex h-8 items-center justify-between ">
            <!-- Hamburger Icon (Mobile) -->
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                <button
                        type="button"
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-cyan-800 hover:bg-cyan-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white "
                        aria-controls="mobile-menu"
                        aria-expanded={isMenuOpen}
                        on:click={toggleMenu}
                >
                    <span class="sr-only"></span>
                    <!-- Hamburger Icon -->
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
                    <!-- Close Icon -->
                    {#if isMenuOpen}
                        <svg
                                class="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    {/if}
                </button>
            </div>

            <!-- Polish Flag Button (Right Side in Mobile) -->
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                <button
                        class="flex justify-between items-center px-4 py-2 bg-white text-sm font-bold text-cyan-900 hover:bg-gray-50 rounded-md sm:hidden"
                        on:click={toggleDropdown}
                >
                    <img src="pl.svg" alt="Polish Flag" class="w-6 h-6 mr-2"/>
                    <span class="relative top-0.5">PL</span>
                </button>

                {#if isDropdownOpen}
                    <div
                            class="absolute top-full right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 sm:hidden"
                    >
                        <div class="py-1">
                            <a
                                    href="#"
                                    class="flex items-center block px-4 py-2 text-sm text-cyan-900 hover:bg-gray-100"
                                    on:click={() => openModal('English')}

                            >
                                <img src="eng.svg" alt="English Flag" class="w-5 h-5 mr-2"/>
                                Eng
                            </a>
                            <a
                                    href="#"
                                    class="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    on:click={() => openModal('French')}
                            >
                                <img src="fr.svg" alt="French Flag" class="w-5 h-5 mr-2"/>
                                Fr
                            </a>
                            <a
                                    href="#"
                                    class="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    on:click={() => openModal('German')}
                            >
                                <img src="ger.svg" alt="German Flag" class="w-5 h-5 mr-2"/>
                                Ger
                            </a>

                            <a href="#"
                               class="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <img src="bel.svg" alt="Belarusian Flag" class="w-5 h-5 mr-2"
                                     on:click={() => openModal('Belarus')}/>
                                Bel
                            </a>

                            <a href="#"
                               class="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <img src="ukr.svg" alt="Belarusian Flag" class="w-5 h-5 mr-2"
                                     on:click={() => openModal('Ukrainian')}/>
                                Ukr
                            </a>
                        </div>
                    </div>
                {/if}
            </div>
        </div>

        <!-- Mobile Menu -->
        {#if isMenuOpen}


            <div class="sm:hidden" id="mobile-menu">
                <div class="space-y-1 px-5 pt-2 pb-3 uppercase">
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                             class="h-4 w-4 text-cyan-800">
                            <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z"/>
                        </svg>
                        <a href="#"
                           class="block rounded-md px-3 py-2 text-xs font-medium text-black-300 hover:bg-indigo-100 hover:text-black">
                            Strona główna
                        </a>
                    </div>


                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                             class="size-4 text-cyan-800">
                            <path fill-rule="evenodd"
                                  d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z"
                                  clip-rule="evenodd"/>
                        </svg>

                        <a href="/co-warto-wiedziec"
                           class="block rounded-md px-3 py-2 text-xs font-medium text-black-300 hover:bg-indigo-100 hover:text-black">
                            Co warto wiedzieć
                        </a>
                    </div>

                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                             class="size-4 text-cyan-800">
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"/>
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"/>
                        </svg>

                        <a href="#contact"
                           class="block rounded-md px-3 py-2 text-xs font-medium text-black-300 hover:bg-indigo-100 hover:text-black">
                            Kontakt
                        </a>
                    </div>
                </div>
            </div>

        {/if}

    </div>
</nav>

<!-- Modal -->
<div
        class="fixed inset-0 z-50 transition-opacity duration-1000 ease-in-out"
        role="dialog"
        aria-modal="true"
        aria-hidden={!isModalOpen}
        class:bg-opacity-50={!isModalOpen}
        class:bg-opacity-0={isModalOpen}
        class:pointer-events-none={!isModalOpen}
        on:click={closeModal}
>
    <div
            class="fixed top-[10%] right-0 h-[80%]   bg-gradient-to-r from-teal-700 from-10% to-cyan-900 to-90% w-[90%]  rounded-lg shadow-lg p-6 transform transition-transform duration-700 ease-in-out w-[90%] sm:w-[50%] overflow-y-auto"
            class:translate-x-full={!isModalOpen}
            class:translate-x-0={isModalOpen}
            on:click|stopPropagation
    >
        <button class="absolute top-4 right-2 text-4xl text-white" aria-label="Close modal" on:click={closeModal}>
            &times;
        </button>
        <h2 class="text-lg font-bold mb-4 text-white">{selectedLanguage}</h2>
        <p class="text-white">{@html translations[selectedLanguage]}</p>
    </div>
</div>


<!-- Desktop Menu (Visible on larger screens) -->
<div class="hidden sm:block fixed top-0 left-0 w-full z-50">

    <div class="flex justify-center items-center space-x-10 uppercase mb-0 mt-0 bg-slate-950 py-4 text-white">


        <!-- Desktop Navigation Links -->
        <a href="/"
           class="text-sm font-semibold flex items-center space-x-1 hover:text-cyan-700  ">
            <!-- Icon before text -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
            </svg>

            <span class="">strona główna</span>
        </a>


        <a href="/co-warto-wiedziec"
           class="text-sm font-semibold flex items-center space-x-1 hover:text-cyan-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"/>
            </svg>


            <span>Co warto wiedzieć</span>
        </a>

        <a href="/#contact"
           class="text-sm font-semibold flex items-center space-x-1 hover:text-cyan-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"/>
            </svg>


            <span>Kontakt</span>
        </a>

        <div class=" sm:block sm:ml-auto flex items-center relative">
            <button
                    class="flex justify-between items-center px-4 py-2  text-sm font-bold text-white hover:bg-gray-50 rounded-md"
                    on:click={toggleDropdown}
            >
                <img src="pl.svg" alt="Polish Flag" class="w-6 h-6 mr-3"/>
                PL
            </button>

            {#if isDropdownOpen}
                <div class="absolute top-full right-0 mt-2 w-24  shadow-lg bg-white  ring-1 ring-black ring-opacity-5 z-50">


                    <div class="py-1">
                        <a href="/english"
                           class="flex items-center block px-4 py-2 text-sm text-black hover:bg-gray-100">
                            <img src="eng.svg" alt="English Flag" class="w-5 h-5 mr-2"/>
                            Eng
                        </a>
                        <a href="/french"
                           class="flex items-center block px-4 py-2 text-sm text-black hover:bg-gray-100">
                            <img src="fr.svg" alt="French Flag" class="w-5 h-5 mr-2"/>
                            Fr
                        </a>
                        <a href="/germany"
                           class="flex items-center block px-4 py-2 text-sm text-black hover:bg-gray-100">
                            <img src="ger.svg" alt="German Flag" class="w-5 h-5 mr-2"/>
                            Ger
                        </a>
                        <a href="/belarus"
                           class="flex items-center block px-4 py-2 text-sm text-black hover:bg-gray-100">
                            <img src="bel.svg" alt="Belarusian Flag" class="w-5 h-5 mr-2"/>
                            Bel
                        </a>
                        <a href="/ukrainian"
                           class="flex items-center block px-4 py-2 text-sm text-black hover:bg-gray-100">
                            <img src="ukr.svg" alt="Ukrainian Flag" class="w-5 h-5 mr-2"/>
                            Ukr
                        </a>
                    </div>

                </div>
            {/if}


        </div>
    </div>


</div>


<div class="flex-1 bg-gray-900 md:h-1/2 h-full">
</div>


<div class="w-full h-auto">


    <!-- Mobile View -->


    <div class="relative w-11/12 mx-auto h-[32rem] mt-3 bg-cover bg-left  rounded-lg md:hidden"
         style="background-image: url('notariusz.jpg'); background-position: -180px center ">
        <!-- Optional overlay for better contrast -->
        <div class="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <div class="absolute inset-0 flex justify-center items-center text-white">
            <div class="container mx-auto px-5 py-12 items-center flex flex-col">
                <div class="w-full animate-fade-in-down">
                    <h1 class="text-3xl mb-2 font-extrabold tracking-tight leading-tight text-white">
                        Kancelaria notarialna
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
                            <span>Skontaktuj się z nami</span>
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
                    Kancelaria notarialna
                </h1>
                <h1 class="text-5xl mb-4 font-bold tracking-tight leading-tight">
                    Joanna <span class="border-b-4 border-green-400 -mb-20"></span>Czernikiewicz
                </h1>
                <!-- Contact Info Section -->
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
                        <span>Skontaktuj się z nami</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="h-6 w-6 text-cyan-400">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                    </button>
                    <button
                            on:click={scrollToMap}
                            class="bg-transparent hover:bg-cyan-800 text-white font-semibold py-4 px-4 my-3 border border-teal-200 shadow-md hover:border-transparent rounded text-center flex items-center justify-center space-x-2 z-20">
                        <span>Jak dojechać?</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="h-6 w-6 text-cyan-400">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                    </button>
                    <button
                            on:click={goToMap}
                            class="bg-transparent hover:bg-cyan-800 text-white font-semibold py-4 px-4 my-3 border border-teal-200 shadow-md hover:border-transparent rounded text-center flex items-center justify-center space-x-2 z-20 ">
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

    <!-- Image Section: Polish Emblem -->
    <div class="flex justify-center items-center absolute inset-0 z-10 ">
        <img src="orzel.png" width="250px" alt="Polish Emblem"
             class="opacity-25 transform translate-x-48 translate-y-[-100px] w-42"/>
    </div>


    <!-- Right Section: Background Image -->
    <div class="flex-[2] relative bg-cover bg-no-repeat bg-[center_bottom]"
         style="background-image: url('notariusz.jpg');">
        <div class="absolute inset-0 bg-black opacity-40"></div>
        <p id="dynamicText"></p>
    </div>
</div>

<section
        class="text-gray-600 body-font flex bg-gray-900 relative md:text-base p-4 sm:h-auto sm:p-6 sm:bg-gray-900 bg-gradient-to-r from-teal-700 from-10% to-cyan-900 to-90% w-[90%] rounded-md mx-auto sm:w-[90%] md:w-[100%] lg:my-0 my-5 shadow-2xl shadow-teal-900 overflow-hidden">
    <div class="container mx-auto flex px-5 py-12 items-center justify-center flex-col lg:flex-row lg:justify-between">
        <!-- Text Content -->
        <div class="lg:w-2/3 w-full animate-fade-in-down">
            <h1 class="md:text-6xl text-3xl mb-2 font-extrabold tracking-tight leading-tight text-white md:text-white flex items-center lg:space-x-6">
                <span>Notariusz - Łódź</span>
                <!-- Arrow pointing left -->
                <svg class="w-6 h-6 ml-2 text-white lg:w-12 lg:h-12 lg:ml-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                </svg>
            </h1>

            <p class="mt-2 mb-1 md:leading-relaxed leading-normal tracking-tight text-white text-base lg:leading-10 lg:text-xl">
                Klientów z terenu miasta Łódź i okolicy poszukujących profesjonalnej obsługi notarialnej zachęcamy do
                skorzystania z pomocy naszej Kancelarii. Notariusz Joanna Czernikiewicz wraz z Zespołem pozostaje do
                Państwa dyspozycji, zapewniając najwyższą jakość usług, w tym fachowe doradztwo w kwestiach
                cywilno-prawnych i gospodarczych będących w kompetencji urzędu notarialnego. Wszystkich zainteresowanych
                zapraszamy do bliższego zapoznania się ze świadczonymi przez Kancelarię czynnościami notarialnymi. W
                razie pytań lub wątpliwości dotyczących zakresu kompetencji notariusza zachęcamy do kontaktu. Nasz
                Zespół odpowie na wszystkie pytania i umówi wizytę w Kancelarii w dogodnym dla Państwa terminie.
            </p>
        </div>

        <!-- Image Content -->
        <div class="hidden lg:block lg:w-1/3 lg:ml-20 shadow-lg">
            <img src="kancelaria.jpg" alt="Kancelaria Notarialna Joanna Czernikiewicz" class="rounded-lg shadow-lg">
        </div>
    </div>
</section>


<!-- Image Section: Polish Emblem (between the sections) -->
<div class="relative z-10">
    <div class="absolute inset-x-0 top-1/2 transform -translate-y-1/2 lg:top-[60%] lg:transform lg:-translate-y-[-30%] lg:translate-x-12 flex justify-center items-center z-0 sm:block">
        <img src="orzel.png" width="250px" alt="Polish Emblem" class="opacity-25"/>
    </div>
</div>


<section class="text-gray-600 body-font flex bg-gray-900 relative md:text-base p-4 sm:h-auto sm:p-6 sm:bg-gray-900
  bg-gradient-to-r from-cyan-900 from-10% to-teal-700 to-90% w-[90%] rounded-md mx-auto sm:w-[90%] md:w-[100%] lg:my-0 my-5 shadow-2xl shadow-teal-900 lg:shadow-none overflow-hidden">
    <div class="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
        <div class="lg:w-2/3 w-full animate-fade-in-down">
            <!-- Heading text with flex to align arrow next to it -->
            <div class="flex items-center space-x-3 lg:space-x-5"> <!-- flex and items-center for vertical alignment -->
                <h1 class="md:text-6xl text-3xl mb-2 font-extrabold tracking-tight leading-tight text-white md:text-white">
                    Doświadczenie
                </h1>

                <!-- Arrow pointing left with larger size on desktop -->
                <svg class="w-6 h-6 ml-2 text-white lg:w-12 lg:h-12 translate-y-[-3px]">
                    <!-- Larger arrow on desktop -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                </svg>
            </div>


            <!-- Paragraph text -->
            <p class="mt-2 mb-1 md:leading-relaxed leading-normal tracking-tight text-white text-base lg:leading-10 lg:text-xl">
                Bogate doświadczenie pozwala na rzetelne przygotowywanie aktów notarialnych oraz fachowe doradztwo
                prawne, co przekłada się na wysoki poziom obsługi klienta. Kancelaria Notarialna Notariusza Joanny
                Czernikiewicz kieruje swoje usługi do osób fizycznych oraz przedsiębiorców. Nasi Klienci mogą liczyć na
                indywidualne podejście, zaangażowanie oraz działanie w ich najlepszym interesie. Dopełniając czynności
                dbamy o to, by były one zgodne z obowiązującym prawem, a Klienci byli świadomi wszystkich
                przysługujących im praw i obowiązków z nich wynikających.
            </p>
        </div>
    </div>
</section>


<!-- <Horizontal /> -->


<!--CONTACT-->

<main id="contact"
      class="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-700 from-10% to-cyan-900 to-90%  relative">
    <div class="max-w-5xl mx-auto">
        <h1 class="text-3xl font-extrabold text-left md:text-6xl mb-8 text-white">Napisz do nas</h1>


        <Form/>
    </div>
</main>


<section class="p-6 w-full shadow-sm" id="map">
    <!-- <h2 class="lg:text-6xl font-bold text-center text-cyan-800 mb-6 text-3xl">Jesteśmy tutaj</h2> -->
    <div class="h-96 rounded-lg overflow-hidden shadow-md mt-7">
        <!-- svelte-ignore a11y_missing_attribute -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2469.225862326579!2d19.454999!3d51.765478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bcb2a89f9d1c7%3A0x6049035063f884f7!2sNotariusz%20Joanna%20Czernikiewicz%20-%20Kancelaria%20Notarialna!5e0!3m2!1sen!2spl!4v1733324927397!5m2!1sen!2spl"
                width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</section>


<Footer/>


<ScrollToTop/>


<style lang="css">
    /* Custom styles can go here (optional) */
</style>
  
  
  