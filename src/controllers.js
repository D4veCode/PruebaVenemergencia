const ObjectsToCsv = require('objects-to-csv')
const { promises: fs } = require("fs")
const neatCsv = require('neat-csv')

const createBeneficiario = async (req, res) => {
    try {
        let beneficiario = req.body

        beneficiario.created_at = new Date(Date.now()).toISOString()
        const csv = new ObjectsToCsv([beneficiario])
        await csv.toDisk('beneficiarios.csv', { append: true })

        res.status(201).json({
            msg: "Beneficiario creado exitosamente",
            created: true
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            created: false,
            err: "Error, intente nuevamente"
        })
    }

}

const listAllBeneficiarios = (req, res) => {
    fs.readFile('beneficiarios.csv')
        .then(async data => {
            let beneficiarios = await neatCsv(data)
            res.status(200).json({
                data: beneficiarios
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                created: false,
                err: "Error, intente nuevamente"
            })
        })
}

const getBeneficiarioByDni = (req, res) => {
    let dni = Number(req.params.dni)
    fs.readFile('beneficiarios.csv')
        .then(async data => {
            let beneficiarios = await neatCsv(data)

            let beneficiario = beneficiarios.filter(ben => ben.dni == dni)[0]

            if (beneficiario) {
                res.status(200).json({
                    data: beneficiario
                })
            } else {
                res.status(404).json({
                    found: false,
                    err: "Beneficiario no encontrado."
                })
            }

        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                created: false,
                err: "Error, intente nuevamente"
            })
        })
}

const updateBeneficiarioByDni = (req, res) => {
    let dni = Number(req.params.dni)
    fs.readFile('beneficiarios.csv')
        .then(async data => {
            let beneficiarios = await neatCsv(data)

            let beneficiario = beneficiarios.filter(ben => ben.dni == dni)[0]

            if (beneficiario) {
                let newBeneficiarios = beneficiarios.map(ben => Number(ben.dni) == dni ? {...ben, ...req.body} : ben)

                const csv = new ObjectsToCsv(newBeneficiarios)
                await csv.toDisk('beneficiarios.csv', {append: false})

                res.status(200).json({
                    msg: "Beneficiario actualizado con exito"
                })
            } else {
                res.status(404).json({
                    found: false,
                    err: "Beneficiario no encontrado."
                })
            }

        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                created: false,
                err: "Error, intente nuevamente"
            })
        })
}


const deleteBeneficiarioByDni = (req, res) => {
    let dni = Number(req.params.dni)
    fs.readFile('beneficiarios.csv')
        .then(async data => {
            let beneficiarios = await neatCsv(data)

            let beneficiario = beneficiarios.filter(ben => ben.dni == dni)[0]

            if (beneficiario) {

                let newBeneficiarios = beneficiarios.filter(ben => Number(ben.dni) !== dni)

                const csv = new ObjectsToCsv(newBeneficiarios)
                await csv.toDisk('beneficiarios.csv', {append: false})

                res.status(200).json({
                    msg: "Beneficiario eliminado correctamente."
                })
            } else {
                res.status(404).json({
                    found: false,
                    err: "Beneficiario no encontrado."
                })
            }

        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                created: false,
                err: "Error, intente nuevamente"
            })
        })
}


module.exports = {
    createBeneficiario,
    listAllBeneficiarios,
    getBeneficiarioByDni,
    updateBeneficiarioByDni,
    deleteBeneficiarioByDni
}