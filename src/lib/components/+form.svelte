<script>
    import api from "$lib/js/api.js";

    export let lang;

    const contactForm = {
        fullname: "",
        email: "",
        message: "",
        metadata: {
            ip_address: "-",
            language: "-",
            location: "-"
        }
    }

    const submitForm = async (event) => {
        try {
            await api.post("/v1/forms/create/", contactForm)
            event.target.reset()
        } catch (error) {
            console.error(error)
        }
    }
</script>

<div class="lg:w-full mx-auto p-6  bg-gradient-to-r from-teal-700 from-10% to-cyan-900 to-90% rounded-lg  lg:rounded-none shadow-2xl shadow-teal-900 lg:mb-5 ">


    <form class="space-y-4  rounded " on:submit|preventDefault={submitForm}>
        <div>
            <label for="name" class="block text-sm font-medium text-white">{lang?.langFile?.main?.contact_form?.inputs?.fullname}</label>
            <input
                    id="name"
                    type="text"

                    class="mt-2 p-2 w-full border border-cyan-600 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Imię i nazwisko"
                    bind:value={contactForm.fullname}
                    required
            />
        </div>

        <!-- Email Field -->
        <div>
            <label for="email" class="block text-sm font-medium text-white">Email</label>
            <input
                    id="email"
                    type="email"
                    class="mt-2 p-2 w-full border border-cyan-600 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Email"
                    bind:value={contactForm.email}
                    required
            />
        </div>

        <!-- Message Field -->
        <div>
            <label for="message" class="block text-sm font-medium text-white">{lang?.langFile?.main?.contact_form?.inputs?.message}</label>
            <textarea
                    id="message"
                    class="mt-2 p-2 w-full border border-cyan-600 rounded-md shadow-sm focus:ring-teal-500 focus:border-cyan-500"
                    placeholder="Twoja wiadomość"
                    bind:value={contactForm.message}
                    required
            ></textarea>
        </div>


        <!-- Submit Button -->
        <div>
            <button
                    type="submit"
                    class="w-full bg-transparent border border-cyan-600 text-white p-2 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
            >
                {lang?.langFile?.main?.contact_form?.send_message_btn}
            </button>
        </div>
    </form>
</div>