import express, { response } from 'express';
import * as userService from '../services/users.js';

const router = express.Router();

router.get('/', async (request, response) => {
    try {
        const results = await userService.getAllUsers();
        response.send(results);
    } catch (error) {
        console.log({ error })
        response.status(500).send({ error })
    }
})

router.get('/:id', async (request, response) => { 
    try {
        const results = await userService.getOneUser({ id: request.params.id });
        response.send(results);
    } catch (error) {
        console.log({ error });
        response.status(500).send({ error });
    }
})

router.post('/', async (request, response) => {
    try {
        const results = await userService.postUser({ body: request.body });
        if(results>0){
            console.log('Usuario creado correctamente');
            response.send({ msg: 'Usuario creado correctamente'});
        } else {
            console.log({error: 'error al crear usuario'});
            response.send({error: 'error al crear usuario'})
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({error: 'Ha ocurrido un problema en el servidor'})
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const results = await userService.deleteUser({id: request.params.id});
        if (results>0){
            response.send({msg: 'Usuario eliminado correctamente'});
        } else {
            response.status(404).send({msg: 'Error al eliminar'});
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({error: 'Ha ocurrido un problema en el servidor'});
    }
})

export default router