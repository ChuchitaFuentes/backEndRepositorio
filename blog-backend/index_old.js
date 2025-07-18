const express = require ('express');
const app = express ();
const PORT = 3000;

// Middleware para leer json, porque las APis generalmente envian y reciben JSON
app.use(express.json());

//Dato simulado
const post =[
    {id:1, title:"primer post"},
    {id:2, title:"segundo post"}
]

//Mi primer endpoint para traer post
app.get('/posts', (req, res)=>{
    res.json(post)
});

//Mi segundo endpoint para guardar un nuevo post
app.post('/posts', (req,res) => {
    const nuevoPost = req.body;
    console.log('Nuevo post recibido:', nuevoPost);
    post.push(nuevoPost);
    res.json({ message: 'Post agregado correctamente', data: nuevoPost})
});

app.listen(PORT, ()=>{
    console.log(`Está vivo nuestro server está vivo y corriendo en http://localhost:${PORT}`)
});

//Mi tercer endpoint para eliminar el último post
