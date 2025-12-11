# Hamburgueria - Sistema de Pedidos

Sistema de pedidos para hamburgueria desenvolvido com Next.js 15, Prisma e PostgreSQL.

## 🚀 Tecnologias

- **Next.js 15.1.6** - Framework React
- **TypeScript** - Tipagem estática
- **Prisma 6.2.1** - ORM para banco de dados
- **PostgreSQL** - Banco de dados
- **Tailwind CSS** - Estilização
- **Shadcn UI 2.3.0** - Componentes
- **Docker** - Containerização

## 📋 Pré-requisitos

- Docker e Docker Compose
- Node.js 24+ (para desenvolvimento local)

## 🐳 Rodando com Docker

1. Clone o repositório
2. Configure as variáveis de ambiente (copie `.env.example` para `.env`)
3. Execute o Docker Compose:

```bash
docker-compose up -d
```

A aplicação estará disponível em `http://localhost:3000`

## 💻 Desenvolvimento Local

1. Instale as dependências:
```bash
npm install
```

2. Configure o arquivo `.env` com sua string de conexão do banco

3. Execute as migrations:
```bash
npx prisma migrate dev
```

4. Popule o banco de dados:
```bash
npx prisma db seed
```

5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## 📱 Funcionalidades

- ✅ Escolha do método de consumo (Para comer aqui / Para levar)
- ✅ Menu de produtos com categorias
- ✅ Detalhes do produto com ingredientes
- ✅ Carrinho de compras (Sacola)
- ✅ Finalização de pedido
- ✅ Listagem de pedidos

## 🗂️ Estrutura do Projeto

```
├── app/                    # Rotas Next.js
│   ├── [slug]/            # Páginas do restaurante
│   │   ├── menu/          # Menu e produtos
│   │   └── orders/        # Pedidos
│   └── page.tsx           # Página inicial
├── components/            # Componentes reutilizáveis
├── prisma/               # Schema e migrations
└── public/               # Arquivos estáticos
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm start` - Inicia servidor de produção
- `npx prisma studio` - Interface visual do banco de dados
- `npx prisma migrate dev` - Cria nova migration
- `npx prisma db seed` - Popula o banco de dados

## 🐘 PostgreSQL

Para usar PostgreSQL local sem Docker:
```bash
sudo service postgresql start
```

## 📄 Licença

Este projeto está sob a licença MIT.