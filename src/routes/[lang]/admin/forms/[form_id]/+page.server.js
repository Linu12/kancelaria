import {getForm} from "$lib/js/forms.js";

export async function load({params}) {
    const form = await getForm(params.form_id);
    return {form}
}