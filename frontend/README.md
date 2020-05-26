<p align="center">
  <img src="./src/assets/logo.svg" />
</p>

# Ilê - 2020
### BAPEMG / Assistência Social

#### Quem somos

Somos o BAPEMG a junção da diversidade dos estados Bahia, Pernambuco e Minas Gerais, os membros são: Clésio Leonardo, Elisângela França, Mariany Queiroz, Marília Gabriele e Olívia Resende.

#### Desenvolvedoras :octocat:

[![Ile Backer](https://avatars1.githubusercontent.com/u/30198542?s=120&v=4)](https://github.com/gabrielesuzart)
[![Ile Backer](https://avatars1.githubusercontent.com/u/60545426?s=120&v=4)](https://github.com/oliviaresende)


#### Apresentação 

Com base em pesquisas realizadas pelo grupo foi possível perceber que houve um aumento das expulsões dos LGBTI+ de casa, devido ao isolamento social por conta do COVID19, que estreitou as relações familiares. Os conflitos, antes afastados pelas responsabilidades sociais, hoje estão mais presentes, aumentando o público LGBTI sem apoio e que acaba ficando em situação de rua. Visando solucionar esse problema desenvolvemos um web app.

#### O Produto

Assim como no aplicativo Couchsurfing, o nosso web app conecta pessoas que tem um quarto sobrando, com aquelas que precisam de um lugar para passar a noite.  Com o publico-alvo inchado, essa conexão torna-se mais humanizada, que além de um abrigo pode oferecer apoio emocional por já terem vivenciado situaçōes similares. Também desenvolvemos um chatbot para o Facebook, no qual a pessoa encontra orientaçōes sobre os direitos LGBT e como buscar apoio profissional.

#### Protótipo navegável

[Clique aqui para ver o protótipo no figma](https://bit.ly/3gjpTHp)

#### Aplicação desenvolvida

[Clique aqui para acessar a aplicação em produção](https://casa-ile.netlify.app/)

#### Pitch

[Clique aqui para assistir o pitch](https://youtu.be/SOsaZuPez4Y)

#### Documentação das APIs

[Clique aqui para acessar o Swagger](https://app.swaggerhub.com/apis/GabrieleSuzart/ile-serverless_workstations/1#/default/post_users)


#### Como rodar o projeto

Faça o clone do repositório para sua máquina local
```
git clone git@github.com:BAPEMG/app-ile.git
```

Instale as dependências de desenvolvimento do projeto, abra o terminal na pasta raiz e execute o comando:
```
npm install
```

Para subir a aplicação na máquina, execute o comando e abra o [http://localhost:3000](http://localhost:3000) no navegador
```
npm start
```

Para executar os testes unitários, rode:
```
npm test
```

Para o funcionando das APIs na máquina local, crie um arquivo `.env` na raiz do projeto e crie uma variável de ambiente `REACT_APP_URL=` e ao lado coloque a URL da API, vide swagger.
