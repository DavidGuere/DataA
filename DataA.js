//1. Count the number of females
function gender(sex){
    return function (object){
        return object.gender == sex
    }
}

//2. Find all people that are older than 35.
function ageComparision(ageLim, OY){
    return function (object){
        switch (OY){
            case 'older':
                return object.age > ageLim
                break
            case 'younger':
                return object.age < ageLim
                break
        } 
    }
}

//3. The total age of all people summed.
function sumAge(array){
    return array.reduce((prev, curr) => prev + curr.age, 0) 
}

//7. Find the largest age gap between two consecutive people.
function sortByAge(object){
        return object.age
    }

function vectors_op (object, index){
    return b[index] - object
}

function abs (object){
    return Math.abs(object)
}
// Second method
function maxAgeGap(object){
    function first (object){
        return object.age
    }

    a = object.map(first)
    b = [...a]
    a.unshift(0)
    b.push(0)

    function second (object2, index){
        return b[index]-object2
    }

    function third (object3){
        return Math.abs(object3)
    }

    c = a.map(second).map(third)
    c.shift()
    c.pop()

    return Math.max(...c)
}

//9. Count the number of people who starts their first name with the letter L. 
function nameFilter (letter, name, position){
    return function (object){
        switch(position){
            case 'starts':
                return object[name][0] == letter
                break
            case 'ends':
                return object[name].slice(-1) == letter
        }
        
    }
}

//11. Increment the age with 1 year for everyone that has a first name that starts with letter K and last name that ends with letter s. 
function increaseAge (object){
    return object.age + 1
}

module.exports = {gender, ageComparision, increaseAge, sumAge, sortByAge, vectors_op, abs, nameFilter, maxAgeGap}