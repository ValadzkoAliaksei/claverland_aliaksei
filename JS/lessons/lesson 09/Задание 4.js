let salary = {
    Babaryko: 49,
    Tcepkalo: 13,
    Tcihanouski: 22,
    Lukashenko: 3,
    Cherechen: 1,
    Kanapackaya: 2,
    Dmitriyev: 1,
    Tabolich: 2,
    Gaydukevich: 3,
    'Against all': 4,
    middle () {
        let count = 0;
        let sum = 0;
        for (let  key in salary) {
            if(!isNaN(salary[key])) {
                sum += salary[key];
                count++;
            }
        }
        return(sum / count)
    },
    min() {
        let minimum = Infinity;
        for (let key in salary) {
            if (salary[key] < minimum) minimum = salary[key]
        }
        return(minimum);
    },
    max() {
        let maximum = 0;
        for (let key in salary) {
            if (salary[key] > maximum) maximum = salary[key]
        }
        return(maximum);
    },
};

alert(`Средняя зарплата равна ${salary.middle()}`);
alert(`Минимальная зарплата равна ${salary.min()}`);
alert(`Максимальная зарплата равна ${salary.max()}`);