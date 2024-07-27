import express from 'express'
import { login  } from '../Controllers/Login'
import { register } from '../Controllers/Register'


const router = express.Router();

router.post('/register', register);

router.post('/login', login);

export default router