const compiler = require('@vue/compiler-core')
const fs = require('fs')
// this used to parse template
fs.readFile('./src/components/HelloWorld.vue', 'utf-8', (err,data) => {
    // console.log(err,data)
    if(err) {
        console.log(err);
        return;
    } else {
        const match = data.match(/\<template\>([\s\S]*)\<\/template\>/);
        if(match) {
            // 考虑fork@vue/compiler-core
            const ast = compiler.baseParse(match[0]);
        }
        // 这里就是ast树了 
    }
})

// try to parse tsx
// 这里看需求,目前vue3 基本使用vue-class-component来实现class风格api,是否需要做待定


