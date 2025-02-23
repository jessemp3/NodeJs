#!/usr/bin/env node
import prompt from 'prompt';
import mainPrompot from './prompts/prompt-main.js';
import chalk from 'chalk';
import createQrcode from '../services/qr-code/create.js';
import createPassword from './password/create.js';

async function main() {
    prompt.get(mainPrompot, async (err, choose) => {
        if (choose.select == 1) {await createQrcode();}
        if (choose.select == 2) {await createPassword();}
    });
    prompt.start();
}

main()