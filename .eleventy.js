module.exports = function (eleventyConfig){
    return{
        dir:{
            input: 'content',
            output: '_site',
            includes: '../_includes'
        }
    }
}