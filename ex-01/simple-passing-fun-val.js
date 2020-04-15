// Fucntional programming simple passing value as function object

// Function declaration
function doIF(condition, func) {
    if(condition) {
        func()
    }
}

// Implementation

const x = 1;

doIF( x===1, function() {
    console.log( 'Value is equal to 1');
    
});

doIF(x < 10 && x > 20, () => {
    console.log(" Value is in between 10 and 20");
    
});

doIF ( x === "dog", (val = 'house') => {
    console.log(' The value is Dog ', val );
})