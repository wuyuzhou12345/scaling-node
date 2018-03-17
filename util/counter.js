var i = 0;

function count(){
    return ++i;
}

exports.count = count;

exports.hello = function(){
    console.log("hello world");
};