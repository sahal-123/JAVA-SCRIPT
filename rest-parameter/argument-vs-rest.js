//compare argument vs rest perameter 

function shwoArts(){
    console.log(arguments);

}

shwoArts(1,2,3);  // not arrey

function showRest (...arg){
    console.log(arg);
    
}

showRest(1,2,3); //real array