import { Usuario } from "../models/Usuario.js";
import bcrypt from 'bcrypt';
import  jwt  from "jsonwebtoken";

export async function postlogin(req,res){
    const {correo, contrasena} = req.body;
    const user = await Usuario.findOne({ where : {correo }});
    console.log(user);
    if(user){
    const password_valid = await bcrypt.compare(contrasena,user.contrasena);
    if(password_valid){
        jwt.sign({ "id" : user.id,"correo" : user.correo,"nombre":user.nombre },'secretkey',(err,token)=>{
            res.json({token});
        });
        
    } else {
      res.status(400).json({ error : "Password Incorrecto" });
    }
  
  }else{
    res.status(404).json({ error : "No existe el Usuario" });
  }
}