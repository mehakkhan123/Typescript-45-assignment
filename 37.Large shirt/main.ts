function make_shirt(size:string="large" , printMessage:string="I love TypeScript"){
    console.log(`creating a ${size} shirt with the ${printMessage} print on shirt`)
}

// calling a function with by default values
make_shirt()

// calling a function now with medium size & default message
make_shirt("medium")

// calling a function now with small size & different print message
make_shirt("small","i love AI")