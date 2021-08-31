
const conexion = require('./cone_base_datos')

module.exports = app => {
    const connect = conexion

    app.post('/registro_datos', (req, res) => {
        const cedula_c = req.body.cedula
        const apellidos_c = req.body.apellidos
        const nombres_c = req.body.nombres
        const direccion_c = req.body.direccion
        const telefono_c = req.body.telefono
       const paralelo_c = req.body.paralelo
       const semestre_c = req.body.semestre
       const correo_c = req.body.correo
        connect.query('insert into estudiantes SET ?', {
            cedula_c, apellidos_c, nombres_c, direccion_c, telefono_c, paralelo_c, semestre_c, correo_c
        }, (error, resultado) => {
            res.redirect('/registro')
        })
    })
}