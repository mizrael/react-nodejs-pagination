# dependencies
npm install -g grunt
npm install express typescript grunt-cli grunt-ts grunt-tslint grunt-contrib-watch tslint typings node-uuid --save

typings install body-parser --save
typings install express --save
typings install dt~node --save --global
typings install serve-static --save
typings install dt~express-serve-static-core --save --global
typings install mime --save

# building:
From terminal go to the project root folder and run:
```
    grunt
```
also, a tasks.json file is already configured to build the system (cmd + shift + b).

# starting the server
go to the project root folder and run
```
    npm run start
```
this will run the script placed in the package.json file