class Rectangle {
    // Constructor to initialize the essential properties of the object
    constructor (w, h) {
        this.w = w;
        this.h = h;
    }
    // Method to calculate the perimeter of the rectangle
    get perimeter () {
        return (2 * (this.w + this.h));
    }
    // Method to check if the rectangle is valid
    get isValid () {
        return (this.w > 0 && this.h > 0);
    }
    // Method to check if object A is bigger than object B
    isBiggerThan (perimeterB) {
        return (this.perimeter > perimeterB.perimeter);
    }
}

class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }
}