import chalk from "chalk";

const qrcodePrompt = [
   {
    name: "link", 
    description: chalk.bgWhite("Digite o link para gerar o QR Code"),
    required: true, // Adicionando required
    message: chalk.red.italic("Link é obrigatório") // Mensagem de erro
   },
   {
    name: "type",
    description: chalk.bgWhite("Escolha o tipo de QR Code(1 - NORMAL OU 2 - TERMINAL)"),
    pattern: /^[1-2]$/,
    message: chalk.red.italic("Escolha 1 ou 2"),
    required: true
   }
];

export default qrcodePrompt;