import { Router } from "express";
import { getAllCategorias, createCategoria, getCategoria, updateCategoria,deleteCategoria } from "../controllers/categoria.controller.js";
const router =Router();

router.get('/',getAllCategorias);
router.post('/',createCategoria);
router.get('/:id', getCategoria);
router.put('/:id',updateCategoria);
router.delete('/:id',deleteCategoria);

export default router;