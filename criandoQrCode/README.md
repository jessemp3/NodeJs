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

```bash
npm i qrcode-password-generator
```

## 💻 Como Usar

```javascript
import { main } from 'qrcode-password-generator';

async function exemplo() {
    const resultado = await main();
    console.log(resultado);
}

exemplo();
```

## ⚙️ Configurações da Senha

As configurações para geração de senha podem ser personalizadas no arquivo `.env`:

```env
# Configurações para geração de senha
UPPERCASE_LETTERS=true    # Incluir letras maiúsculas
LOWERCASE_LETTERS=true    # Incluir letras minúsculas
NUMBERS=true             # Incluir números
SPECIAL_CHARS=true       # Incluir caracteres especiais
PASSWORD_LENGTH=12       # Comprimento da senha
```

Ajuste estas configurações conforme sua necessidade antes de gerar as senhas.