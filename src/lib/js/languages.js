import pl from "$lib/locales/pl.json";
import en from "$lib/locales/en.json";
import fr from "$lib/locales/fr.json";
import de from "$lib/locales/de.json";
import bel from "$lib/locales/bel.json";
import uk from "$lib/locales/uk.json";

export const languagesList = [
    { id: 0, title: "PL", flag: "/pl.svg", code: "pl", langFile: pl },
    { id: 1, title: "EN", flag: "/eng.svg", code: "en", langFile: en },
    { id: 2, title: "FR", flag: "/fr.svg", code: "fr", langFile: fr },
    { id: 3, title: "DE", flag: "/ger.svg", code: "de", langFile: de },
    { id: 4, title: "BEL", flag: "/bel.svg", code: "bel", langFile: bel },
    { id: 5, title: "UK", flag: "/ukr.svg", code: "uk", langFile: uk },
];

export const getAcceptedLang = async (headers) => {
    const acceptLanguage = headers.get("accept-language") || "en";
    return acceptLanguage.split(",")[0].split("-")[0];
}

export const getLang = (langCode) => {
    return languagesList.find((item) => item.code === langCode)
}

export const changeLang = (currentPage, langCode) => {
    window.location.href = currentPage.url.pathname.replace(currentPage.url.pathname.split("/")[1], langCode);
}