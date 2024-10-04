## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Coloquei as variaveis de ambiente de proposito. A ideia é para realmente instalar e utilizar a estrutura do projeto.

Problemas:

- Existe um problema nas URL por conta de certificado SSL. Então por apenas teste ignorei utilizando uma variavel de ambiente: NODE_TLS_REJECT_UNAUTHORIZED=0

Não é o ideal deixar nesse formato, o correto seria ajustar o endpoint para que não ocorra esse tipo de erro.
