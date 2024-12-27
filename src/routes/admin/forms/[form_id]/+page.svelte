<script>
    import {page} from "$app/stores";
    import {goto} from "$app/navigation";

    export let data;

    const form = data.form
</script>

<div>
    <span>ID: {form.form_id}</span><br>
    <span>Full name: {form.form_id}</span><br>
    <span>Email: {form.email}</span><br><br>
    <span>Message: {form.message}</span>
</div>