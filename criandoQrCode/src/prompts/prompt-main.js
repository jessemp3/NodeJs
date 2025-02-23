import chalk from "chalk";

const mainPrompt = [
   {
        name: "select", 
        description: chalk.bgWhite("Escolha a ferramenta (1 - QRCODE OU 2 PASSWORD"),
        pattern: /^[1-2]+$/,
        message: chalk.bgRed("Escolha 1 ou 2"),
        required: true
   }
]

export default mainPrompt;