 const sumAge = require('./DataA.js')

 //array for testing
people = [
    {"id":1,"first_name":"Roselin","last_name":"Kilius","email":"rkilius0@com.com","gender":"Female","ip_address":"174.118.224.252","age":87},
    {"id":2,"first_name":"Hasty","last_name":"Playhill","email":"hplayhill1@state.tx.us","gender":"Male","ip_address":"174.109.68.191","age":55},
    {"id":3,"first_name":"Ashleigh","last_name":"Godsell","email":"agodsell2@spotify.com","gender":"Female","ip_address":"198.102.230.251","age":86},
    {"id":4,"first_name":"Ddene","last_name":"Crocket","email":"dcrocket3@miibeian.gov.cn","gender":"Female","ip_address":"110.33.231.195","age":67},
    {"id":5,"first_name":"Kenon","last_name":"Locke","email":"klocke4@hao123.com","gender":"Male","ip_address":"2.64.118.220","age":53}
]



totalAge = people.map(sumAge)
console.log(`the total age of the people is ${totalAge[totalAge.length-1]}`)