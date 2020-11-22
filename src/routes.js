const {Router} = require("express")
const {createBeneficiario, listAllBeneficiarios} = require("./controllers")
const router = Router()

router.get('/beneficiarios', listAllBeneficiarios)
router.post('/beneficiario', createBeneficiario)
router.get('/')
router.put('/')
router.delete('/')



module.exports = router