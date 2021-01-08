#!/bin/bash

echo ""
echo "######################################################"
echo "#                                                    #"
echo "#                Scikit Builder 0.0.1                #"
echo "#                                                    #"
echo "######################################################"
echo ""

errorLogFile=/tmp/scikit-builder-error

ROOTDIR=$(pwd)

changeWorkDIR() {
    cd $1
    echo Current Path: $1
}

publishAll() {
    cd dist/sabre
    for file in `ls ./packages`
    do
        if [ -d "./packages/"$file ]
        then
            publish "./packages/"$file
        fi
    done
}

version=""
name=""

publish() {
    echo "" > $errorLogFile
    getPackageInfo "$1/package.json"
    packageName=$name
    echo ""
    echo ------------ PUBLISH $packageName ------------
    echo ""
    checkVersion $packageName $version
    exist=$?
    if [[ $exist == 0 ]]
    then
        cd $1
        npm publish 2> $errorLogFile
        cd ../..
    else
        echo VERSION $version EXISTED
    fi
}

runCommand() {
    echo
    echo ------------ START $1 ------------
    echo
    echo "" > $errorLogFile
    case $1 in
        (CLEAR)
            changeWorkDIR $ROOTDIR
            rm -rf $ROOTDIR/dist/sabre
            yarn run clean 2> $errorLogFile
            ;;
        (BUILD)
            changeWorkDIR $ROOTDIR
            yarn run build 2> $errorLogFile
            ;;
        (COPY)
            changeWorkDIR $ROOTDIR
            ./scripts/copy.js 2> $errorLogFile
            ;;
        (PUBLISH)
            changeWorkDIR $ROOTDIR
            publishAll 2> $errorLogFile
            ;;
        (*)
            ;;
    esac

    output=$(cat $errorLogFile)
    echo
    if [[ $output =~ "ERR!" ]]
    then
        echo
        echo ------------ [ERROR] $1 ERROR
        echo ------------ EXIT
        exit 1
    else
        echo
        echo ------------ $1 END ------------
    fi
}

command=$1

runCommand CLEAR
runCommand BUILD
runCommand COPY
rm -rf $errorLogFile

echo ------------ DONE ------------
