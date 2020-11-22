const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'beneficiarios.csv',
    header: [
        { id: 'first_name', title: 'First_name' },
        { id: 'last_name', title: 'last_name' },
        { id: 'dni', title: 'dni' },
        { id: 'birth_date', title: 'birth_date' },
        { id: 'sex', title: 'sex' },
        { id: 'country', title: 'country' },
        { id: 'city', title: 'city' },
        { id: 'created_at', title: 'created_at' },
    ],
    append: true
});
const ObjectsToCsv = require('objects-to-csv')
const { promises: fs } = require("fs")
const neatCsv = require('neat-csv')



const createBeneficiario = async (req, res) => {
    try {
        let beneficiario = req.body

        beneficiario.created_at = new Date(Date.now()).toISOString()

        console.log(beneficiario)

        //await csvWriter.writeRecords([beneficiario])
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

module.exports = {
    createBeneficiario,
    listAllBeneficiarios
}