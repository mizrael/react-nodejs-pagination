# dependencies
npm install react react-dom inversify inversify-inject-decorators whatwg-streams whatwg-fetch --save

sudo typings install dt~react --global
sudo typings install dt~react-dom --global
sudo typings install dt~inversify --global
sudo typings install dt~inversify-inject-decorators --global
sudo typings install dt~whatwg-fetch --global
sudo typings install dt~whatwg-streams --global

# building:
From terminal go to the project root folder and run:
```
    webpack
```
also, a tasks.json file is already configured to build the system (cmd + shift + b).

# starting the webserver
lite-server is installed as node_module. In order to launch it, go to the project root folder and run
```
    npm run start
```
this will run the script placed in the package.json file