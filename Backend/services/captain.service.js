const captainModel = require('../models/captain.model');



module.exports.createCaptain = async ({
    firstname, lastname, email, password, color, plate, capasity, vehicleType
}) => {
    if(!firstname || !email || !password || !color || !plate || !capasity || !vehicleType) {
        throw new Error('Please fill in all fields');
    }
    const captain = captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capasity,
            vehicleType
        }
    })
    return captain
}
