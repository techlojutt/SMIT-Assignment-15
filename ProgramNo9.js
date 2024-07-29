// JavaScript program to calculate the area and perimeter of a circle.   

class Circle {
    constructor(r){
       this.radius = r ;
    }
   areaOfCircle(){
       var area = 3.14*this.radius*this.radius;
       return area ;
   }
   perimeterOfCircle(){
    var  perimeter = 2*3.14*this.radius;
    return perimeter ;
   }
}
var circleObj = new Circle(4);
var areaOfCircle  = circleObj.areaOfCircle();
var perimeterOfCircle = circleObj.perimeterOfCircle();
console.log("perimeter of circle = ",perimeterOfCircle)
console.log("Area of circle = ",areaOfCircle);
