<script>
    import ScrollToTop from '$lib/components/+scrollToTop.svelte';
    import DesktopMenu from '$lib/components/+desktop-menu.svelte';
    import {page} from "$app/stores";
    import {goto} from "$app/navigation";
    import Navigation from '$lib/components/+navigation.svelte';
    import Footer from '$lib/components/+footer.svelte';

    export let data;

    const lang = data.lang;
    console.log(lang)

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

<Navigation lang={lang}/>

<section class="py-12 bg-gray-100">
    <div class="container mx-auto px-5">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each $page.data.articlesResponse.articles as article}
                <div class="bg-cyan-500 lg:bg-white shadow-md rounded-lg overflow-hidden">
                    <div class="p-6">
                        <h2 class="text-xl font-semibold text-white bg-gradient-to-r from-cyan-700 from-10% to-cyan-900 to-90%  p-4 rounded shadow-xl shadow-cyan-700 lg:shadow-sm">{article.title[lang.code]}</h2>
                        <!-- <p class="text-sm text-gray-500">{date}</p> -->
                        <p class="mt-2 text-gray-700">{article.content[lang.code].substring(0, 150)}...</p>
                        <a href="/{lang.code}/info/articles/{article.url}"
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

<Footer lang={lang}/>
<ScrollToTop/>
