import {getForms} from "$lib/js/forms.js";

export async function load({cookies}) {
    const forms = await getForms();
    return {forms}
}