const jwt = require('jsonwebtoken');

const CODENAME = '603-f@$$&&%4_pu$$_p0wn3d';

// .: Function that sign with a payload into a JWT
function sign(payload){
    return jwt.sign(payload, CODENAME)
}

// .: function tha verify the token
function verify(token){
    return jwt.verify(token, CODENAME)
}
module.exports= {
    ...jwt,
    sign,
    verify
}