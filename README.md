# Comandos
`git -v o git --version`
`node -v o node --version`
`npm -v o npm --version`
`npm init -y`
`npm install express`
`npm install dotenv sequelize mysql2 pg pg-hstore`
`npm install nodemon --save-dev`
`cd nombre de la carpeta que deseo desplazame`
`cd ..`
`dir`
`clear`
`code .`
`git init`
`git add .`
`git commit -m "nombre del commmit"`
`git status`
`git branch "nommbre de la rama"`
`git branch`
`git checkout "nombre de la rama que deseo cambiar"`
`git remote add origin git@github.com:Jeisonlopez259911/node_3278524.git`
`git branch -M master`
`git push -u origin master`
# crear .env a nivel de src
`
    DB_DIALECT=mysql
    DB_HOST=localhost
    DB_PORT=3306
    DB_NAME=node_api
    DB_USER=root
    DB_PASSWORD=
    PORT=3000
`
`
    DB_DIALECT=postgres
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=node_api
    DB_USER=root
    DB_PASSWORD=
    PORT=3000
`
# 📁Estructura profesionales de API en Node.js

api-node
    |-src **Aqui vive todo el codigo  real del proyecto**
        |-config **Configuraciones globales**
        |-controllers **Controla las peticiones HTTP**
        |-middlewares **Intermediarios de seguridad y violacion**
        |-models **Representa las tablas de la base de datos**
        |-routes **Define las URLs de la API**
        |-services **Logica de negocio**
        |-utils **Funciones reutilizables**
        |-app.js **Configuracion de la aplicacion**
        |-server.js **Punto de arranque**
    |-.env
    |-.gitignore
    |-package-lock.json
    |-package.json
    |-README.md

📁src/config/database.js
📁src/server.js

configuramos package.json `"start": "node src/server.js"`
ejecutammos el servidor con `npm star`

ajustamos app.js 
`
    /* app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    }); */

    module.exports = app;
`
📁src/models/usuario.model.js
📁src/services/usuario.service.js
📁src/controllers/usuario.controller.js