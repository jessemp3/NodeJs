async function connect(user) {
    if(user === 'admin') {
        return 'admin'
        console.log('Conectado com sucesso');
    }
}


async function main(params) {
    console.log(`Olá ${process.env.TEXTO}`);
    
}

main()