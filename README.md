# HeroesApp

Desarrollado en Angular (https://github.com/angular/angular-cli) - version 14.0.3.

Utilizando:
  - Angular material: https://material.angular.io/guide/getting-started
  - @angular/flex-layout: https://www.npmjs.com/package/@angular/flex-layout
  - json-serve: https://www.npmjs.com/package/json-server

## Levantar servidor

Ejecute `ng serve` para un servidor de desarrollo (agregue la flag -o para apertura automatica). 
Para levantar la API rest debe ejecutar `json-serve --watch db.json` o el nombre de su json, el que use yo se los dejo: https://gist.githubusercontent.com/Klerith/403c91e61d3c87284beb0dd138619958/raw/ff4f84e46b3aebb3d4870b4c571b6b719b3e041d/db.json .

El proyecto cargara en `http://localhost:4200/`. Las rutas puede revisarlas en app-routing.module.ts dentro del directorio src/app

###### La aplicación se recargará automáticamente si cambia cualquiera de los archivos de origen (live reloading; ng rules).

##Instalaciones previas y necesarias: 

###### Angular CLI: npm install -g @angular/cli
###### Json-server: npm install -g json-server

###### NodeJS: https://nodejs.org/es/download/
###### GIT: https://git-scm.com/downloads
