# 🔧 Gerador de QR Code e Senhas

Uma ferramenta CLI simples para gerar QR Codes e senhas seguras.

## ✨ Funcionalidades

- Geração de QR Codes personalizados
  - QR Code normal
  - QR Code otimizado para terminal
- Geração de senhas seguras com opções configuráveis:
  - Letras maiúsculas
  - Letras minúsculas 
  - Números
  - Caracteres especiais
  - Comprimento personalizável

## 📦 Instalação

1. Clone o repositório
2. Instale as dependências:

```bash
npm i qrcode-password-generator
```

## ⚙️ Configurações da Senha

As configurações para geração de senha podem ser personalizadas no arquivo `.env`:

```env
# Configurações para geração de senha
UPPERCASE_LETTERS=false    # Incluir letras maiúsculas
LOWERCASE_LETTERS=true    # Incluir letras minúsculas
NUMBERS=true             # Incluir números
SPECIAL_CHARS=true       # Incluir caracteres especiais
PASSWORD_LENGTH=12       # Comprimento da senha
```

Ajuste estas configurações conforme sua necessidade antes de gerar as senhas.