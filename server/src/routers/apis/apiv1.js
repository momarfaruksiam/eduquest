const findUser = require('../../controllers/findUser')
const signUp = require('../../controllers/signUp')

const apiv1 = require('express').Router()



apiv1.use('/find-user', findUser)
apiv1.use('/sign-up', signUp)


module.exports = apiv1