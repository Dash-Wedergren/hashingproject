var http = require('http');
var fs = require('fs');
var crypto = require('crypto');
var Crypto = require('ezcrypto').Crypto; 
var md5 = require('MD5'); 
var bcrypt = require('bcrypt-nodejs'); 
var sha1 = require('sha1'); 
var num = 0; 
var timeuser = new Array();
var times;
var result; 
var timer = new Array;
var elapsed = 0; 
var o;
var crypto = require('crypto'); 
exports.Md5 = function(usertime){
for(var o = 0;o<usertime;o++){
var start = new Date().getTime(); 
for (var i = 0;i<200000;i++) 
{ 
var random = Math.floor(Math.random()*2*1000000000000072*Math.random());       

var hash = md5(random); 
} 
var time = new Date().getTime() - start; 
elapsed = Math.floor(time / 100) / 10;  
timeuser[o] = time;
time = 0;
elapsed = 0;
}
return timeuser;
}

exports.Bcrypt = function(usertime){
for(var o = 0;o<usertime;o++){
var start = new Date().getTime(); 
for (var i = 0;i<20;i++) 
{ 
var random = Math.floor(Math.random()*2*1000000000000072*Math.random());       
var hash = bcrypt.hashSync(random); 
} 
var time = new Date().getTime() - start; 
elapsed = Math.floor(time / 100) / 10;
timeuser[o] = time*10181; 
timeuser[o] = Math.floor(timeuser[o]/60);
time = 0;
elapsed = 0;
}
return timeuser;
}

exports.Sha1 = function(usertime){
for(var o = 0;o<usertime;o++){
var start = new Date().getTime(); 
for (var i = 0;i<200000;i++) 
{ 
var random = Math.floor(Math.random()*2*1000000000000072*Math.random());       
var hash = sha1(random); 
} 
var time = new Date().getTime() - start; 
elapsed = Math.floor(time / 100) / 10; 
timeuser[o] = time;
time = 0;
elapsed = 0;
}
return timeuser;
}

exports.Aes = function(usertime){
for(var o = 0;o<usertime;o++){
var start = new Date().getTime(); 
for (var i = 0;i<200000;i++) 
{ 
var random = Math.floor(Math.random()*2*1000000000000072*Math.random());       
var hash = Crypto.AES.encrypt("random", "Secret Passphrase"); 
} 
var time = new Date().getTime() - start; 
elapsed = Math.floor(time / 100) / 10; 
timeuser[o] = time; 
time = 0;
elapsed = 0;
}
return timeuser;
}

exports.Pbkdf2 = function(usertime){
for(var o = 0;o<usertime;o++){
var start = new Date().getTime(); 
for (var i = 0;i<200000;i++) 
{ 
var random = Math.floor(Math.random()*2*1000000000000072*Math.random());       
crypto.pbkdf2(random.toString(), "random", 5, 6, function(err, key) {
                if (err) return callback(err);
                var hash = _btoa(key);
                hash = [ 'pbkdf2sha1', iterations, salt, hash ].join('$');
                callback(null, hash);
                console.log(hash);
        });
} 
var time = new Date().getTime() - start; 
elapsed = Math.floor(time / 100) / 10; 
timeuser[o] = time;  
time = 0;
elapsed = 0;
}
return timeuser;
}