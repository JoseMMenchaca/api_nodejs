import { DataTypes} from 'sequelize';
import { sequelize } from "../database/db.js";
import { Categoria } from "./Categoria.js";
import { Producto } from "./Producto.js";

export const Usuario=sequelize.define(
    'usuarios',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        correo:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        contrasena:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        estado:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }
    },
    {
      timestamps: false,
    }
);

Usuario.hasMany(Categoria,{
    foreignKey:'usuario_id',
    sourceKey:'id',
});
Categoria.belongsTo(Usuario,{
    foreignKey:'usuario_id',
    targetKey:'id',
});

Usuario.hasMany(Producto,{
    foreignKey:'usuario_id',
    sourceKey:'id',
});
Producto.belongsTo(Usuario,{
    foreignKey:'usuario_id',
    targetKey:'id',
});
