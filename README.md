# App de Personagens Rick and Morty

Uma aplicação React para conhecer os personagens de Rick and Morty com busca, favoritos e informações detalhadas.

## 🚀 Como Iniciar

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Executar testes
npm run test
```

## 🛠️ Stack Utilizada

- **React** + **TypeScript** + **Vite**
- **Apollo Client** para busca de dados GraphQL
- **Styled Components** para estilização
- **React Router** para navegação
- **Jest + Testing Library** para testes

## 📡 API

Utiliza o endpoint GraphQL da [API Rick and Morty](https://rickandmortyapi.com/) para buscar dados dos personagens.

## 💾 Favoritos

Os favoritos são armazenados no React Context e funciona perfeitamente para uma seção de uso.

## 🏗️ Decisões de Arquitetura

- **Gerenciamento de Estado**: React Context - Simples e suficiente para esta aplicação
- **Busca de Dados**: Apollo Client - Suportado pela API Rick and Morty resultando em fácil implementação
- **Estilização**: Styled Components - CSS-in-JS que facilita o entendimento e manutenção de componentes
