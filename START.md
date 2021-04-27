export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh

nvm use 12
npm install --production
npm start
http://localhost:8888/Simulator/index.html