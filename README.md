# Consumo de API

## API

para rodar a api, navegue até a pasta "api" e rode npm start

Uma API (Application Programming Interface) é uma interface que permite que sistemas diferentes se comuniquem. Em termos de desenvolvimento de software, uma API permite que aplicações sejam integradas permitindo que a aplicação A obtenha dados da aplicação B.

Por exemplo, a API do Google Maps permite que desenvolvedores integrem mapas e informações geográficas em seus aplicativos.

## Callback

Criando uma callback

## Promise

Promises são objetos que representam o resultado eventual de uma operação assíncrona. Em outras palavras, uma Promise representa um valor que pode estar disponível agora, no futuro ou nunca.

Exemplo de código que usa Promises:

```js
const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: "Dados obtidos com sucesso!" });
    }, 1000);
  });
};

getData()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
```

## Fetch

O método fetch é uma maneira fácil de realizar solicitações HTTP em JavaScript. Ele retorna uma Promise que pode ser processada usando then e catch.

Exemplo de uso do Fetch:

```
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

## HTTP

HTTP (Hypertext Transfer Protocol) é um protocolo de comunicação que permite a transferência de dados na internet. Quando fazemos uma solicitação HTTP para uma API, estamos enviando uma requisição ao servidor para obter informações.

- GET (buscar)

- POST (criar)

- PUT (alterar uma unica informação)

- PATCH (alterar várias informações)

- DELETE (dele tar)

## Then/Catch

then e catch são métodos que permitem processar Promises em JavaScript. O método then é chamado quando a Promise é resolvida com sucesso e o método catch é chamado quando a Promise é rejeitada.

Exemplo de uso de then e catch:

```js
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

### Métodos

Os métodos HTTP são os verbos que indicam a ação a ser realizada com a API. Os métodos mais comuns são: GET, POST, PUT, PATCH e DELETE.

Exemplo de requisição GET:

### Status Codes

Os códigos de status HTTP são números de três dígitos que indicam o resultado da requisição à API. Alguns dos códigos mais comuns incluem 200 OK, 201 Created, 404 Not Found, 500 Internal Server Error, entre outros.

## JSON

JSON é uma formatação de dados que é amplamente utilizada na Web para troca de informações entre cliente e servidor. É fácil de ser lido e escrito tanto por humanos quanto por computadores.

Exemplo de resposta JSON:

```json
{
  "data": [
    {
      "id": 1,
      "name": "John Doe"
    },
    {
      "id": 2,
      "name": "Jane Doe"
    }
  ]
}
```

## Clientes HTTP

- Insomnia
- Postman
- Thunder Client

## Async/Await

Async/Await é uma forma de escrever código assíncrono de forma síncrona. É uma forma mais simples e legível de lidar com Promise no JavaScript.

Exemplo de uso de Async/Await:

```js
async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

## Função assincrona auto executável

## Boas práticas

### Segurança

### Trataivas de erros

### Cache
