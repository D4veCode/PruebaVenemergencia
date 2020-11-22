const { promises: fs } = require("fs")


function benGreaterThanFifty(ben) {
    fechaNac = new Date(ben.birth_date)
    let hoy = new Date()

    let mesNacimiento = fechaNac.getMonth()
    let anoNacimiento = fechaNac.getFullYear()
    let diaNacimiento = fechaNac.getDate()

    let mesEdad = hoy.getMonth() - mesNacimiento
    let edad = hoy.getFullYear() - anoNacimiento
    let diaEdad = hoy.getDate() - diaNacimiento


    if ((edad > 50 && mesEdad >= 0 && diaEdad >= 0)) {
        return true
    }
}

function benLessThanFifty(ben) {
    fechaNac = new Date(ben.birth_date)
    let hoy = new Date()

    let mesNacimiento = fechaNac.getMonth()
    let anoNacimiento = fechaNac.getFullYear()
    let diaNacimiento = fechaNac.getDate()

    let mesEdad = hoy.getMonth() - mesNacimiento
    let edad = hoy.getFullYear() - anoNacimiento
    let diaEdad = hoy.getDate() - diaNacimiento


    if (edad <= 50) {
        console.log(ben.birth_date)
        return true
    }
}


const percentageOfAsistensiPlusUsers = async (req, res) => {
    fs.readFile('docs.json')
        .then(data => {
            let beneficiarios = JSON.parse(data).docs

            let asistensiPlusBen = beneficiarios.filter(ben => ben.product_type.name == "asistensi plus" && ben.status == "active")

            let percentage = asistensiPlusBen.length / beneficiarios.length

            res.status(200).json({
                msg: `El porcentaje de beneficiarios con el plan asistensi plus es de ${percentage * 100}%`
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

const percentageOfAsistensiUsers = (req, res) => {
    fs.readFile('docs.json')
        .then(data => {
            let beneficiarios = JSON.parse(data).docs

            let asistensiBen = beneficiarios.filter(ben => ben.product_type.name == "asistensi" && ben.status == "active")

            let percentage = asistensiBen.length / beneficiarios.length

            res.status(200).json({
                msg: `El porcentaje de beneficiarios con el plan asistensi es de ${percentage * 100}%`
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


const percentageOfGreaterThanFifty = (req, res) => {
    fs.readFile('docs.json')
        .then(data => {
            let beneficiarios = JSON.parse(data).docs

            let greaterThanFifty = beneficiarios.filter(benGreaterThanFifty)

            let percentage = greaterThanFifty.length / beneficiarios.length

            res.status(200).json({
                msg: `El porcentaje de beneficiarios mayores de 50 años es de ${percentage * 100}%`
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

const percentageOfLessThanFifty = (req, res) => {
    fs.readFile('docs.json')
        .then(data => {
            let beneficiarios = JSON.parse(data).docs

            let lessThanFifty = beneficiarios.filter(benLessThanFifty)

            let percentage = lessThanFifty.length / beneficiarios.length

            res.status(200).json({
                msg: `El porcentaje de beneficiarios menores de 50 años es de ${percentage * 100}%`
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

const averageOfActivePolicies = (req, res) => {
    fs.readFile('docs.json')
        .then(data => {
            let beneficiarios = JSON.parse(data).docs

            let benActive = beneficiarios.filter(ben => ben.status === 'active')

            let avg = benActive.reduce((total, ben)=> total+ben.product_type.product_price,0)/benActive.length

            res.status(200).json({
                msg: `El promedio de polizas contratadas activas es de  ${avg.toFixed(2)}`
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
    percentageOfAsistensiPlusUsers,
    percentageOfAsistensiUsers,
    percentageOfGreaterThanFifty,
    percentageOfLessThanFifty,
    averageOfActivePolicies
}