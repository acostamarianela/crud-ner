//importar la conexion a la bd
import db from "../database/db.js";
//importamos sequielize que es la ORM  de Node js
import { DataTypes } from "sequelize";

//definir la conexion
const BlogModel = db.define('blogs', {
    title: { type: DataTypes.STRING}, 
    content: { type: DataTypes.STRING}, 
})

export default BlogModel