# Comandos
`git --version`
`node -v`
`npm -v`
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
    |-.gitignore
    |-package-lock.json
    |-package.json
    |-README.md