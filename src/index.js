import app from './app.js';
import { sequelize } from './database/db.js';
import { Usuario } from './models/Usuario.js';
import 'dotenv/config';
import bcrypt from "bcrypt";

async function main(){
    console.clear(); 
    const salt = await bcrypt.genSalt(10);
    await sequelize.sync({ force: false });
    await Usuario.create({
        nombre: 'admin',
        correo: 'admin@admin.com',
        contrasena:await bcrypt.hash('12345', salt)
    })
     
    
    const PORT=process.env.PORT;
    app.listen(PORT);
    console.log('Server escuchando el puerto ', PORT);
}

main();