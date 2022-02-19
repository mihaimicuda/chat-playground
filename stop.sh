#/bin/bash

ps -ef | grep chat | grep -v grep | awk '{print $2}' | xargs kill -9
