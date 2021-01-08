#!/usr/bin/env node

var fsx = require('fs-extra');
var _path = require('path');
var glob = require('globs');

var publishPkgs = ['maths', 'learnkit', 'types', 'utils'];

var protectedPkgs = [];

var protectedFiles = ['lib/**/*.js'];

var whiteList = ['lib/**/*.d.ts', 'lib/ast/*.ts', 'package.json', 'README.md', 'CHANGELOG', 'LICENSE'];

function copyPackage(src, dest, canInclude) {
    var list = canInclude ? whiteList.concat(protectedFiles) : whiteList;
    var matches = glob.sync(list, { cwd: src });
    matches
        .map((file) => {
            return [_path.resolve(src, file), _path.resolve(dest, file)];
        })
        .forEach((paths) => {
            fsx.copySync(paths[0], paths[1]);
        });
}

var rootDir = process.cwd();
var outputDir = _path.resolve(rootDir, 'dist', 'sabre');
var protectedPkgMap = protectedPkgs.reduce((acc, curr) => {
    acc[curr] = true;
    return acc;
}, {});

var pkgCopyInfos = publishPkgs.map((dir) => {
    var isProtected = protectedPkgMap[dir];
    var src = _path.resolve(rootDir, 'packages', dir);
    var dest = _path.resolve(outputDir, 'packages', dir);
    return { src, dest, isProtected };
});

pkgCopyInfos.forEach((info) => {
    copyPackage(info.src, info.dest, !info.isProtected);
});

// 拷贝根目录文件
var files = ['lerna.json', 'package.json'];
files.forEach((file) => {
    var src = _path.resolve(rootDir, file);
    var dest = _path.resolve(outputDir, file);
    fsx.copySync(src, dest);
});
