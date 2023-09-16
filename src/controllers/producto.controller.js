import { Producto } from "../models/Producto.js";

export async function getAllProductos( req, res){
    try{
        const productos=await Producto.findAll({
            attributes:['id','nombre','precio_unitario','estado','categoria_id'],
        });
        res.json(productos);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
}

export async function createProducto(req, res){
    const {nombre,precio_unitario,categoria_id, usuario_id} = req.body;
    try{
        const newProducto=await Producto.create({
            nombre,
            precio_unitario,
            categoria_id,
            usuario_id,
            
        },{
            fields:['nombre','precio_unitario','categoria_id','usuario_id']
        });
        res.status(201).json(newProducto);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
}

export async function getProducto(req, res){
    const {id}=req.params;
    try{
        const producto= await Producto.findOne({
            where:{id}
        });
        res.status(201).json(producto);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
}

export async function updateProducto(req, res){
    const {id}=req.params;
    const {nombre, precio_unitario,estado,categoria_id ,usuario_id} = req.body;

    try{
        const producto=await Producto.findByPk(id);
        producto.nombre=nombre;
        producto.usuario_id=usuario_id;
        producto.precio_unitario=precio_unitario;
        producto.estado=estado;
        producto.categoria_id=categoria_id;
        await producto.save();
        
        res.status(201).json(producto);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
}

export async function deleteProducto(req,res){
    const {id}=req.params;
    try {
     
        await Producto.destroy({
          where: { id },
        });
        return res.sendStatus(204);
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
}