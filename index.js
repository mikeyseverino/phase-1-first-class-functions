function receivesAFunction (cb){
    console.log(cb());
}

function returnsANamedFunction(){
    return function namedFunction (){
        console.log();
    }

}

function returnsAnAnonymousFunction (){
    return function (){
        console.log();
    }
}