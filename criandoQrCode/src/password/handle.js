import { readFileSync } from 'fs';
import { join } from 'path';

async function handle(params) {
    // Tenta ler o .env do diretório do usuário
    try {
        const envFile = readFileSync(join(process.cwd(), '.env'), 'utf8');
        envFile.split('\n').forEach(line => {
            const [key, value] = line.split('=');
            if (key && value) {
                process.env[key.trim()] = value.trim();
            }
        });
    } catch (error) {
        // Se não encontrar o arquivo, usa valores padrão
        process.env.LENGTH = '10';
        process.env.UPPERCASER_LETTERS = 'true';
        process.env.LOWER_CASE_LETTERS = 'true';
        process.env.NUMBERS = 'true';
        process.env.SPECIAL_CHARACTERS = 'true';
    }

    let characters = [];
    let password = '';
    const passwordLength = process.env.LENGTH || 12;

    if(process.env.UPPERCASER_LETTERS === 'true') {
        characters.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    if(process.env.LOWER_CASE_LETTERS === 'true') {
        characters.push(...'abcdefghijklmnopqrstuvwxyz');
    }

    if(process.env.NUMBERS === 'true') {
        characters.push(...'0123456789');
    }

    if(process.env.SPECIAL_CHARACTERS === 'true') {
        characters.push(...'!@#$%^&*()_+');
    }

    for(let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }
    return password; 
}

export default handle;