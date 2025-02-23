import prompt from 'prompt';
import mainPrompot from './prompts/prompt-main.js';
import chalk from 'chalk';

async function main() {
    prompt.get(mainPrompot, async (err, choose) => {
        if (choose.select == 1) {console.log(chalk.bgGreen("Escolheu QRCODE"));
         }
        if (choose.select == 2) { console.log(chalk.bgGreen("Escolheu PASSWORD"));
         }
    });
    prompt.start();
}

main()