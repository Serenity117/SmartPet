import conn from './conexion.js'

export const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        conn.query('select * from usuario;', function (error, results, field) {
            if(error){
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}

export const getOneUser = ({ id }) => {
    return new Promise ((resolve, reject) => {
        conn.query(`select * from usuario where IdUser = ${id}`, function (error, results, field) {
            if(error){
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}

export const postUser = ({ body }) => {
    let { nombre, apellidos, telefono, correo, contrasena, domicilio } = body;

    return new Promise((resolve, reject) => {
        conn.query(`insert into usuario values (null, ?, ?, ?, ?, ?, ?)`, 
        [nombre, apellidos, telefono, correo, contrasena, domicilio], function (error, results, field) {
            if(error){
                reject(error)
            } else {
                resolve(results.affectedRows)
            }
        })
    })
}

export const deleteUser = ({ id }) => {
    return new Promise((resolve, reject) => {
        conn.query(`delete from usuario where IdUser = ${id}`, function (error, results, field) {
            if(error){
                reject(error)
            } else {
                resolve(results.affectedRows)
            }
        })
    })
}