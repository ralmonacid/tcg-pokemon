<p align="center">
  <a href="https://tcgpocket.pokemon.com/es-es/" target="blank"><img src="https://tcgpocket.pokemon.com/_images/global/footer/tcgpocketlogo_footer_es.png" alt="tcg Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Proyecto de prueba con pokemon tcg pocket, hecho en Nest Js.</p>
    <p align="center">

</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Instalar Node Js

Se debe instalar la versión de Node Js 18.17.1 desde la [Página directa](https://nodejs.org/en/download)

## Instalar Nest Js

Se debe instalar la version de Nest Js 10.4.9 desde la [Página directa](https://docs.nestjs.com/)
.

## Instalar TypeORM

Se debe instalar la versión más reciente de [typeORM](https://docs.nestjs.com/recipes/sql-typeorm)

La instalación más común es con mysql:

```bash
$ npm install --save typeorm mysql2
```

nosotros trabajaremos con Postgres SQL, así que se debe reemplazar por el siguiente comando:

```bash
$ npm install --save @nestjs/typeorm typeorm pg
```

## Funcionamiento con Docker

Debe instalar Docker para poder realizar la conexión satisfactoria con la base de datos.

[Instalación Windows](https://docs.docker.com/desktop/setup/install/windows-install/)

[Instalación Linux](https://docs.docker.com/desktop/setup/install/linux/)

## Instalación de paquetes
 Al ejecuar el siguiente comando
```bash
$ npm install
```
se instalará cada uno de los paquetes, necesarios, para que funcione correctamente la aplicación



## Variables de Entorno
Para la configuración de las conexiones a la base de datos, debe tener en cuenta las siguientes variables de entorno:

```bash
# DB
DB_NAME=tcg_pokemon
DB_PASS=mycrosystem
DB_USER=mycrosystem
DB_HOST=tcg_pokemon-db
DB_PORT=5432
DB_SYNC=true
PORT=3000
```

## Compilar poryecto

```bash
# development
$ docker-compose up --build
```

*puede seguir este [tutorial](https://medium.com/@gausmann.simon/nestjs-typeorm-and-postgresql-full-example-development-and-project-setup-working-with-database-c1a2b1b11b8f), es uno de los más completos*