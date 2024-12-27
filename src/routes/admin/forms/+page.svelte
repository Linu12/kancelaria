<script>
    import {page} from "$app/stores";
    import {goto} from "$app/navigation";
    import {deleteForm} from "$lib/js/forms.js";

    export let data;

    console.log(data)

    let forms = data.forms.forms ? data.forms.forms : [];

    const delForm = async (id) => {
        const response = await deleteForm(id)
        forms = response.forms
    }
</script>

<div class="overflow-x-auto w-max flex flex-col gap-5">
    <table class="min-w-full border-collapse border border-gray-200 rounded-lg shadow-md">
        <thead>
            <tr class="bg-gray-100">
                <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 border-b">#</th>
                <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 border-b">Full name</th>
                <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 border-b">Email</th>
                <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 border-b">Controls</th>
            </tr>
        </thead>
        <tbody>
            {#each forms as form }
                <tr class="hover:bg-gray-50">
                    <td class="px-6 py-4 text-sm text-gray-700 border-b">{form.form_id}</td>
                    <td class="px-6 py-4 text-sm text-gray-700 border-b">{form.fullname}</td>
                    <td class="px-6 py-4 text-sm text-gray-700 border-b">{form.email}</td>
                    <td class="px-6 py-4 text-sm text-gray-700 border-b">
                        <button on:click={() => {goto(`/admin/forms/${form.form_id}`)}} class="px-4 py-2 text-white bg-black rounded hover:bg-blue-600">
                            Go to form
                        </button>
                        <button on:click={() => {delForm(form.form_id)}} class="px-4 py-2 text-white bg-black rounded hover:bg-blue-600">
                            Delete
                        </button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>