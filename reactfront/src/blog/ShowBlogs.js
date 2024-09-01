import axios from 'axios'; //axios envia solicitudes http al backend
import {useState, useEffect} from 'react'; //son hooks 
import {Link} from 'react-router-dom'; //es un tag que nos provee react router


//hacemos referencia al endpoint del backend que hicimos con nodejs
const URI = 'http://localhost:8000/blogs'

const CompShowBlogs = () => {
    const [blogs, setBlog] = useState([]) //useState devuelve 2 cosas, blogs que es el valor con el estado y setblog que es una funcion para actualizar el estado, entonces el enganche para la funcion es useState
    useEffect( () => { //useEffect utiliza efectos donde un efectos de lo que es react es algo que react no controla 
        getBlogs()
    }, [])

    //procedimiento para mostrar todos los blogs
    const getBlogs = async () => {
        const res = await axios.get(URI) //nos conectamos a nuestro backend con axios
        setBlog(res.data) //axios devuelve una respuesta la cual es un objeto y accedeoms a data

    }

    //procedimiento para eliminar un blog 
    const deleteBlog = async(id) => {
        await axios.delete(`${URI}/${id}`) //hay que pasarle el endpoint y tambien el id del registro a eliminar 
        getBlogs()
    }

    return(
        <div className='container'>
            <div className='row'>  
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus" style={{ color: '#f5f5f5' }}></i></Link>
                    <table className='table table-sm'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog) => (
                                <tr key={ blog.id }>
                                    <td>{blog.title}</td>
                                    <td>{blog.content}</td>
                                    <td>
                                        
                                        <Link to={`/edit/${blog.id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square" style={{ color: '#f5f5f5' }}></i></Link>
                                        <button onClick={()=> deleteBlog(blog.id)} className='btn btn-danger'><i className="fa-solid fa-delete-left" style={{ color: '#f5f5f5' }}></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowBlogs