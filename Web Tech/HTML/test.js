let a="He is, now, studying in University Of Dhaka !";
let x=74678;
//const b=[2,4,5,6];
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
let b,c,l;

l=points.length;
b=-Infinity;
while(--l)
{
    if(points[l]>b)
    {
        b=points[l];
    }
}


const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  cars.sort(function(a, b){return a.year - b.year});
//b=typeof b;
//console.log(b);
//console.log(cars.sort(function(a, b){return a.year - b.year}));
console.log(Math.ceil(3.56));