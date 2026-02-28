var x=0;
var y=100;
var z=250;

let copy;

if(x < y)  {
    copy = x;
    x = y;
    y = copy;
} 
if(x < z) {
    copy = x;
    x = z;
    z = copy;
} 
if(y < z) {
     copy = y;
    y = z;
    z = copy;
}

console.log(x,y,z);

copy = null;

 
