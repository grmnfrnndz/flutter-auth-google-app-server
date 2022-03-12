const { response } = require('express');
const { validarGoogleIdToken } = require('../helpers/google-verify-token');


const googleAuth = async (request, response=response) => {


    const token = request.body.token;

    if(!token) {
        return response.json({
            ok: false,
            msg: 'No hay token en la peticion'
        });
    }

    const googleUser = await validarGoogleIdToken(token);

    if (!googleUser) {
        return response.status(400).json({
            ok: false,
        })
    }


    // TODO: aqui es posible almacenar en la base de datos


    response.json(
        {
            ok: true,
            googleUser
        }
    )
}

module.exports = {
    googleAuth
}
