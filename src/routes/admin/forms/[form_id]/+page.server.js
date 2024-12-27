import {getForm} from "$lib/js/forms.js";

export async function load({params}) {
    console.log(params.form_id)
    const form = await getForm(params.form_id);
    return {form}
}