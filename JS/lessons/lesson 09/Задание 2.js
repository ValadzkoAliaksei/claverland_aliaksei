function Car(model) {
    this.model = model;
    this.engine = prompt('Ведите объём двигателя автомобиля','1,6');
    this.year  = prompt('Ведите год выпуска автомобиля','2002');
};

let car = new Car("Renault");
alert(car.model);
alert(car.engine);
alert(car.year);