import { api_url } from "./utils/constants.js";

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch(`${api_url}/authentication`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        strategy: "local",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Falha na autenticação");
        }
        return response.json();
      })
      .then((data) => {
        // Verificando se os tokens foram recebidos
        if (data.accessToken && data.refreshToken) {
          // Salvando os tokens no localStorage
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("refreshToken", data.refreshToken);

          // Redirecionando para a página 'home'
          window.location.href = "/home"; // Certifique-se de ter o arquivo home.html na pasta pública
        } else {
          throw new Error("Tokens não recebidos");
        }
      })
      .catch((error) => {
        console.error("Erro:", error);
        alert("Login falhou: " + error.message); // Exibe um alerta em caso de erro
      });
  });
