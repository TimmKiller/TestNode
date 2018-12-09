var colors = require('colors');
const fs = require('fs')

let listarTabla = (base, limite) => {
    if (!Number(base)) {
        console.log(`El valor ${base} no es un numero`);
        return;
    }

    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i} \n`;
    }
    console.log(data.green);
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve('El archivo ' + `tabla-${base}.txt `.green)
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}