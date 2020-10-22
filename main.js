    //bai1
const getSalary = (salary) => {
    if (typeof(salary) !== 'number'|| salary < 1) {
        return 'out'
    } else if (salary === 15000) {
        console.log('tax = ',(salary) * 0.3)
        console.log ('income = ',(salary)*0.3)
    } else if ( salary >=7000 && salary < 15000) {
        console.log('tax =',(salary) * 0.2)
        console.log('income =',(salary) * 0.8)
    } else if (salary < 7000) {
        console.log('tax =', (salary) * 0.1)
        console.log('income =', (salary) * 0.9)
    }
}
    //bai2
    const setClass = (age) => {
        if (typeof(age) !== 'number') {
            return 'out'
        } else if (age == 16) {
            console.log('Accecpt')
        } else if (age < 16) {
            console.log('Ignore')
        } else {
            console.log('bigger')
        }
    }

    //bai3
    const getNumber = (n) => {
        if(typeof (n) !== 'number') {
            return 'out'
        } else if ((n - 100) == 0) {
            console.log ('n = 100')
        } else if ((n - 100) > 0) {
            console.log ('n > 100')
        } else {
            console.log ('n < 100')
        }
    }

    //bai4
    const findMax = (a, b, c) => {
        a, b, c == Number
        let maxValue = a
        if (b > a) {
            maxValue = b
        } if (c > a) {
            maxValue = c
        }
        console.log(maxValue)
     }

     //bai5
    const getRank = (text, midOfTerm, endOfTerm) => {
        (text, midOfTerm, endOfTerm) == Number
        const average = (text + midOfTerm + endOfTerm)/3
        if (average >= 9.0) {
            console.log('class A')
        } else if (average >= 7.0 && average < 9.0) {
            console.log('class B')
        } else if (average >= 5.0 && average < 7.0) {
            console.log('claas C')
        } else {
            console.log('class F')
        }
    }

    //bai6
    const getEquation = (a, b, c) => {
        a, b, c == Number
        const delta = (b*b - 4 * a * c)
        if (delta < 0) {
            console.log('Equation has countless roots')
        } else if (a == 0) {
            console.log('Root =' (-c/d))
        } else if (delta < 0) {
            console.log(`Equations hasn't Roots`)
        } else if (delta == 0) {
            console.log('Root =' -b/ 2 * a)
        } else {
            console.log ('x1 =' , (-b + Math.sqrt(delta)) / 2 * a,
            'x2 =', (-b - Math.sqrt(delta)) / 2 * a)
        }
    }

    //bai7
    const getMoney = (revenue) => {
        revenue == Number
        if(revenue <=100000) {
            console.log('commission =', revenue * 0.05)
        } else if (revenue > 100000 &&revenue <= 300000) {
            console.log('commission =', revenue * 0.1)
        } else if (revenue >= 300000) {
            console.log('commission =', revenue * 0.2)
        }
     }

     //bai8
     const payBill = minutes => {
         minutes == Number
         if(minutes <=50) {
             console.log('Bill =', (minutes * 600) + 25000)
         } else if (minutes > 50 && minutes <= 150) {
             console.log('Bill =', (minutes * 600) + (minutes - 50)*400 + 25000)
         } else {
             console.log('Bill =', (minutes * 600) + (minutes - 50)*400 + (minutes - 200)*200 + 25000)
         }
     }

