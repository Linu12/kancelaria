import {getAcceptedLang, getLang, languagesList} from "$lib/js/languages.js";

export const handle = async ({event, resolve}) => {
    const userLanguage = await getAcceptedLang(event.request.headers)
    const langFromUrl = event.url.pathname.split("/")[1];
    const languageCodes = languagesList.map(lang => lang.code);

    if (!langFromUrl || !languageCodes.includes(langFromUrl)) {
        const redirectLang = languageCodes.includes(userLanguage) ? userLanguage : languageCodes[0];
        return Response.redirect(new URL(`/${redirectLang}${event.url.pathname}`, event.url.origin), 302);
    }

    event.locals.lang = getLang(langFromUrl)

    return resolve(event, {
        transformPageChunk: ({html}) => html.replace("%lang%", userLanguage)
    });
};
