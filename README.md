# 🍔 Gigio's Burger 🍟

Bem-vindo ao **Gigio's Burger**, uma plataforma de pedidos online dedicada a oferecer uma experiência única para explorar e pedir hambúrgueres artesanais, acompanhamentos, bebidas e sobremesas. Este projeto foi desenvolvido para demonstrar minhas habilidades como desenvolvedor full-stack e designer UI/UX, focando em criar uma plataforma interativa, rápida e visualmente atraente.

![Gigio's Burger](https://i.imgur.com/your-image-url.png)

## 🎯 Objetivo do Projeto

O objetivo deste site é apresentar um cardápio completo de produtos, destacando minhas habilidades em design de experiência do usuário (UX) e design de interface do usuário (UI). Com um design responsivo e animações cativantes, busco proporcionar uma experiência agradável e envolvente, permitindo que os usuários explorem facilmente o cardápio e finalizem seus pedidos.

## 💡 Abordagem de Design

**Gigio's Burger** 🍔🍟 é uma plataforma de pedidos online responsiva, projetada para oferecer uma experiência gastronômica única. Com animações suaves e rápidas, a navegação é intuitiva e divertida. Explore uma vasta seleção de hambúrgueres, acompanhamentos e bebidas, com imagens cativantes e interações envolventes que garantem satisfação sem fim. Perfeito para seu próximo pedido.

Neste projeto, utilizei princípios de design centrado no usuário, focando em:

- **Navegação Intuitiva**: Estrutura clara e fácil de navegar para uma experiência de compra agradável.
- **Animações**: Implementação de animações suaves com GSAP e Framer Motion para melhorar a interação do usuário.
- **Estética Visual**: Design moderno e colorido, com atenção aos detalhes para proporcionar uma experiência visual atraente.
- **Fluxo de Compra Completo**: Sistema de carrinho inteligente com checkout diferenciado por método de consumo (retirada ou delivery).

## ⚙️ Tecnologias Utilizadas

- **Next.js 16**: Framework React para aplicações web otimizadas com App Router e Turbopack
- **React 19**: Biblioteca JavaScript para construção de interfaces de usuário
- **TypeScript**: Tipagem estática para maior segurança e produtividade
- **Prisma 6.2.1**: ORM moderno para integração com banco de dados PostgreSQL
- **PostgreSQL (Neon)**: Banco de dados em nuvem para armazenamento de dados
- **GSAP + @gsap/react**: Biblioteca para animações de alta performance
- **Framer Motion**: Biblioteca para animações e transições em React
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva
- **Shadcn UI**: Componentes de UI reutilizáveis e acessíveis
- **Lucide Icons**: Ícones modernos para enriquecer a interface
- **Docker**: Containerização para deploy facilitado

## 🎨 Funcionalidades

### ✨ Tela de Boas-Vindas Animada
- Animações com GSAP (logo rotacionando e flutuando)
- Background animado com emojis flutuantes e partículas
- Escolha do método de consumo (Comer Aqui ou Fazer Pedido)

### 🍽️ Cardápio Interativo
- **5 categorias**: Combos, Lanches, Fritas, Bebidas e Sobremesas
- Cards animados com efeito hover
- Imagens reais dos produtos
- Adicionar ao carrinho com um clique
- Feedback visual ao adicionar produtos

### 🛒 Carrinho de Compras
- Sidebar deslizante com todos os itens
- Controle de quantidade (adicionar/remover)
- Cálculo automático de subtotal e total
- Botão "Limpar tudo" para esvaziar o carrinho
- Botão "Continuar comprando" para voltar ao menu

### 📋 Checkout Inteligente
- Formulário com nome e CPF do cliente
- Geração automática de número do pedido
- Redirecionamento para página de confirmação

### ✅ Confirmação de Pedido Diferenciada

#### 🏪 DINE_IN (Retirar na Loja)
- 3 etapas animadas: Recebido → Em Preparação → Pronto para Retirada
- **Senha de retirada**: Exibe número único para buscar no balcão
- Mensagem: "Aguarde a senha e retire seu pedido no balcão"

#### 🚚 TAKEAWAY (Delivery)
- 3 etapas animadas: Recebido → Em Preparação → Saiu para Entrega
- **Tempo estimado**: 25-35 minutos
- Mensagem: "O entregador está a caminho"

### 🎭 Animações e Efeitos Visuais
- Background gradiente animado (amarelo → laranja → vermelho)
- Emojis flutuantes (🍔🍟🥤🍕🌮🍗🥓🧀)
- Partículas brilhantes e círculos rotativos
- Transições suaves entre páginas
- Animações de entrada e saída

## ⚙️ Como Executar o Projeto

### 💻 Desenvolvimento Local

1. **Clone o repositório:**
```bash
git clone https://github.com/geovanigcs/Hamburgueria.git
cd Hamburgueria
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure as variáveis de ambiente:**

Crie um arquivo `.env` na raiz do projeto com:
```env
DATABASE_URL="sua_url_do_postgresql"
```

4. **Execute as migrações do Prisma:**
```bash
npx prisma migrate dev
npx prisma db seed
```

5. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

6. **Acesse o projeto em seu navegador:**
```
http://localhost:3001
```

### 🐳 Rodando com Docker

1. Clone o repositório
2. Configure as variáveis de ambiente (copie `.env.example` para `.env`)
3. Execute o Docker Compose:

```bash
docker-compose up -d
```

A aplicação estará disponível em `http://localhost:3000`

## 🗂️ Estrutura do Projeto

```
hamburgueria/
├── app/
│   ├── [slug]/
│   │   ├── components/
│   │   │   ├── consumption-method-option.tsx
│   │   │   └── welcome-screen.tsx
│   │   ├── menu/
│   │   │   ├── components/
│   │   │   │   ├── cart-button.tsx
│   │   │   │   └── menu-content.tsx
│   │   │   └── page.tsx
│   │   ├── order-confirmation/
│   │   │   └── page.tsx
│   │   ├── orders/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── scroll-area.tsx
│   │   └── sheet.tsx
│   ├── animated-background.tsx
│   ├── cart-sheet.tsx
│   ├── category-tabs.tsx
│   ├── order-confirmation.tsx
│   └── product-card.tsx
├── constants/
│   ├── index.ts
│   └── products.ts
├── contexts/
│   └── cart-context.tsx
├── lib/
│   ├── prisma.ts
│   └── utils.ts
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── migrations/
└── public/
    └── logo.png
```

## 🎨 Paleta de Cores

- **Primária**: Vermelho (#DC2626, #EF4444)
- **Secundária**: Laranja (#F97316, #FB923C)
- **Acento**: Amarelo (#FACC15, #FDE047)
- **Background**: Gradiente (Yellow-50 → Orange-50 → Red-50)
- **Texto**: Cinza (#1F2937, #4B5563, #9CA3AF)
- **Sucesso**: Verde (#10B981)

## 📝 Categorias de Produtos

1. **Combos** 🎁 - Combinações especiais com desconto
2. **Lanches** 🍔 - Hambúrgueres artesanais variados
3. **Fritas** 🍟 - Batatas fritas em diversos tamanhos
4. **Bebidas** 🥤 - Refrigerantes, sucos e água
5. **Sobremesas** 🍰 - Tortas e sundaes para finalizar

## 📝 Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm start            # Inicia servidor de produção
npx prisma studio    # Interface visual do banco de dados
npx prisma migrate dev    # Cria nova migration
npx prisma db seed   # Popula o banco de dados
```

## 🚀 Funcionalidades Futuras

- [ ] Sistema de autenticação de usuários
- [ ] Histórico completo de pedidos
- [ ] Avaliação e comentários de produtos
- [ ] Sistema de cupons de desconto
- [ ] Rastreamento em tempo real do pedido
- [ ] Integração com pagamento online
- [ ] Notificações push para status do pedido
- [ ] Programa de fidelidade
- [ ] Favoritos e lista de desejos

## 🤝 Contribuição

Contribuições são bem-vindas! Se você deseja contribuir, siga estas etapas:

1. Fork o repositório
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`)
3. Faça suas alterações e commit (`git commit -m 'Adiciona nova funcionalidade'`)
4. Envie para o repositório remoto (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📞 Contato

Para dúvidas ou sugestões, você pode entrar em contato através de:

- **Email**: geovanigcs.dev@gmail.com
- **LinkedIn**: [Geovani Cordeiro](https://linkedin.com/in/geovanigcs)
- **GitHub**: [@geovanigcs](https://github.com/geovanigcs)

---

Agradeço por visitar o **Gigio's Burger**! Espero que você tenha uma ótima experiência! 🍔🚀

**Feito com ❤️ e muito 🍔 por Geovani Cordeiro**

