#!/bin/bash

function scan() {
    if [ -f package.json ]; then
        clear
        return
    fi

    for file in `ls`
    do
        if [ -d $file ]; then
            cd $file
            scan $file
            cd ..
        fi
    done
}

function clear() {
    rm -rf lib
}

cd packages
scan