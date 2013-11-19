var hash = require('./module');
var times = 4;
//number of times the program calculates 200,000 hashes
var time = hash.Pbkdf2(times);
//type of hash in this case it is Pbkdf2
//you can use Md5 Aes Bcrypt Sha-1
console.log(time);
//logs time to the command prompt