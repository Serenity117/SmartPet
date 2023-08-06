import conn from './conexion.js'

export const getAllStadistics = () => {
    return new Promise((resolve, reject) => {
        conn.query('select * from estadisticas;', function (error, results, field) {
            if(error){
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}

export const getOneStadistic = ({ id }) => {
    return new Promise ((resolve, reject) => {
        conn.query(`select * from estadisticas where IdStats = ${id}`, function (error, results, field) {
            if(error){
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}

export const postStadistic = ({ body }) => {
    let { Lpm, temperatura, ubicacion, IdPet } = body;
    const fecha = new Date()

    return new Promise((resolve, reject) => {
        conn.query(`insert into estadisticas values (null, ?, ?, ?, ?, ?)`, 
        [Lpm, temperatura, ubicacion, fecha.toISOString(), IdPet], (error, results, field) => {
            if(error){
                reject(error)
            } else {
                resolve(results.affectedRows)
            }
        })
    })
}

export const deleteStadistics = ({ id }) => {
    return new Promise((resolve, reject) => {
        conn.query(`delete from estadisticas where IdStats = ${id}`, function (error, results, field) {
            if(error){
                reject(error)
            } else {
                resolve(results.affectedRows)
            }
        })
    })
}