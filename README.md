<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="50%" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```bash
$ yarn install
```

3. Tener Nest CLI instalado

```bash
$ npm i -g @nestjs/cli
```

4. Levantar la base de datos con docker

```bash
$ docker-compose up -d
```

5. Clonar el archivo **.env.template** y renombrar la copia a **.env**

6. Llenar las variables de entorno definidas en el **.env**

7. Ejecutar la aplicacion con

```
yarn start:dev
```

8. Recostruir la base de datos con la semilla

```
localhost:PORT/api/seed
```

## Stack usado

- MongoDB
- Nest
