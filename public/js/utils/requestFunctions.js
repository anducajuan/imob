import { api_url } from "./constants.js";
/**
 * Função genérica para fazer requisições HTTP.
 * @param {string} url URL da requisição
 * @param {Object} config Configurações adicionais para a requisição
 * @returns {Promise} Promise que resolve com a resposta da API
 */
export function makeRequest(path, config) {
    return fetch(`${api_url}${path}`, config)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Aqui presumimos que a resposta é JSON
        })
        .catch(error => {
            console.error('Error making request:', error);
            throw error;
        });
}

// Exemplo de uso para GET
export function getData(path) {
    return makeRequest(`${path}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

// Exemplo de uso para POST
export function postData(path, data) {
    return makeRequest(`${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
}
