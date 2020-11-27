people = require('./MOCK_DATA.json')
const fn = require('./DataA.js')

//1. Count the number of females
women = fn.gender('Female')
females = people.filter(women)

console.log(`1. the number of females is ${females.length}`)

//2. Find all people that are older than 35.
olderThan35 = fn.ageComparision(35, 'older')
oldPeople35 = people.filter(olderThan35)

console.log(`2. the number of people older than 35 is ${oldPeople35.length}`)

//3. The total age of all people summed.
totalAge = fn.sumAge(people)

console.log(`3. the total age of the people is ${totalAge}`)

//4. Average age of all people.
aveAgeOfPeople = totalAge/people.length
console.log(`4. the average age of all people is ${aveAgeOfPeople}`)

//5. Calculate the percentage of people who are older than 50.
olderThan50 = fn.ageComparision(50, 'older')
oldPeople50 = people.filter(olderThan50)
percetage50 = oldPeople50.length/people.length

console.log(`5. the percentage of people older than 50 is ${Math.round(percetage50*100)}%`)

//6. Calculate the average age of everyone who is younger than 64. 
youngerThan64 = fn.ageComparision(64, 'younger')
Youngpeople64 = people.filter(youngerThan64)
totalAgeYoungpeople64 = fn.sumAge(Youngpeople64)
aveAgeOfPeopleYounger64 = totalAgeYoungpeople64/Youngpeople64.length
console.log(`6. the average age of people under 64 is ${aveAgeOfPeopleYounger64}`)

//7. Find the largest age gap between two consecutive people.
a = people.map(fn.sortByAge)//.unshift(0) cant use unshift here??
b = [...a]//.push(0)
a.unshift(0)
b.push([0])
c = a.map(fn.vectors_op).map(fn.abs)
d = Math.max(...c)

console.log(`7. The largest age gap between 2 consecutive people is ${d}`)

//8. Count the number of males that are younger than 43 but older than 22.
youngerThan43 = fn.ageComparision(43, 'younger')
olderThan22 = fn.ageComparision(22, 'older')
men = fn.gender('Male')

between43_22 = people.filter(youngerThan43).filter(olderThan22).filter(men)
console.log(`8. The number of men between 43 and 22 is ${between43_22.length}`)

//9. Count the number of people who starts their first name with the letter L. 
starts_L = fn.nameFilter('L', 'first_name', 'starts')
peopleNameStart_L = people.filter(starts_L)

console.log(`9. The number of people whos name starts with L is ${peopleNameStart_L.length}`)

//10. Count the average age of everyone who is between the ages of 35 and 80 and their last name starts with the letter D. 
starts_D = fn.nameFilter('D', 'last_name', 'starts')
youngerThan80 = fn.ageComparision(80, 'younger')
olderThan35 = fn.ageComparision(35, 'older')

between80_35 = people.filter(starts_D).filter(youngerThan80).filter(olderThan35)
sumAgeBetween80_35 = fn.sumAge(between80_35)
average = sumAgeBetween80_35 / between80_35.length

console.log(`10. The average age of people between 80 and 35 and their last name starts with D is ${Math.round(average)}`)

//11. Increment the age with 1 year for everyone that has a first name that starts with letter K and last name that ends with letter s.
FN_start_K = fn.nameFilter('K', 'first_name', 'starts')
LN_ends_s = fn.nameFilter('s', 'last_name', 'ends')

peopleAge_plus_1 = people.filter(FN_start_K).filter(LN_ends_s).map(fn.increaseAge)

console.log(`11. The ages increased by one are: ${peopleAge_plus_1}`)
