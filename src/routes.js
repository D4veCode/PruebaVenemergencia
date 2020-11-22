const { Router } = require("express")
const { createBeneficiario, listAllBeneficiarios, getBeneficiarioByDni,
    updateBeneficiarioByDni, deleteBeneficiarioByDni } = require("./controllers")
const router = Router()

router.get('/beneficiarios', listAllBeneficiarios)
router.post('/beneficiario', createBeneficiario)
router.get('/beneficiario/:dni', getBeneficiarioByDni)
router.patch('/beneficiario/:dni', updateBeneficiarioByDni)
router.delete('/beneficiario/:dni', deleteBeneficiarioByDni)



module.exports = router