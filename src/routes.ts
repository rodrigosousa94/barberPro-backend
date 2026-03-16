import { Router, Response, Request } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { UpdateUserController } from './controllers/user/UpdateUserController';
import { CreateHaircutController } from './controllers/haircut/CreateHaircutController';
import { ListHaircutController } from './controllers/haircut/ListHaircutController';
import { UpdateHaircutController } from './controllers/haircut/UpdateHaircutController';
import { CheckSubscriptionController } from './controllers/haircut/CheckSubscriptionController';
import { CountHaircutsController } from './controllers/haircut/CountHaircutsController';
import { DetailHaircutController } from './controllers/haircut/DetailHaircutController';

const router = Router();

//rotas de usuario
router.post('/users', new CreateUserController().handle) 
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)
router.put('/users', isAuthenticated, new UpdateUserController().handle)

//rotas de cortes de cabelo
router.post('/createHaircut', isAuthenticated, new CreateHaircutController().handle)
router.get('/haircuts', isAuthenticated, new ListHaircutController().handle)
router.put('/updateHaircut', isAuthenticated, new UpdateHaircutController().handle)
router.get('/haircut/checkSubscription', isAuthenticated, new CheckSubscriptionController().handle)
router.get('/haircut/countHaircuts', isAuthenticated, new CountHaircutsController().handle)
router.get('/haircut/detailHaircut/:haircutId', isAuthenticated, new DetailHaircutController().handle)

export { router };