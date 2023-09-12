let schedule = {};

function isEmpty(obj) {
    for (let prop in obj) {
        return false;
    }
    return true;
}

console.log( isEmpty(schedule) ); // true

schedule['8:30'] = 'get up';

console.log( isEmpty(schedule) ); // false

module.exports = isEmpty;