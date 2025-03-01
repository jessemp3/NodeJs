#!/usr/bin/env node
import prompt from 'prompt';
import mainPrompot from './prompts/prompt-main.js';
import chalk from 'chalk';
import createQrcode from '../services/qr-code/create.js';
import createPassword from './password/create.js';

async function main() {
    // Inicia o prompt antes de fazer a pergunta
    prompt.start();
    
    return new Promise((resolve, reject) => {
        prompt.get(mainPrompot, async (err, choose) => {
            if (err) reject(err);
            
            if (choose.select == 1) {
                const qr = await createQrcode();
                resolve(qr);
            }
            if (choose.select == 2) {
                const pwd = await createPassword();
                resolve(pwd);
            }
        });
    });
}

export { main };

if (import.meta.url === process.argv[1]) {
    main().catch(console.error);
}