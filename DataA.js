people = require('./MOCK_DATA.json')


//1. Count the number of females
function gender(sex){
    return function (object){
        return object.gender == sex
    }
}
women = gender('Female')
females = people.filter(women)

console.log(`the number of females is ${females.length}`)


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

olderThan35 = ageComparision(35, 'older')
oldPeople35 = people.filter(olderThan35)

console.log(`the number of people older than 35 is ${oldPeople35.length}`)


//3. The total age of all people summed.
age = 0
function sumAge(object){
    age += object.age
    return age
}

totalAge = people.map(sumAge)
age = 0

console.log(`the total age of the people is ${totalAge[totalAge.length-1]}`)


//4. Average age of all people.
aveAgeOfPeople = totalAge[totalAge.length-1]/totalAge.length
console.log(`the average age of all people is ${aveAgeOfPeople}`)


//5. Calculate the percentage of people who are older than 50.
olderThan50 = ageComparision(50, 'older')
oldPeople50 = people.filter(olderThan50)
percetage50 = oldPeople50.length/people.length

console.log(`the percentage of people older than 50 is ${Math.round(percetage50*100)}%`)


//6. Calculate the average age of everyone who is younger than 64. 
youngerThan64 = ageComparision(64, 'younger')
totalAgeYoungpeople64 = people.filter(youngerThan64).map(sumAge)
aveAgeOfPeopleYounger64 = totalAgeYoungpeople64[totalAgeYoungpeople64.length-1]/totalAgeYoungpeople64.length
console.log(`the average age of people under 64 is ${aveAgeOfPeopleYounger64}`)


//7. Find the largest age gap between two consecutive people.
function sortByAge(object){
        return object.age
    }

a = people.map(sortByAge)//.unshift(0) cant use unshift here??
b = [...a]//.push(0)
a.unshift(0)
b.push([0])

function vectors_op (object, index){
    return b[index] - object
}

function abs (object){
    return Math.abs(object)
}
c = a.map(vectors_op).map(abs)
d = Math.max(...c)

console.log(`The largest age gap between 2 consecutive people is ${d}`)


//8. Count the number of males that are younger than 43 but older than 22.
youngerThan43 = ageComparision(43, 'younger')
olderThan22 = ageComparision(22, 'older')
men = gender('Male')

between43_22 = people.filter(youngerThan43).filter(olderThan22).filter(men)
console.log(`The number of men between 43 and 22 is ${between43_22.length}`)


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

starts_L = nameFilter('L', 'first_name', 'starts')
peopleNameStart_L = people.filter(starts_L)

console.log(`The number of people whos name starts with L is ${peopleNameStart_L.length}`)


//10. Count the average age of everyone who is between the ages of 35 and 80 and their last name starts with the letter D. 
starts_D = nameFilter('D', 'last_name', 'starts')
youngerThan80 = ageComparision(80, 'younger')
olderThan35 = ageComparision(35, 'older')

function sum(prev, curr){
    return prev + curr.age
}
between80_35 = people.filter(starts_D).filter(youngerThan80).filter(olderThan35)
average = between80_35.reduce(sum ,0) / between80_35.length

console.log(`The average age of people between 80 and 35 and their last name starts with D is ${Math.round(average)}`)


//11. Increment the age with 1 year for everyone that has a first name that starts with letter K and last name that ends with letter s. 
FN_start_K = nameFilter('K', 'first_name', 'starts')
LN_ends_s = nameFilter('s', 'last_name', 'ends')

function increaseAge (object){
    return object.age + 1
}

peopleAge_plus_1 = people.filter(FN_start_K).filter(LN_ends_s).map(increaseAge)

console.log(`The ages increased by one are: ${peopleAge_plus_1}`)