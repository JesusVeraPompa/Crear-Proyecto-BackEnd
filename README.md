# Plantilla para Crear un Proyecto BackEnd

1.- Crear el package.json
~~~
npm init -y
~~~

***

2.- Instalar Express
~~~
npm install express
~~~

***

3.- Instalar un paquete que nos permite ejecutar el servidor en caliente
~~~
npm install --save-dev nodemon
~~~

***

4.- Instalar variables de entorno
~~~
npm install dotenv
~~~

***

5.- Instalamos la dependencia de la base de datos mongoose
~~~
npm install mongoose
~~~

***

6.- Instalamos un paquete para proporcionar un middleware
~~~
npm i cors
~~~

***

7.- Instalamos un paquete para el registro de solicitudes HTTP
~~~
npm i morgan
~~~

***

8.- Crear .gitignore e Ignorar la Carpeta node_modules
~~~
.gitignore
~~~
~~~
node_modules
~~~

***

9.- Crear el archivo .env y añadirlo en .gitignore
~~~
.env
~~~

***

10.- En el archivo package.json agregar despues de "main": "index.js", ("type": "module",)
~~~
"type": "module",
~~~

***

11.- Creamos una carpeta en la raiz llamada config y dentro el archivo database.js
~~~
config
~~~
~~~
database.js
~~~

***

12.- Creamos una carpeta en la raiz llamada models y dentro los .js dependiendo de cada modelo, ademas de crear otra carpeta llamada dataForTheFirstTime con la base de datos a subir
~~~
models
~~~
~~~
dataForTheFirstTime
~~~

***

13.- En el archivo package.json Crear los scripts para subir los datos a la base de datos
Ejemplo
~~~
"dataTienda": "node ./models/dataForTheFirstTime/dataTienda.js",
~~~

***

14.- Ejecutamos los scripts para subir los datos a la base de datos
~~~
npm run dataTienda
~~~

***

15.- Crear el archivo en la raiz llamado server.js
~~~
server.js
~~~

***

16.- En el archivo package.json Crear el primer scripts "start"
~~~
"start": "node ./server.js"
~~~

***

17.- En el archivo package.json Crear otro scripts "dev"
~~~
"dev": "nodemon ./server.js"
~~~

***

18.- Ejecutar Servidor
~~~
npm run dev
~~~

***

19.- Creamos una carpeta en la raiz llamada controllers y dentro crear otra carpeta con los nombre de cada modelo y los .js
~~~
controllers
~~~
***

20.- Creamos una carpeta en la raiz llamada router y dentro los .js dependiendo de cada modelo
~~~
router
~~~

***
