const compiler = require('@vue/compiler-core')
const fs = require('fs')
fs.readFile('./src/components/HelloWorld.vue', 'utf-8', (err,data) => {
    // console.log(err,data)
    if(err) {
        console.log(err);
        return;
    } else {
        const match = data.match(/\<template\>([\s\S]*)\<\/template\>/);
        console.log(compiler.baseParse(match[0]));
        // 这里就是ast树了 
    }
})

// console.log(compiler.baseParse('<div>hi</div>'))
