const argv = require('yargs')
    .command('$0', 'Imprime en consola la tabla de multiplicar', (yargs) => {
        return yargs.positional(
            'base', {
                desc: 'Base de la tabla',
                demand: true,
                alias: 'b',
                default: 0
            }).positional(
            'limite', {
                desc: 'Limite de la tabla',
                alias: ['l', 'lim'],
                default: 10
            })
    })
    .argv;

module.exports = {
    argv
}