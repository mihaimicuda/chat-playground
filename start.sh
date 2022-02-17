#!/bin/bash

java -Dserver.port=8100 -jar target/workingchat-0.0.1-SNAPSHOT.jar > chat.log 2>&1 &
