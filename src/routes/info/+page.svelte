<script>
    import ScrollToTop from '../../components/+scrollToTop.svelte';
    import DesktopMenu from '../../components/+desktop-menu.svelte';
    import {page} from "$app/stores";
    import {goto} from "$app/navigation";

    const changePage = async (pageNum) => {
        if (pageNum >= 1 && pageNum <= $page.data.articlesResponse.page.total) {
            $page.url.searchParams.set('page', pageNum);
            await goto($page.url, {invalidateAll: true});
        }
    }

    let isMenuOpen = false;
    let isDropdownOpen = false;
    let isModalOpen = false;

    let selectedLanguage = null;

    const translations = {
        English: `
     <p>Documents Required for Foreigners Visiting a Notary.</p>
    <p>When a foreigner visits a notary, it is important to prepare the necessary documents that may be required depending on the nature of the notarial act. Below is a list of key documents that should be brought along:</p><br>
    <ul>
      <li>1. Identity Document – A passport or another recognized document that confirms identity, accepted in Poland.</li><br>
      <li>2. PESEL Number – A PESEL number is required, and if the person does not have a PESEL number, a certificate of its absence must be provided.</li><br>
      <li>3. Documents Related to the Specific Notarial Act – These may include property deeds, contracts, powers of attorney, certificates, or other legal documents, depending on the nature of the matter.</li><br>
      <li>4 .Certified Translations – If any documents are written in a language other than Polish, certified translations into Polish may be required.</li><br>
    </ul>
    <p>It is advisable to contact the notary’s office in advance to confirm which specific documents will be needed for the particular situation, ensuring a smooth execution of notarial procedures.</p>
  `,

        French: "Documents requis pour les étrangers lors d’une visite chez un notaire.Lorsque qu’un étranger se rend chez un notaire, il est important de préparer les documents nécessaires qui peuvent être requis en fonction de la nature de l’acte notarial. Ci-dessous, une liste des principaux documents à apporter :1. Document d’identité – Un passeport ou un autre document reconnu confirmant l’identité, accepté en Pologne.2. Numéro PESEL – Un numéro PESEL est requis, et si la personne n’en possède pas, un certificat de son absence doit être fourni.3. Documents liés à l’acte notarial spécifique – Cela peut inclure des actes de propriété, des contrats, des procurations, des certificats ou d’autres documents juridiques, selon la nature de la demande.4. Traductions certifiées – Si des documents sont rédigés dans une langue autre que le polonais, des traductions certifiées en polonais peuvent être nécessaires.Il est recommandé de contacter le bureau notarial à l’avance pour confirmer quels documents spécifiques seront nécessaires dans la situation particulière, afin d’assurer le bon déroulement des procédures.",
        German: "Dokumente, die Ausländer bei einem Notarbesuch benötigen. Wenn ein Ausländer einen Notar aufsucht, ist es wichtig, die erforderlichen Dokumente vorzubereiten, die je nach Art der notariellen Handlung erforderlich sein können. Im Folgenden finden Sie eine Liste der wichtigsten Dokumente, die mitgebracht werden sollten: 1. Identitätsdokument – Ein Reisepass oder ein anderes anerkanntes Dokument, das die Identität bestätigt und in Polen akzeptiert wird. 2. PESEL-Nummer – Eine PESEL-Nummer ist erforderlich. Wenn die Person keine PESEL-Nummer hat, muss eine Bescheinigung über deren Fehlen vorgelegt werden. 3. Dokumente im Zusammenhang mit der spezifischen notariellen Handlung – Dazu können Eigentumsurkunden, Verträge, Vollmachten, Bescheinigungen oder andere rechtliche Dokumente gehören, abhängig von der Art des Anliegens. 4. Beglaubigte Übersetzungen – Wenn Dokumente in einer anderen Sprache als Polnisch verfasst sind, können beglaubigte Übersetzungen ins Polnische erforderlich sein. Es wird empfohlen, sich im Voraus mit dem Notariat in Verbindung zu setzen, um zu bestätigen, welche spezifischen Dokumente für die jeweilige Situation benötigt werden, um einen reibungslosen Ablauf der notariellen Verfahren zu gewährleisten.",

        Belarus: "Дакументы, неабходныя для замежнікаў пры наведванні натарыуса. Калі замежнік наведвае натарыуса, важна падрыхтаваць неабходныя дакументы, якія могуць спатрэбіцца ў залежнасці ад характару натарыяльнага дзеяння. Ніжэй прыведзены спіс асноўных дакументаў, якія варта мець пры сабе: 1. Дакумент, які пацвярджае асобу – Паспорт або іншы прызнаны дакумент, які пацвярджае асобу і прымаецца ў Польшчы 2. Нумар PESEL – Патрабуецца нумар PESEL, і калі ў асобы яго няма, трэба прадаставіць сертыфікат аб яго адсутнасці. 3. Дакументы, звязаныя з канкрэтным натарыяльным дзеяннем – Гэта могуць быць праваўстаноўчыя дакументы, дагаворы, даверанасці, сертыфікаты або іншыя юрыдычныя дакументы, у залежнасці ад характару справы. 4. Завераныя пераклады – Калі якія-небудзь дакументы складзены на мове, іншай за польскую, могуць спатрэбіцца завераныя пераклады на польскую мову. Рэкамендуецца загадзя звязацца з натарыяльнай канторай, каб пацвердзіць, якія дакументы канкрэтна спатрэбяцца для дадзенай сітуацыі, каб забяспечыць бесперашкоднае ажыццяўленне натарыяльных працэдур",

        Ukrainian: "Документи, необхідні іноземцеві під час візиту до нотаріуса. Коли іноземець звертається до нотаріуса, важливо підготувати відповідні документи, які можуть бути необхідні залежно від характеру нотаріальної дії. Нижче наведено список основних документів, які варто мати при собі: 1. Документ, що засвідчує особу – Паспорт або інший визнаний документ, що підтверджує особу, який приймається в Польщі. 2. Номер PESEL – Потрібен номер PESEL, а якщо особа не має номера PESEL, необхідно надати свідоцтво про його відсутність. 3. Документи, пов’язані з конкретною нотаріальною дією – Це можуть бути акти власності, угоди, довіреності, довідки чи інші юридичні документи залежно від характеру справи. 4. Присяжні переклади – Якщо будь-які документи складені іншою мовою, можуть знадобитися присяжні переклади на польську мову. Рекомендується заздалегідь зв’язатися з нотаріальною конторою, щоб упевнитися, які саме документи будуть потрібні в конкретній ситуації, що дозволить оперативно провести."
    };

    const toggleMenu = () => (isMenuOpen = !isMenuOpen);
    const toggleDropdown = () => (isDropdownOpen = !isDropdownOpen);
    const openModal = (language) => {
        selectedLanguage = language;
        isModalOpen = true;
    };
    const closeModal = () => (isModalOpen = false);
</script>


<nav class="bg-white-800 ">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-10 mt-0 ">
        <div class="relative flex h-8 lg:h-0 items-center justify-between ">
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
                    <img src="pl.svg" alt="Polish Flag" class="w-6 h-6"/>
                </button>

                {#if isDropdownOpen}
                    <div
                            class="absolute top-full right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 sm:hidden"
                    >
                        <div class="py-1">
                            <a
                                    href="/"
                                    class="flex items-center block px-4 py-2 text-sm text-cyan-900 hover:bg-gray-100"
                                    on:click={() => openModal('English')}

                            >
                                <img src="gb.svg" alt="English Flag" class="w-5 h-5 mr-2"/>
                                Eng
                            </a>
                            <a
                                    href="/"
                                    class="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    on:click={() => openModal('French')}
                            >
                                <img src="fr.svg" alt="French Flag" class="w-5 h-5 mr-2"/>
                                Fr
                            </a>
                            <a
                                    href="/"
                                    class="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    on:click={() => openModal('German')}
                            >
                                <img src="de.svg" alt="German Flag" class="w-5 h-5 mr-2"/>
                                Ger
                            </a>

                            <a href="/"
                               class="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <img src="by.svg" alt="Belarusian Flag" class="w-5 h-5 mr-2"
                                     aria-hidden="true"
                                     on:click={() => openModal('Belarus')}/>
                                Bel
                            </a>

                            <a href="/"
                               class="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <img src="ua.svg" alt="Belarusian Flag" class="w-5 h-5 mr-2"
                                     aria-hidden="true"
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
                        <a href="/"
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

                        <a href="/info"
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

                        <a href="/#contact"
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
<div class="fixed inset-0 z-50 transition-opacity duration-2000 ease-in-out"
     role="dialog"
     aria-modal="true"
     aria-hidden={!isModalOpen}
     class:bg-opacity-50={!isModalOpen}
     class:bg-opacity-0={isModalOpen}
     class:pointer-events-none={!isModalOpen}
     on:click={closeModal}
>
    <div aria-hidden=true
         class="fixed top-[10%] right-0 h-[80%] bg-cyan-600 rounded-lg shadow-lg p-6 transform transition-transform duration-2000 ease-in-out w-[90%] sm:w-[50%] overflow-y-auto"
         class:translate-x-full={!isModalOpen}
         class:translate-x-0={isModalOpen}
         on:click|stopPropagation
    >
        <button class="absolute top-4 right-2 text-4xl text-white" aria-label="Close modal" on:click={closeModal}>
            &times;
        </button>
        <h2 class="text-lg font-bold mb-4">{selectedLanguage}</h2>
        <p class="text-white">{@html translations[selectedLanguage]}</p>
    </div>
</div>

<DesktopMenu/>

<section class="py-12 bg-gray-100">
    <div class="container mx-auto px-5">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each $page.data.articlesResponse.articles as article}
                <div class="bg-cyan-500 lg:bg-white shadow-md rounded-lg overflow-hidden">
                    <div class="p-6">
                        <h2 class="text-xl font-semibold text-white bg-gradient-to-r from-cyan-700 from-10% to-cyan-900 to-90%  p-4 rounded shadow-xl shadow-cyan-700 lg:shadow-sm">{article.title["pl"]}</h2>
                        <!-- <p class="text-sm text-gray-500">{date}</p> -->
                        <p class="mt-2 text-gray-700">{article.content["pl"].substring(0, 150)}...</p>
                        <a href="/info/articles/{article.url}"
                           class="text-cyan-700 hover:text-cyan-500 mt-4 inline-block text-base">Czytaj więcej</a>
                    </div>
                </div>
            {/each}
        </div>

        <div class="mt-5 flex gap-1">
            {#each Array($page.data.articlesResponse.page.total) as _, index (index)}
                <button class="flex items-center justify-center size-10 {$page.data.articlesResponse.page.current === index + 1 ? 'bg-red-600' : 'bg-gray'}"
                        on:click={() => changePage(index + 1)}
                        disabled={$page.data.articlesResponse.page.current === index + 1}>{index + 1}
                </button>
            {/each}
        </div>

        <!-- Pagination Controls -->
        <!--        <div class="flex flex-col sm:flex-row justify-between items-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">-->
        <!--            <button-->
        <!--                    class="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-cyan-700 text-white rounded hover:bg-cyan-500 disabled:bg-gray-300"-->
        <!--                    on:click={prevPage}-->
        <!--                    disabled={currentPage === 1}>-->
        <!--                poprzednie wpisy-->
        <!--            </button>-->
        <!--            <p class="text-sm sm:text-base">Strona {currentPage} z {Math.ceil(blogPosts.length / itemsPerPage)}</p>-->
        <!--            <button-->
        <!--                    class="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-cyan-700 text-white rounded hover:bg-cyan-500 disabled:bg-gray-300"-->
        <!--                    on:click={nextPage}-->
        <!--                    disabled={currentPage === Math.ceil(blogPosts.length / itemsPerPage)}>-->
        <!--                następne wpisy-->
        <!--            </button>-->
        <!--        </div>-->

    </div>
</section>
<ScrollToTop/>
