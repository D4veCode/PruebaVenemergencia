const { Router } = require("express")
const { createBeneficiario, listAllBeneficiarios, getBeneficiarioByDni,
    updateBeneficiarioByDni, deleteBeneficiarioByDni } = require("./beneficiario.controller")

const { percentageOfAsistensiPlusUsers, percentageOfAsistensiUsers, percentageOfGreaterThanFifty,
    percentageOfLessThanFifty, averageOfActivePolicies } = require("./estadisticas.controller")

const { validationMiddlewarePost, validationMiddlewarePatch } = require("./middlewares")

const router = Router()

router.get('/beneficiarios', listAllBeneficiarios)
router.post('/beneficiario', validationMiddlewarePost, createBeneficiario)
router.get('/beneficiario/:dni', getBeneficiarioByDni)
router.patch('/beneficiario/:dni', validationMiddlewarePatch, updateBeneficiarioByDni)
router.delete('/beneficiario/:dni', deleteBeneficiarioByDni)
router.get('/estadisticas/porcentajeasistensiplususers',percentageOfAsistensiPlusUsers)
router.get('/estadisticas/porcentajeasistensiusers',percentageOfAsistensiUsers)
router.get('/estadisticas/porcentajemayoresde50',percentageOfGreaterThanFifty)
router.get('/estadisticas/porcentajemenoresde50',percentageOfLessThanFifty)
router.get('/estadisticas/promediopolizasactivas',averageOfActivePolicies)




module.exports = router