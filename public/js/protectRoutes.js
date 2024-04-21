import { postData } from "./utils/requestFunctions.js";

// Função para checar se o usuário está autenticado
export async function isAuthenticated() {
  let refreshToken = localStorage.getItem("refreshToken");
  if (refreshToken) {
    let newAccessData = await postData("/authentication", {
      refreshToken: refreshToken,
      strategy: "jwt",
    });
    if (newAccessData.accessToken && newAccessData.refreshToken) {
      // Salvando os tokens no localStorage
      console.log("Salvando novos Dados")
      localStorage.setItem("accessToken", newAccessData.accessToken);
      localStorage.setItem("refreshToken", newAccessData.refreshToken);
      return true;
    }
  }
  return false;
}

// Função para proteger as rotas
export async function protectRoute() {
  if (!await isAuthenticated()) {
    window.location.href = "/login"; // Redireciona para a página de login
    console.log("Não Autenticado!")
  }
}
