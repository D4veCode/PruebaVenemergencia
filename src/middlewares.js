const yup = require("yup");

let schemaPost = yup.object().shape({
    first_name: yup.string().required().min(3).max(50),
    last_name: yup.string().required().min(3).max(50),
    dni: yup.number().required(),
    birth_date: yup.date().required(),
    sex: yup.string().required().min(1).max(1).matches(/(F|M)/),
    country: yup.string().required().min(3).max(50),
    city: yup.string().required().min(3).max(50),
})

let schemaPatch = yup.object().shape({
    first_name: yup.string().min(3).max(50),
    last_name: yup.string().min(3).max(50),
    dni: yup.number(),
    birth_date: yup.date(),
    sex: yup.string().min(1).max(1).matches(/(F|M)/),
    country: yup.string().min(3).max(50),
    city: yup.string().min(3).max(50),
})

const validationMiddlewarePost = async (req, res, next) => {
    try {
        await schemaPost.validate(req.body)
        next()
    } catch (err) {
        res.status(400).json({
            created: false,
            error: "field invalido, verifique e intente nuevamente."
        })
    }
}

const validationMiddlewarePatch = async (req, res, next) => {
    try {
        await schemaPatch.validate(req.body)
        next()
    } catch (err) {
        res.status(400).json({
            created: false,
            error: "field invalido, verifique e intente nuevamente."
        })
    }
}


module.exports = {
    validationMiddlewarePost,
    validationMiddlewarePatch
}