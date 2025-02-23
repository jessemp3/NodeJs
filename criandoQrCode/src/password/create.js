import chalk from 'chalk';
import handle from './handle.js';

async function createPassword(params) {
    console.log(chalk.green('Creating password...'));
    const password = await handle();
    console.log(password);
    
    
}

export default createPassword;