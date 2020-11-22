const { Router } = require("express")
const { createBeneficiario, listAllBeneficiarios, getBeneficiarioByDni,
    updateBeneficiarioByDni, deleteBeneficiarioByDni } = require("./controllers")
const { validationMiddlewarePost, validationMiddlewarePatch } = require("./middlewares")

const router = Router()

router.get('/beneficiarios', listAllBeneficiarios)
router.post('/beneficiario', validationMiddlewarePost, createBeneficiario)
router.get('/beneficiario/:dni', getBeneficiarioByDni)
router.patch('/beneficiario/:dni', validationMiddlewarePatch, updateBeneficiarioByDni)
router.delete('/beneficiario/:dni', deleteBeneficiarioByDni)



module.exports = router