import { error } from '@sveltejs/kit';

let blogPosts = [
  {
    title: 'Ugoda o Alimenty w Formie Aktu Notarialnego: Przewodnik',
    date: 'December 9, 2024',
    content: `<b>W kontekście praw rodzicielskich i obowiązków finansowych, ugoda o alimenty odgrywa kluczową rolę w zapewnieniu stabilności finansowej dziecka. Często rodzice decydują się na zawarcie takiej ugody w formie aktu notarialnego, co niesie ze sobą wiele korzyści prawnych. W tym artykule przedstawimy, dlaczego warto rozważyć tę formę formalizacji ugody oraz jak przebiega cały proces.</b></br></br>
<h3>Dlaczego Warto Zawrzeć Ugodę o Alimenty u Notariusza?</h3>
<ol>
<li> Moc Prawna: Akt notarialny ma moc dokumentu urzędowego, co oznacza, że w przypadku niewywiązywania się z obowiązków alimentacyjnych, można go egzekwować bezpośrednio poprzez komornika.</li>
<li>Bezpieczeństwo i Pewność: Zawierając ugodę w formie aktu notarialnego, obie strony mają pewność, że dokument jest sporządzony zgodnie z obowiązującym prawem, co minimalizuje ryzyko późniejszych sporów.</li>
<li>Elastyczność: Notariusz może pomóc w dopasowaniu warunków ugody do indywidualnych potrzeb i sytuacji rodzinnej, co pozwala na uwzględnienie wszelkich specyficznych ustaleń między stronami.</li>
</ol>
<h3>Jak Przebiega Proces Sporządzenia Aktu Notarialnego?</h3>
<ol>
<li>Konsultacja z Notariuszem: Pierwszym krokiem jest umówienie się na spotkanie z notariuszem. Warto przygotować wszystkie niezbędne dokumenty oraz przemyśleć warunki ugody, które chciałoby się uwzględnić.</li>
<li>Przygotowanie Dokumentów: Notariusz pomoże w przygotowaniu i sprawdzeniu dokumentów, takich jak dowody tożsamości, akty urodzenia dzieci czy wcześniejsze decyzje sądowe dotyczące alimentów.</li>
<li>Sporządzenie Aktu: Po uzgodnieniu wszystkich szczegółów, notariusz sporządzi akt notarialny. Obie strony muszą go podpisać, aby dokument nabrał mocy prawnej.</li>
<li> Rejestracja i Przechowywanie: Akt notarialny zostaje zarejestrowany i przechowywany w kancelarii notarialnej, co gwarantuje jego bezpieczeństwo i dostępność w razie potrzeby.</li>
</ol>

<h3>Podsumowanie</h3>

Ugoda o alimenty w formie aktu notarialnego to rozwiązanie, które może zapewnić stabilność i bezpieczeństwo zarówno dla dziecka, jak i dla rodziców. Dzięki mocy prawnej aktu notarialnego, obie strony zyskują pewność, że ustalone warunki będą respektowane. Jeśli rozważasz takie rozwiązanie, nasza kancelaria notarialna jest gotowa pomóc Ci na każdym etapie procesu. Skontaktuj się z nami, aby umówić konsultację i dowiedzieć się więcej o korzyściach płynących z zawarcia ugody alimentacyjnej w formie aktu notarialnego.`, // Truncated for brevity
    slug: 'blog-post-1',
  },
  {
    title: 'Opłaty',
    date: 'December 8, 2024',
    content: `Za dokonanie czynności notarialnych notariusz pobiera wynagrodzenie w wysokości zgodnej z rozporządzeniem Ministra Sprawiedliwości z dnia 28 czerwca 2004 roku w sprawie maksymalnych stawek taksy notarialnej (t.j. Dz. U. z 2020 roku, poz.1473), powiększone o należny podatek od towarów i usług (VAT). <br><br>

Notariusz jest w określonych przypadkach także płatnikiem podatku od czynności cywilnoprawnych oraz podatku od spadków i darowizn. Ponadto, w przypadku zamieszczenia w akcie notarialnym wniosku o dokonanie wpisów w księdze wieczystej, notariusz pobiera od wnioskodawcy stosowną opłatę sądową. Powyższe opłaty notariusz w całości odprowadza na rachunki bankowe właściwych instytucji państwowych. <br><br>

W celu ustalenia wysokości wszystkich opłat za daną czynność notarialną prosimy o kontakt osobisty, telefoniczny lub za pośrednictwem poczty elektronicznej.`,
    slug: 'blog-post-2',
  },
  {
    title: 'Title of Blog Post 3',
    date: 'December 7, 2024',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...',
    slug: 'blog-post-3',
  },
  // Add additional 12 blogs
  { title: 'Blog Post 4', date: 'December 6, 2024', content: 'Content of blog post 4...', slug: 'blog-post-4' },
  { title: 'Blog Post 5', date: 'December 5, 2024', content: 'Content of blog post 5...', slug: 'blog-post-5' },
  { title: 'Blog Post 6', date: 'December 4, 2024', content: 'Content of blog post 6...', slug: 'blog-post-6' },
  { title: 'Blog Post 7', date: 'December 3, 2024', content: 'Content of blog post 7...', slug: 'blog-post-7' },
  { title: 'Blog Post 8', date: 'December 2, 2024', content: 'Content of blog post 8...', slug: 'blog-post-8' },
  { title: 'Blog Post 9', date: 'December 1, 2024', content: 'Content of blog post 9...', slug: 'blog-post-9' },
  { title: 'Blog Post 10', date: 'November 30, 2024', content: 'Content of blog post 10...', slug: 'blog-post-10' },
  { title: 'Blog Post 11', date: 'November 29, 2024', content: 'Content of blog post 11...', slug: 'blog-post-11' },
  { title: 'Blog Post 12', date: 'November 28, 2024', content: 'Content of blog post 12...', slug: 'blog-post-12' },
];

export async function load({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    throw error(404, 'Post not found');
  }

  return {
    post
  };
}
