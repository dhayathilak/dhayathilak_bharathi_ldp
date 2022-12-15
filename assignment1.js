// q1
function myfunc(func){
    console.log('hello')
}

function greet(){
    console.log('world !')
}


myfunc(greet())


// q2
const getLetter = (fname,lname)=>{
   return fname[0]+lname[0]
}

console.log(getLetter('mary','jane'))