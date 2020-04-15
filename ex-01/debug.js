// Learning Functional Programing in JS
// Enable / Desabled DEBUG MODE 

const DEBUG_MODE_ENABLED = true;
let debug;

if(DEBUG_MODE_ENABLED) {
    debug = pringDebugMessage;
} else {
    debug = doNothing;
}
  

// Debugging
debug("--- Some debugging code ---")

function pringDebugMessage(message) {
    console.log("DEBUG : ", message);
    
}

function doNothing(message) {
    console.log("Do Nothing : ", message);
    
}
