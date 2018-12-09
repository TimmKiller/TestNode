const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;

let command = argv._[0];

switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(archivo))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}
//console.log(process.argv);

//let argvProcess = process.argv;

//console.log(argv);
//console.log(argv.base);
//console.log('limte ', argv.l);
//console.log(argvProcess);
//let param = argv[2];
//let base = param.split('=')[1]

//console.log(param);
//console.log(base);