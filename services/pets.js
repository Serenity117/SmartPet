import conn from './conexion.js'

export const getAllPets = () => {
    return new Promise((resolve, reject) => {
        conn.query('select * from mascota;', function (error, results, field) {
            if(error){
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}

export const getOnePet = ({ id }) => {
    return new Promise ((resolve, reject) => {
        conn.query(`select * from mascota where IdPet = ${id}`, function (error, results, field) {
            if(error){
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}

export const postPet = ({ body }) => {
    let { IdUser, nombre, raza, edad } = body;

    return new Promise((resolve, reject) => {
        conn.query(`insert into mascota values (?, null, ?, ?, ?)`,
        [IdUser, nombre, raza, edad], function (error, results, field) {
            if(error){
                reject(error)
            } else {
                resolve(results.affectedRows)
            }
        })
    })
}

export const deletePet = ({ id }) => {
    return new Promise((resolve, reject) => {
        conn.query(`delete from mascota where IdPet = ${id}`, function (error, results, field) {
            if(error){
                reject(error)
            } else {
                resolve(results.affectedRows)
            }
        })
    })
}