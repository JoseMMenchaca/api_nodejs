import { Router } from "express";
import { createProducto, deleteProducto, getAllProductos, getProducto, updateProducto } from "../controllers/producto.controller.js";
const router =Router();

router.get('/',getAllProductos);
router.post('/',createProducto);
router.get('/:id', getProducto);
router.put('/:id',updateProducto);
router.delete('/:id',deleteProducto);


export default router;