

// hello()

function hello(){
    console.log("Hello World")
}



// hello2()

const hello2 = function(){
    console.log("Hello World 2")
}


// Arrow functions

const hello3 = () => console.log("arrow funtion");


// hello3()


// Parameters and Arguments

const greet = (name)=> console.log("Hello " + name )

// greet("John")

// Return keyword

const add = (a, b) => {
    return a + b
}

const addWithoutReturnKeyword = (a, b) => a + b;

// const r = addWithoutReturnKeyword(70,30)
// console.log(r)

// const result = add(4,5)
// console.log(result)


// Callback function

function logHelloWorld(){
    console.log("Hello World")
}

function sample(name, callback){
    console.log(name)
    callback()
}

sample("Mike", logHelloWorld)