<h1 align="center">
  <img alt="Logo" src="https://fpass.com.br/images/logo-fpass.svg" width="200px">
</h1>

<h3 align="center">
  Frontend Challenge FPass
</h3>

<p align="center">WebApp consumindo API Marvel.</p>

<p align="center">
  <a href="https://www.linkedin.com/in/juarezsilva/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-juarez%20silva-%23FF9000">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jals990/frontend-fpass?color=%23FF9000">

  <a href="https://github.com/jals990/frontend-fpass/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jals990/frontend-fpass?color=%23FF9000">
  </a>

  <a href="https://github.com/jals990/frontend-fpass/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/jals990/frontend-fpass?color=%23FF9000">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/jals990/frontend-fpass?color=%23FF9000">
</p>

## 🧑🏽‍💻 Sobre o projeto

Foi desenvolvido um micro portal, onepage onde visualização da descrição de cada personagem é apresentada em um modal.

A listagem dos personagens fica na página inicial em uma lista, a pesquisa foi feita utilizando um filtro pelo array completo dos personagens (lista principal).

A API da Marvel não retonarva pedaçõs de nome pequisado, com o filtro foi possível realizar tal pesquisa, embora torne um pouco lento o coarregamento inicial, foi a alternativa encontrada para contornar a deficiência da API.

Detalhes do desafio, clique aqui: [Desafio](https://github.com/Holding-Fpass/teste-frontend-fpass/blob/main/README.md)<br />

## 🚀 Tecnologias

Tecnologias utilizadas na construção desta API

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [Sequelize](https://sequelize.org)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Let's Go

**Para rodar em sua máquina localmente**

```bash
# Instale as dependências
$ git clone https://github.com/jals990/frontend-fpass.git && cd rontend-fpass
```

```bash
# Ronomeie o arquivo .env.example para apenas .env
# Preencha as variáveis 
REACT_APP_MARVEL_URL=
REACT_APP_TS=
REACT_APP_PUBLIC_KEY_MARVEL=
REACT_APP_HASH=
```

A variável REACT_APP_HASH é constituída pelo conjunto de variáveis (ts+privateKey+publicKey). Sendo o TS = 1 e as demais são credenciais fornecidas pela própria Marvel. Realize o cadastro para obter suas credenciais caso não possua: [Desafio]([Marvel API](https://developer.marvel.com/))<br />

Utilize esse link para gerar seu HASH quando possuir as credenciais seguindo o exemplo acima (ts+privateKey+publicKey): [Gerar MD5](https://www.md5hashgenerator.com/))<br />

**Próximos passos**

```bash
# Instale as dependências
$ yarn

# Para iniciar a aplicação execute o comando abaixo
$ yarn start

# 🚀 Server no ar!

Made with 🚀 by Juarez Silva ✌🏾
```
