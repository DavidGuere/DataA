 
 const { increaseAge } = require('./DataA.js')
const fn = require('./DataA.js')

 // array for testing
people = [
    {"id":1,"first_name":"Roselin","last_name":"Kilius","email":"rkilius0@com.com","gender":"Female","ip_address":"174.118.224.252","age":87},
    {"id":2,"first_name":"Hasty","last_name":"Playhill","email":"hplayhill1@state.tx.us","gender":"Male","ip_address":"174.109.68.191","age":55},
    {"id":3,"first_name":"Ashleigh","last_name":"Godsell","email":"agodsell2@spotify.com","gender":"Female","ip_address":"198.102.230.251","age":86},
    {"id":4,"first_name":"Ddene","last_name":"Crocket","email":"dcrocket3@miibeian.gov.cn","gender":"Female","ip_address":"110.33.231.195","age":67},
    {"id":5,"first_name":"Kenon","last_name":"Locke","email":"klocke4@hao123.com","gender":"Male","ip_address":"2.64.118.220","age":53}
]

// testing gender function
women = fn.gender('Female')
females = people.filter(women)
output = [
    {"id":1,"first_name":"Roselin","last_name":"Kilius","email":"rkilius0@com.com","gender":"Female","ip_address":"174.118.224.252","age":87},
    {"id":3,"first_name":"Ashleigh","last_name":"Godsell","email":"agodsell2@spotify.com","gender":"Female","ip_address":"198.102.230.251","age":86},
    {"id":4,"first_name":"Ddene","last_name":"Crocket","email":"dcrocket3@miibeian.gov.cn","gender":"Female","ip_address":"110.33.231.195","age":67},
    ]

test('testing the output of gender + filter', () => {
    expect(females).toEqual(output)
})

men = fn.gender('Male')
males = people.filter(men)
outputMan =[
    {"id":2,"first_name":"Hasty","last_name":"Playhill","email":"hplayhill1@state.tx.us","gender":"Male","ip_address":"174.109.68.191","age":55},
    {"id":5,"first_name":"Kenon","last_name":"Locke","email":"klocke4@hao123.com","gender":"Male","ip_address":"2.64.118.220","age":53}
]

test('testing output of gender for males', () => {
    expect(males).toEqual(outputMan)
})

// testing ageComparision function
olderThan68 = fn.ageComparision(68, 'older')
youngerThan68 = fn.ageComparision(68, 'younger')

oldPeople68 = people.filter(olderThan68)
youngPeople68 = people.filter(youngerThan68)

outputOld = [
    {"id":1,"first_name":"Roselin","last_name":"Kilius","email":"rkilius0@com.com","gender":"Female","ip_address":"174.118.224.252","age":87},
    {"id":3,"first_name":"Ashleigh","last_name":"Godsell","email":"agodsell2@spotify.com","gender":"Female","ip_address":"198.102.230.251","age":86},
]

outputYoung = [
    {"id":2,"first_name":"Hasty","last_name":"Playhill","email":"hplayhill1@state.tx.us","gender":"Male","ip_address":"174.109.68.191","age":55},
    {"id":4,"first_name":"Ddene","last_name":"Crocket","email":"dcrocket3@miibeian.gov.cn","gender":"Female","ip_address":"110.33.231.195","age":67},
    {"id":5,"first_name":"Kenon","last_name":"Locke","email":"klocke4@hao123.com","gender":"Male","ip_address":"2.64.118.220","age":53}
]

test('Test if functions returns old people', () => {
    expect(oldPeople68).toEqual(outputOld)
})

test('Test if function returns young people', () => {
    expect(youngPeople68).toEqual(outputYoung)
})

// Testing age summation
ageFemales = fn.sumAge(females) //240
ageMales = fn.sumAge(males) //108
ageOldPeople68 = fn.sumAge(oldPeople68) //173
ageYoungPeople68 = fn.sumAge(youngPeople68) //175

test('Age of females should be 240', () => {
    expect(ageFemales).toEqual(240)
})

test('Age of males should be 108', () => {
    expect(ageMales).toEqual(108)
})

test('Age of people older than 68 should be 173', () => {
    expect(ageOldPeople68).toEqual(173)
})

test('Age of people younger than 68 should be 175', () => {
    expect(ageYoungPeople68).toEqual(175)
})

// Testing sorting age functions and age gap
sortAge = people.map(fn.sortByAge)

outputSort = [87, 55 ,86, 67, 53]

test('output of sortByAge has to be just the ages of people', () => {
    expect(sortAge).toEqual(outputSort)
})
cOut = [4, 4, -3]

cAbs = cOut.map(fn.abs)
test('the abs function should return the absolute value of c', () => {
    expect(cAbs).toEqual([4, 4, 3])
})


gapAge = fn.maxAgeGap(people)

test('maxAgeGap should return the largest age gap between 2 consecutive people (32)', () => {
    expect(gapAge).toEqual(32)
})


a = [1, 5, 7]
b = [2, 7, 9]

c = a.map(fn.vectors_op)
ba = [1, 2, 2]
console.log(c)

test('testing a-b with vector_op. This test fails is run before maxAgeGap (?)', () => {
    expect(c).toEqual(ba)
})

// Testing nameFilter
FNStarts_H = fn.nameFilter('H', 'first_name', 'starts')
FNS_H = people.filter(FNStarts_H)
SFNS_H = [
    {"id":2,"first_name":"Hasty","last_name":"Playhill","email":"hplayhill1@state.tx.us","gender":"Male","ip_address":"174.109.68.191","age":55},
]

test('all first names starting with H', () => {
    expect(FNS_H).toEqual(SFNS_H)
})

FNEnds_h = fn.nameFilter('h', 'first_name', 'ends')
FNE_h = people.filter(FNEnds_h)
SFNE_h = [
    {"id":3,"first_name":"Ashleigh","last_name":"Godsell","email":"agodsell2@spotify.com","gender":"Female","ip_address":"198.102.230.251","age":86},
]

test('all first names ending with h', () => {
    expect(FNE_h).toEqual(SFNE_h)
})

LNStarts_C = fn.nameFilter('C', 'last_name', 'starts')
LNS_C = people.filter(LNStarts_C)
SLNS_C = [
    {"id":4,"first_name":"Ddene","last_name":"Crocket","email":"dcrocket3@miibeian.gov.cn","gender":"Female","ip_address":"110.33.231.195","age":67},
]

test('all last names stating with C', () => {
    expect(LNS_C).toEqual(SLNS_C)
})

LNEnds_l = fn.nameFilter('l', 'last_name', 'ends')
LNE_l = people.filter(LNEnds_l)
SLNE_l = [
    {"id":2,"first_name":"Hasty","last_name":"Playhill","email":"hplayhill1@state.tx.us","gender":"Male","ip_address":"174.109.68.191","age":55},
    {"id":3,"first_name":"Ashleigh","last_name":"Godsell","email":"agodsell2@spotify.com","gender":"Female","ip_address":"198.102.230.251","age":86},
]

test('all last names ending with l', () => {
    expect(LNE_l).toEqual(SLNE_l)
})

// Testing age +1
incAge = people.map(fn.increaseAge)
SincAge = [88, 56, 87, 68, 54]

test('Increasing ages by 1', () => {
    expect(incAge).toEqual(SincAge)
})