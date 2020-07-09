function Sector(radius, measure) {
    this.radius = radius;
    this.measure = measure;
    this. square = function() {
        return(3.14 * this.radius ** 2 * this.measure / 360);
    };
};

let sector = new Sector(50, 50);
alert(`Площадь сектора равна ${sector.square().toFixed(2)}`);
