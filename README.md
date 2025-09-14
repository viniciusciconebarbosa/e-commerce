# 🛍️ ShopMaster - E-commerce Moderno

🖥️ [Aplicação Frontend](https://e-modern-shop-vin.vercel.app/)

## Descrição do Projeto

Uma plataforma de e-commerce inovadora e intuitiva, desenvolvida para proporcionar uma experiência de compra online perfeita e moderna.

### Funcionalidades Principais

- **Catálogo de Produtos**: Navegação intuitiva e filtros avançados
- **Carrinho de Compras**: Gerenciamento fácil de produtos selecionados
- **Autenticação de Usuário**: Login social e tradicional
- **Responsividade**: Design adaptável para dispositivos móveis e desktop
- **Tema Dinâmico**: Suporte a modo claro e escuro

### Tecnologias Utilizadas

- **Frontend**: Next.js 15.2.1
- **Linguagem**: TypeScript
- **Biblioteca UI**: React 19.0.0
- **Estilização**: 
  - Emotion
  - Material-UI (MUI)
  - Styled Components
- **Gerenciamento de Formulários**: React Hook Form
- **Requisições HTTP**: Axios

### 🛠️ Pré-requisitos

- Node.js (v20+)
- npm (v10+)

### 🔧 Configuração do Ambiente

1. **Clonar o Repositório**
```bash
git clone https://github.com/seu-usuario/shopmaster.git
cd shopmaster
```

2. **Instalar Dependências**
```bash
npm install
```

3. **Configurar Variáveis de Ambiente**
- Crie um arquivo `.env` na raiz do projeto
- Use `.env.example` como referência
- Adicione suas configurações:
  ```
  NEXT_PUBLIC_API_URL=sua_url_de_api
  NEXT_PUBLIC_AUTH_SECRET=sua_chave_de_autenticacao
  ```

### 🖥️ Executando o Projeto

**Desenvolvimento**:
```bash
npm run dev
```
- Acesse: `http://localhost:3000`

**Produção**:
```bash
npm run build
npm start
```

### 🧪 Executando Testes e Linting

**Linting**:
```bash
npm run lint
```

### 📦 Build

```bash
npm run build
```
- Arquivos de build serão gerados na pasta `build`

### 📁 Estrutura do Projeto

```
├── src/
│   ├── app/                    # Páginas e rotas da aplicação
│   │   ├── about/              # Página "Sobre" do e-commerce
│   │   ├── cart/               # Página e lógica do carrinho de compras
│   │   ├── contact/            # Página de contato
│   │   ├── login/              # Funcionalidades de autenticação
│   │   │   ├── LoginCard/      # Componente de cartão de login
│   │   │   ├── LoginForm/      # Formulário de login
│   │   │   └── SocialAuthButtons/ # Botões de autenticação social
│   │   └── page.tsx            # Página inicial da aplicação
│   ├── assets/                 # Recursos estáticos como imagens
│   ├── components/             # Componentes reutilizáveis da aplicação
│   │   ├── cart-provider.tsx   # Provedor de contexto do carrinho
│   │   ├── footer.tsx          # Componente de rodapé
│   │   ├── header.tsx          # Componente de cabeçalho
│   │   ├── ProductSection/     # Seção de produtos
│   │   │   ├── PaginationControl/  # Controles de paginação
│   │   │   ├── ProductCard/    # Cartão individual de produto
│   │   │   ├── ProductFilters/ # Filtros de produtos
│   │   │   └── ProductList/    # Lista de produtos
│   │   └── theme-provider.tsx  # Provedor de tema da aplicação
│   └── ...
├── public/                     # Arquivos públicos estáticos
└── ...
```

### 🤝 Contribuição

1. Faça um fork do projeto
2. Crie sua feature branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

### 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

### 👤 Autor

[Redes]
- GitHub: [@viniciuscicone](https://github.com/viniciusciconebarbosa)
- LinkedIn: [Vinicius](https://www.linkedin.com/in/seu-perfil)

### 🚨 Avisos Importantes

- Certifique-se de não commitar chaves de API
- Use variáveis de ambiente para configurações sensíveis
- Verifique os requisitos de uso das APIs utilizadas

---

## 📸 Capturas de Tela

## Metricas

![metricasLocaisCommerce](https://github.com/user-attachments/assets/6269a10e-4324-45b3-83cb-2617187db2e4)


## Fotos

![commerce1](https://github.com/user-attachments/assets/fa2e8fa6-f3e1-4927-92c5-67e35c55d272)






