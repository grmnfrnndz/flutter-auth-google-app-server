const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = '687561875945-931nn1laeilodn0ksbs40dn0f90qm3ps.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);


const validarGoogleIdToken = async (token) => {

    try {
    
        const ticket = await client.verifyIdToken({
            idToken: token,
            // permite que sea validado por diferente client id utilizados
            audience: [
                CLIENT_ID,
                '687561875945-3iqt27n0vp7sca21m1fjos370t5ohvd0.apps.googleusercontent.com'
            ]  
        });
        const payload = ticket.getPayload();
        
        console.log('===============payload============');
        console.log(payload);
    
        return {
            name: payload['name'],
            picture: payload['picture'],
            email: payload['email'],
    
        }

    } catch (error) {
        return null;
    }

    
}


module.exports = {
    validarGoogleIdToken
}