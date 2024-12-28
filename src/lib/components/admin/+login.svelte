<script>
    import api from "$lib/js/api.js";
    import Cookies from 'js-cookie';
    import {goto} from "$app/navigation";

    const adminCredentials = {
        username_or_email: "",
        password: ""
    };

    const adminLogin = async (event) => {
        try {
            const response = await api.post("/v1/admins/login/", adminCredentials);
            Cookies.set("token", response.data.token, { expires: 10 });
            await goto("/admin", {invalidateAll: true})
        } catch (error) {
            console.error(error);
        }
    };
</script>

<div class="w-full h-screen">
    <form class="flex flex-col justify-center items-center h-full" on:submit|preventDefault={adminLogin}>
        <h1>Login to Admin Panel</h1>
        <div class="flex flex-col gap-2">
            <div>
                <input class="bg-gray placeholder-red-600" type="text" name="admin_username_or_email" id="admin_username_or_email" placeholder="Username or Email" bind:value={adminCredentials.username_or_email}>
            </div>
            <div>
                <input class="bg-gray placeholder-red-600" type="password" name="admin_password" id="admin_password" placeholder="Password" bind:value={adminCredentials.password}>
            </div>
        </div>
        <button class="bg-red-600" type="submit">Login</button>
    </form>
</div>