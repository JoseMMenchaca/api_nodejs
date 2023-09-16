import express from "express";
import morgan from "morgan";
import  jwt  from "jsonwebtoken";
const app=express();

import usuarioRoutes from './routes/usuario.routes.js';
import categoriaRoutes from './routes/categoria.routes.js';
import productoRoutes from './routes/producto.routes.js';
import loginRoutes from './routes/login.routes.js';


app.use(morgan('dev'));
app.use(express.json());

function verifyToken(req, res, next) {
    const bearerHeader=req.headers['authorization'];
    if (typeof bearerHeader!=='undefined') {

        const token =bearerHeader.split(' ')[1];
        jwt.verify(token, 'secretkey', function(err, usuario) {
            if (err) {
                return res.status(401).send({
                    success: false,
                    message: 'Haga login para continuar'
                });
            } else {

                next();
            }
        });
    } else {
        return res.status(401).send({
            success: false,
            message: 'Haga login para continuar'
        });
    }
}

app.use('/login',loginRoutes);
app.use('/api/v1/usuario',usuarioRoutes);
app.use('/api/v1/categoria',verifyToken,categoriaRoutes);
app.use('/api/v1/producto',verifyToken,productoRoutes);


export default app;