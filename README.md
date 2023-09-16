# API REST USUARIOS V1.0.0

## Comenzando 🚀   
_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋

_Requerimientos mínimos del sistema._

1. NODE JS 18.16
.

### Instalación 🔧

_Sigue los siguientes pasos despues de tener instalado todos los requisitos mensionados enteriormente._

Descarga el proyecto desde el repositorio, desde la consola ejecuta el siguiente comando dentro de un directorio de tu elección.
```
$ git clone https://github.com/JoseMMenchaca/api_nodejs.git
```
Desde la consola de comando ingresa hasta el directorio del proyecto descargado ejecutando el siguiente comando.
```
$ cd /api-nodejs

```

Dentro del directorio del proyecto ejecuta los siguientes comandos para descargar las librerias.

```
$ npm install
$ npm update
```

Crear una copia del archivo .env-example a .env, configurar y cambiar con sus credenciales lo siguiente:

````
PORT=3000

DB_NAME=
DB_USERNAME=
DB_PASSWORD=

HOST=

````
Finalmente tienes listo el Api Rest para su funcionamiento y consumo, para poner en marcha el servidor de desarrollo ejecuta el siguiente comando.
````
$ npm run dev
````
## usuario por defecto ⚙️


````
{
    "correo": "admin@admin.com",
    "contrasena": "12345"
}
````


## Autor ✒️

* [JOSÉ MANUEL MENCHACA ENCINAS] *
