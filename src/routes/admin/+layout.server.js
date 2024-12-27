import api from "$lib/js/api.js";
import {jwtDecode} from "jwt-decode";
import {error} from "@sveltejs/kit";

export async function load({ cookies }) {
    const token = cookies.get("token");

    if (!token) {
        return {}
    }

    try {
        const decodedToken = jwtDecode(token);
        const response = await api.get(`/v1/admins/get/${decodedToken.admin_id}/`);
        const admin = response.data.admin;

        return { admin }
    } catch {
        return error(404, "Invalid token")
    }
}