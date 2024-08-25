#!/bin/bash

# Define the full path to the Node.js executable for the user rosandavid155
NODE_BIN="/home/rosandavid155/.nvm/versions/node/v18.16.0/bin"

# Add the directory containing the Node.js executable to the PATH
export PATH="$NODE_BIN:$PATH"


# Change directory to your Node.js application directory
cd /home/rosandavid155/faszen-backend-nodejs/

# Start your Node.js application using PM2 with the -f option
sudo $NODE_BIN/pm2 start app.js
# Start Jenkins service
sudo systemctl start jenkins