## Description
Instalar la base de datos

Crear un archivo en la raiz de la app llamado .env donde se almacenaran las variables de entorno

Para la app tenemos que configurar las variables de entorno. Para almacenar los datos de configuración, para hacerlo fácilmente configurable y además, evitar que los datos confidenciales se envíen a un repositorio, usamos un modulo ConfigModule

    npm install @nestjs/config

Para verificar las variables de entorno el ConfigModule admite @hapi/joi

    npm install @hapi/joi @types/hapi__joi

## Install the associated client API libraries for your selected database
  npm install --save @nestjs/typeorm typeorm mysql2
  
  Once the installation process is complete, we can import the TypeOrmModule into the root AppModule