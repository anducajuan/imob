import { api_url } from "./utils/constants.js";
import { protectRoute, isAuthenticated } from "./protectRoutes.js";

protectRoute();

logoutButton = document.getElementById("logout");
logoutButton.addEventListener("click", () => {
    localStorage.setItem("accessToken", null);
    localStorage.setItem("refreshToken", null);
    window.location.href = "/login";
})



