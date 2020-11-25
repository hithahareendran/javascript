class Rectangle{
    constructor(width,height,colour)
    {
        [this.width,this.height,this.colour]=[width,height,colour]
    }
    calcArea()
    {
        return this.width * this.height;
    }
}
let rect = new Rectangle(4,5,'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.colour);
console.log(rect.calcArea());
