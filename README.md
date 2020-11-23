# Prueba Venemergencia

Para consumir la api puede ingresar al siguiente enlace [https://radiant-shelf-22246.herokuapp.com/](https://radiant-shelf-22246.herokuapp.com/). O también puede utilizarlo localmente realizando los siguientes  comandos `npm install` y `npm start` localmente la api corre en el puerto 5000.


# Endpoints de la API 

## get `/api/beneficiarios`

Trae todos los beneficiarios disponibles en el archivo csv.

### filtro sortBy 
Para el filtro sortBy por fecha colocarlo de la siguiente manera: `/api/beneficiarios/?sortBy=created_at` y traerá los beneficiarios ordenados por fecha de creacion del mas reciente al mas antiguo.

## post `/api/beneficiario`

Para registrar un beneficiario se debe mandar un json de la siguiente manera: 

	{
	"first_name":  "Nombre",
	"last_name":  "Apellido",
	"dni":  12205226,
	"birth_date":  "1974-02-04",
	"sex":  "M",
	"country":  "Venezuela",
	"city":  "San Antonio"
	}
## get `/api/beneficiario/:dni`

Este endpoint trae el beneficiario que de match con el dni especificado en la ruta

## patch `/api/beneficiario/:dni`

Actualiza parte o todo el beneficiario. Puede mandar un json como el post o también ciertos campos.

## delete `/api/beneficiario/:dni`

Elimina un beneficiario que de match con dicho numero de dni. 


# Estadisticas 

## get `/api/estadisticas/porcentajeasistensiplususers`
Trae el porcentaje de beneficarios con el plan asistensi plus. 
## get `/api/estadisticas/porcentajeasistensiusers`
Trae el porcentaje de beneficiarios que tienen el plan asistensi
## get `/api/estadisticas/porcentajemayoresde50`
Trae el porcentaje de beneficiarios mayores de 50 años
## get `/api/estadisticas/porcentajemenoresde50`
Trae el porcentaje de beneficiarios menores de 50 años
## get `/api/estadisticas/promediopolizasactivas`
Trae el promedio del precio de polizas activas 


