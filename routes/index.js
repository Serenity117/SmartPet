import express from 'express';
import routePet from './routePet.js';
import routeStadistics from './routeStadistics.js';
import routeUser from './routeUser.js';

function routerApi(app) {
    const router = express.Router();
    app.use('/api', router);
    router.use('/usuarios', routeUser)
    router.use('/mascotas', routePet)
    router.use('/estadisticas', routeStadistics)
}

export default routerApi;