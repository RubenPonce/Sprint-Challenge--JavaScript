// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

class CuboidMaker{
    constructor(length,width,height){
    this.length = length;
    this.width = width;
    this.height = height;
    }
    volume(){
    return this.width * this.height * this.length
    }
    surfaceArea(){
    return 2 * (this.width * this.height +  this.height * this.length +  this.width * this.length);
   
    }
}
class CubeMaker extends CuboidMaker{
    constructor(length,width,height){
        super(length,width,height);
          this.side = length;
    }
    surfaceArea(){
        return 6 * this.side* this.side;
    }
    volume(){
        return this.side*this.side*this.side;
    }
}
   
    
    console.group('classes.js')

    const cuboid = new CuboidMaker(4,5,5);
    console.log(cuboid);
    
    // Test your volume and surfaceArea methods by uncommenting the logs below:
    console.log(cuboid.volume()); // 100
    console.log(cuboid.surfaceArea()); // 130
    
    const cube = new CubeMaker(5,5,5)
    console.log(cube.volume());
    console.log(cube.surfaceArea());
    
    console.groupEnd();
    
    
    
    
    