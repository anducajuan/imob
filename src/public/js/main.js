export function runMainRoutine(){
    const logoutButton = document.getElementById("logout");
    logoutButton.addEventListener("click", () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
})
}



