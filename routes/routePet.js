import express, { response } from 'express';
import * as petService from '../services/pets.js';

const router = express.Router();

router.get('/', async (request, response) => {
    try {
        const results = await petService.getAllPets();
        response.send(results);
    } catch (error) {
        console.log({ error })
        response.status(500).send({ error })
    }
})

router.get('/:id', async (request, response) => { 
    try {
        const results = await petService.getOnePet({ id: request.params.id });
        response.send(results);
    } catch (error) {
        console.log({ error });
        response.status(500).send({ error });
    }
})

router.post('/', async (request, response) => {
    try {
        const results = await petService.postPet({ body: request.body });
        if(results>0){
            console.log('Mascota creada correctamente');
            response.send({ msg: 'Mascota creada correctamente'});
        } else {
            console.log({error: 'error al crear mascota'});
            response.send({error: 'error al crear mascota'})
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({error: 'Ha ocurrido un problema en el servidor'})
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const results = await petService.deletePet({id: request.params.id});
        if (results>0){
            response.send({msg: 'Mascota eliminada correctamente'});
        } else {
            response.status(404).send({msg: 'Error al eliminar'});
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({error: 'Ha ocurrido un problema en el servidor'});
    }
})

export default router;