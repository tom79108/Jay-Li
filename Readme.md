https://nodejs.org/en/

https://d3js.org/

https://www.tensorflow.org/js

https://getbootstrap.com/

https://zh-hant.reactjs.org/

https://vuejs.org/

https://angularjs.org/

# download
https://nodejs.org/dist/v12.16.1/node-v12.16.1-x64.msi
https://code.visualstudio.com/
https://www.jetbrains.com/webstorm/

https://bitbucket.org/
https://github.com/

## for reference only
https://visualstudio.microsoft.com/zh-hant/vs/features/collaborate/?rr=https%3A%2F%2Fwww.google.com%2F

https://solidity.readthedocs.io/en/v0.4.24/introduction-to-smart-contracts.html

https://www.trufflesuite.com/

Environment variable


C:\Program Files\nodejs\

## validate environment

```
node --version
npm --version
npx --version
```

## install visual studio

```
node --version
npm --version
npx --version

code --version
```
## https://git-scm.com/download/win
```
node --version
npm --version
npx --version

code --version
git --version

https://github.com/adobe-fonts/source-code-pro

## update source code pro font
```
console.log("Hello world!")
3+5
var x=3+5
x
```
ctrl+c, ctrl+d (quit)

C:\Users\Admin
make a directory:

node_JS14hr_Mar_2020
cmd ==> open a cmd in current directory
code
file ==> open folder
C:\Users\Admin\node_JS14hr_Mar_2020

hello_world.js

console.log('hi this is our first .js file')


## direct execute a file
node hello_world.js

```
console.log('hi this is our first .js file')
3+5
var x=3+5
```
### http://johnny-five.io/

make sure directory:
C:\Users\Admin\node_JS14hr_Mar_2020

git init

CHANGE ==> +
(STAGED)
simple file first time checkin

## set username, email
git config --global user.name "MarkHo"
git config --global user.email "mark@uuu.com"

cd to your HOME DIRECTORY
more .gitconfig


cd c:\Users\Admin\node_JS14hr_Mar_2020
git status
git log

mkdir lab2_simple_npm
cd lab2_simple_npm
npm init -y


cd c:\Users\Admin\node_JS14hr_Mar_2020
code .


add plugin, add README.md

------------13:00-----------
under github/bitbucket
+
Repository

ucom_nodejs_20200309


cd c:\Users\Admin\node_JS14hr_Mar_2020

git remote add origin https://YOUR_USERNAME@bitbucket.org/YOUR_USERNAME/YOUR_PROJECT_NAME.git
git push -u origin master

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### `node.JS`,`npm`,`javascript`

npm config list

C:\Users\Admin\AppData\Roaming\npm


npm config get prefix

npm install npm --global
npm --version

### update npm packages
```
npm install npm --global
npm --version
```

npm list --global
npm list --global --depth=0

npm install uglify-js --global
npm list --global --depth=0

npx create-react-app lab3_simple_react

cd c:\Users\Admin\node_JS14hr_Mar_2020\lab3_simple_react

check-in code sofar:
practice npm list

commit
push
~~~~~~~~~~~~~~~~~~~~~~~~~
create directory
lab4_uglifyjs


uglify_demo1.js
~~~~~~~~~~~~~~~~~~~~~~~~~
var object1 = {
    "foo":250,
    "bar":300
}
object1.foo += object1.bar;
console.log(object1.foo);

cd c:\Users\Admin\node_JS14hr_Mar_2020\lab4_uglifyjs

node uglify_demo1.js


uglifyjs uglify_demo1.js -c -m --mangle-props

copy/paste to uglify_demo2.js

node uglify_demo2.js

uglifyjs uglify_demo1.js -c -m --mangle-props > demo3.js

https://webpack.js.org/

terminal.integrated.shell.windows

{
    "terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe"
}
bottom left GEAR
Settings
Text Editor
Font

'Source CodeVariable', 'Courier New', monospace
18
bold

npm search tensorflow
npm search vaadin

npm cache verify


npm install -g --unsafe-perm node-red

cd c:\Users\Admin\.node-red

npm install node-red-node-arduino
node-red

mkdir lab5_npm
cd lab5_npm

npm init --yes

npm install request --save

copy .gitignore from lab3 to lab5

tryme.js

request('http://www.uuu.com.tw', function(){})

var request = require('request');

request('http://www.uuu.com.tw', function (error, response, body) {
    if (!error && response.statusCode==200) {
        console.log(body)
    } else {
        console.log(error)
        console.log(response.statusCode)
        console.log(body)
    }
})

npm uninstall request
npm install request --save

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
{
    "editor.fontFamily": "'Source Code Variable','Courier New', monospace",
    "editor.fontSize": 24
}



lab6_simple_debug.js


var message1 = 'hello world';
var message2 = "hello world";
var message3 = 'h';
var message4 = "h";
console.log(message1);
console.log(message2);
console.log(message3);
console.log(message4);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
lab7_adv_debug.js


https://install.advancedrestclient.com/install
https://www.postman.com/

var http = require('http')
function processRecord(request, response){
    var body = 'Node.JS Tutorial\n'
    var contentLength = body.length
    response.writeHead(200,{
        'Content-Length':contentLength,
        'Content-Type':'text/plain'
    })
    response.end(body)
}
var server = http.createServer(processRecord)
console.log("server created, start listen to port 8765")
server.listen(8765)

GET ==> http://localhost:8765
~~~~~~~~~~~~~~~~~~~~~~~
var http = require('http')
function processRecord(request, response) {
    var body = 'Node.JS Tutorial\n'
    //var contentLength = body.length
    var contentLength = body
    response.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    })
    response.end(body)
}
var server = http.createServer(processRecord)
console.log("server created, start listen to port 8765")
server.listen(8765)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
npm install -g express-generator

cd c:\Users\Admin\node_JS14hr_Mar_2020
express lab8
copy .gitignore fro lab3 to lab8

npm install 

SET DEBUG=lab8:* & npm start


app.js

code complete in app.js


cd C:\Users\Admin\node_JS14hr_Mar_2020\lab3_simple_react
npm start

lab9_basic_type
~~~~~~~~~~~~~~~~~~~~~~~~
var x1 = 5
var x2 = 'hello'
var x3
var x4 = null
x2 = null
// reference a non exist variable x5
//x5 = 888
console.log(x1, x2, x3, x4, x5)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var x = 5
var y = 3.14
var z = true
var p = 'hello'
var q = "hello"
var t = [1,2,3]
console.log(typeof x, typeof y, typeof z, typeof p, typeof q)
console.log(typeof t)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var x1 = {}
var x2 = []
var x3 = [1, 2, 3]

function x4() { }
var x5
var x6=null
console.log(typeof x1, typeof x2, typeof x3, typeof x4, typeof x5,typeof x6,
    typeof undefined, typeof null)
console.log(Array.isArray(x1), Array.isArray(x2), Array.isArray(x3), Array.isArray(x4))

demo4.js

console.log(512*512)
console.log(2147483647+9999999999)
console.log(0.4+0.2)
console.log(0.11+0.12==0.23)
console.log(1-0.4==0.6)
console.log(1-0.5==0.5)
console.log(1-0.75==0.25)
console.log(1-0.3+0.1==0.8)

demo5.js

console.log(5/0, -5/0, 5/0==Infinity, -5/0==-Infinity, Infinity==-Infinity)
var x = "500"
var y = "3.14"
var z = "3.888"
console.log(parseInt(x), parseInt(y), parseInt(z))
console.log(parseFloat(x), parseFloat(y), parseFloat(z))
console.log(parseInt('ddd'))
console.log(5==NaN, parseInt('ddd')==NaN, isNaN(parseInt('ddd')))
console.log(isFinite(5/3), isFinite(5/0), isFinite(-5/0))

## Day2

check in yesterday code
basic type practice




cd c:\temp_phw

git clone https://USER_NAME@bitbucket.org/USERNAME/REPO_NAME.git

code ucom_nodejs_20200309


... push

demo6.js

// 0, "", NaN, null, undefined
var condition = undefined
if (condition) {
    console.log("return true")
} else {
    console.log("return false")
}

var elements = [0, "", NaN, null, undefined]
console.log("type of elements:", typeof elements, Array.isArray(elements))
~~~~~~~~~~~~~~~~~~~~~~
// 0, "", NaN, null, undefined
var condition = undefined
if (condition) {
    console.log("return true")
} else {
    console.log("return false")
}

var elements = [0, "", NaN, null, undefined]
console.log("type of elements:", typeof elements, Array.isArray(elements))

elements.forEach(evaluate)
function evaluate(value, index, array) {
    if (value) {
        console.log(index, value, "return true")
    } else {
        console.log(index, value, "return false")
    }
}
console.log(typeof evaluate)
console.log("### method2 ###")
elements.forEach((value, index, array) => {
    if (value) {
        console.log(index, value, "return true")
    } else {
        console.log(index, value, "return false")
    }
})
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var x1 = 'pqrst'
var x2 = "pqrst"
// var x3
//var x3 = null
console.log(typeof x1, x1.length)
console.log(typeof x2, x2.length)
//console.log(typeof x3, x3.length)
var x3 = "abcdefg1234567中文輸入也沒有問題"
// x3.forEach((v, i, a) => {
//     console.log(v)
// })
x3.split('').forEach(e => {
    console.log("*",e)
})

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log("I have " + 1 + 2 + " computers")
console.log(1 + 2 + " computers are mine")
console.log("Sunday".indexOf("day"))
console.log("Sunday".indexOf("DAY"))
console.log("Sunday".substr(3,3))
console.log("Sunday".slice(3,6))
var x1 = "Sunday,Monday,Tuesday,Wednesday".split(",")
console.log(typeof x1,Array.isArray(x1), x1)
console.log(x1[0],x1[1],x1[2],x1[3],x1[4],x1[5])
console.log(x1[-1],x1[-5], x1[100])
var y1 = "\t\n\r\t    abc def ghi   \t\n"
console.log(y1)
console.log(y1.trim())
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var e1 = "Firebase, Foo, foo, function, xyz".replace(/[Ffx]/g, 'q')
console.log(e1)
var e2 = "Firebase, Foo, foo, function, xyz".replace(/f/g,'q')
console.log(e2)
var e3 = "Firebase, Foo, foo, function, xyz".replace(/f/gi,'q')
console.log(e3)
var e4 = "Foo, foo, Ffoo".replace(new RegExp("[Ff]","g"),"q")
console.log(e4)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var o1 = {}
var o2 = {
    name: "NodeJS", duration: 14, period: ["Monday", "Tuesday"]
}
var o3 = {}
console.log(typeof o1, typeof o2)
console.log(o1, o2)
console.log(o2.name,o3.name)
o3["name"]="POOP"
o3["duration"]=35
o3["period"]=["Saturday"]
console.log(o2.name,o3.name)
console.log("object property count for o2:",Object.keys(o2).length)
console.log("object property count for o3:",Object.keys(o3).length)
delete o3.name
console.log(o2.name,o3.name)
delete o2.name
console.log(o2.name,o3.name)
console.log("object property count for o2:",Object.keys(o2).length)
console.log("object property count for o3:",Object.keys(o3).length)

https://github.com/axios/axios
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var x1 = {name:'Mark Ho',role:'engineer',grade:6}
var j1 = JSON.stringify(x1)
var x2 = ['Sunday','Monday','Tuesday']
var j2 = JSON.stringify(x2)
console.log(typeof x1, typeof j1, typeof x2, typeof j2)
console.log(x1, j1)
console.log(x2, j2)
var o1 = JSON.parse(j1)
var o2 = JSON.parse(j2)
console.log(Array.isArray(o1), typeof o1, o1)
console.log(Array.isArray(o2), typeof o2, o2)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var x1 = {name:'Mark Ho',role:'engineer',grade:6}
var j1 = JSON.stringify(x1)
var x2 = ['Sunday','Monday','Tuesday']
var j2 = JSON.stringify(x2)
console.log(typeof x1, typeof j1, typeof x2, typeof j2)
console.log(x1, j1)
console.log(x2, j2)
var o1 = JSON.parse(j1)
var o2 = JSON.parse(j2)
console.log(Array.isArray(o1), typeof o1, o1)
console.log(Array.isArray(o2), typeof o2, o2)

var temp1 = '{"name":"Mark Ho","role":"engineer","grade":6}'
var o1 = JSON.parse(temp1)
console.log(typeof temp1, typeof o1)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
https://bugzilla.mozilla.org/rest/bug/35
https://chrome.google.com/webstore/category/extensions?hl=zh-TW
json viewer
https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=zh-TW
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var s1 = '{"faults":[],"bugs":[{"qa_contact":"","is_open":false,"regressions":[],"resolution":"WONTFIX","duplicates":[],"keywords":[],"cc":["hchang.mozilla@gmail.com","jlaster@mozilla.com","rexyrexy2@gmail.com","tymerkaev@gmail.com","wlevine@gmail.com"],"whiteboard":"","type":"defect","is_creator_accessible":true,"mentors_detail":[],"is_cc_accessible":true,"creation_time":"1998-04-07T08:37:03Z","alias":"firstBug","priority":"P3","votes":0,"cf_fx_iteration":"---","mentors":[],"id":35,"depends_on":[],"status":"VERIFIED","groups":[],"comment_count":18,"target_milestone":"---","cf_qa_whiteboard":"","cc_detail":[{"id":475800,"email":"hchang.mozilla@gmail.com","name":"hchang.mozilla@gmail.com","nick":"hchang","real_name":"Henry Chang [:hchang]"},{"email":"jlaster@mozilla.com","id":555817,"name":"jlaster@mozilla.com","real_name":"Jason Laster [:jlast]","nick":"jlast"},{"real_name":"","nick":"rexyrexy2","name":"rexyrexy2@gmail.com","email":"rexyrexy2@gmail.com","id":463956},{"nick":"tymerkaev","real_name":"","name":"tymerkaev@gmail.com","id":356256,"email":"tymerkaev@gmail.com"},{"email":"wlevine@gmail.com","id":68465,"real_name":"Will Levine","nick":"wlevine","name":"wlevine@gmail.com"}],"creator_detail":{"nick":"weitsang","real_name":"","name":"weitsang@cs.cornell.edu","id":55,"email":"weitsang@cs.cornell.edu"},"regressed_by":[],"cf_fx_points":"---","last_change_time":"2018-07-16T03:22:35Z","op_sys":"Solaris","assigned_to_detail":{"name":"mcafee@gmail.com","real_name":"Chris McAfee","nick":"mcafee","email":"mcafee@gmail.com","id":1672},"flags":[],"platform":"Sun","summary":"Navigator does not free preference hash table when exit.","classification":"Graveyard","blocks":[],"url":"","dupe_of":null,"cf_user_story":"","version":"1998-03-31","severity":"minor","creator":"weitsang@cs.cornell.edu","component":"XFE","assigned_to":"mcafee@gmail.com","product":"MozillaClassic Graveyard","see_also":[],"is_confirmed":true,"cf_last_resolved":"1998-12-12T17:06:46Z"}]}'
var s2 = `
{
    "faults": [
      
    ],
    "bugs": [
      {
        "qa_contact": "",
        "is_open": false,
        "regressions": [
          
        ],
        "resolution": "WONTFIX",
        "duplicates": [
          
        ],
        "keywords": [
          
        ],
        "cc": [
          "hchang.mozilla@gmail.com",
          "jlaster@mozilla.com",
          "rexyrexy2@gmail.com",
          "tymerkaev@gmail.com",
          "wlevine@gmail.com"
        ],
        "whiteboard": "",
        "type": "defect",
        "is_creator_accessible": true,
        "mentors_detail": [
          
        ],
        "is_cc_accessible": true,
        "creation_time": "1998-04-07T08:37:03Z",
        "alias": "firstBug",
        "priority": "P3",
        "votes": 0,
        "cf_fx_iteration": "---",
        "mentors": [
          
        ],
        "id": 35,
        "depends_on": [
          
        ],
        "status": "VERIFIED",
        "groups": [
          
        ],
        "comment_count": 18,
        "target_milestone": "---",
        "cf_qa_whiteboard": "",
        "cc_detail": [
          {
            "id": 475800,
            "email": "hchang.mozilla@gmail.com",
            "name": "hchang.mozilla@gmail.com",
            "nick": "hchang",
            "real_name": "Henry Chang [:hchang]"
          },
          {
            "email": "jlaster@mozilla.com",
            "id": 555817,
            "name": "jlaster@mozilla.com",
            "real_name": "Jason Laster [:jlast]",
            "nick": "jlast"
          },
          {
            "real_name": "",
            "nick": "rexyrexy2",
            "name": "rexyrexy2@gmail.com",
            "email": "rexyrexy2@gmail.com",
            "id": 463956
          },
          {
            "nick": "tymerkaev",
            "real_name": "",
            "name": "tymerkaev@gmail.com",
            "id": 356256,
            "email": "tymerkaev@gmail.com"
          },
          {
            "email": "wlevine@gmail.com",
            "id": 68465,
            "real_name": "Will Levine",
            "nick": "wlevine",
            "name": "wlevine@gmail.com"
          }
        ],
        "creator_detail": {
          "nick": "weitsang",
          "real_name": "",
          "name": "weitsang@cs.cornell.edu",
          "id": 55,
          "email": "weitsang@cs.cornell.edu"
        },
        "regressed_by": [
          
        ],
        "cf_fx_points": "---",
        "last_change_time": "2018-07-16T03:22:35Z",
        "op_sys": "Solaris",
        "assigned_to_detail": {
          "name": "mcafee@gmail.com",
          "real_name": "Chris McAfee",
          "nick": "mcafee",
          "email": "mcafee@gmail.com",
          "id": 1672
        },
        "flags": [
          
        ],
        "platform": "Sun",
        "summary": "Navigator does not free preference hash table when exit.",
        "classification": "Graveyard",
        "blocks": [
          
        ],
        "url": "",
        "dupe_of": null,
        "cf_user_story": "",
        "version": "1998-03-31",
        "severity": "minor",
        "creator": "weitsang@cs.cornell.edu",
        "component": "XFE",
        "assigned_to": "mcafee@gmail.com",
        "product": "MozillaClassic Graveyard",
        "see_also": [
          
        ],
        "is_confirmed": true,
        "cf_last_resolved": "1998-12-12T17:06:46Z"
      }
    ]
  }
  `
  var o1 = JSON.parse(s1)
  var o2 = JSON.parse(s2)
  console.log(typeof o1, typeof o2)
  console.log(o1)
  console.log(o2)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var a1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
var a2 = Array.from('abcdefg')
var a3 = 'abcdefg'.split('')
console.log(a1, a2, a3)
console.log(Array.isArray(a1),Array.isArray(a2),Array.isArray(a3))
var a4 = new Array()
a4.push('a')
a4.push('b')
a4.push('c')
a4.push('d')
console.log(a4, Array.isArray(a4))
// push, pop
console.log(a1.pop(), a1)
a1.push('G')
console.log(a1)
console.log(a2.shift(), a2)
a2.unshift('A')
console.log(a2)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var a1 = [1, 2, 3, 4, 5, 6, 7, 8]
var r1 = a1.join()
console.log(typeof r1, r1)
var a2 = ['red', 'yellow', 'blue']
var r2 = a2.join()
console.log(typeof r2, r2)
var r3 = a2.join('-')
console.log(r3)
var a3 = ['www', 'uuu', 'com', 'tw']
var r4 = a3.join('.')
console.log(r4)
array4 = Array.from('HelloWorld')
console.log(array4.sort())
var sum = 0
a1.forEach(function (element) { sum += element }, this)
console.log("summation of a1=", sum)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var util = require('util')

console.log(123 == '123', 25.4 == '25.4', 0 == '0')
console.log(123 === '123', 25.4 === '25.4', 0 === '0')
var a1 = [null, undefined, 0, false, NaN, '']
for (i = 0; i < a1.length; i++) {
    for (j = i + 1; j < a1.length; j++) {
        result = util.format('%s == %s? %s',a1[i], a1[j], a1[i]==a1[j])
        console.log(result)
        console.log('is', a1[i], '===', a1[j], '==>',a1[i] === a1[j])
        console.log('------------')
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var x = 123
var y = new Number(123)
console.log(typeof x, typeof y)
console.log(x == y, x === y)

function echoMe(name) {
    console.log("echo name:",name)
}
echoMe("Mark")
echoMe()
echoMe(undefined)
echoMe(null)
echoMe('p','q','r')
echoMe(['p','q','r'])
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function mySum() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(mySum())
console.log(mySum(1, 2, 3))
console.log(mySum('1', '2', '3'))
var x1 = function (a, b) {
    return a * b
}
console.log(x1(3, 5))

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var token = 'abc'
var y = function () {
    var token = 'def'
    console.log('inside', token)
}
console.log('first outside', token)
y()
console.log('second outside', token)
var x1 = function (x, y) {
    return x * y
}
var x2 = (x, y) => { return x * y }
var x3 = (x, y) => x * y
console.log(x1(3, 4))
console.log(x2(6, 7))
console.log(x3(8, 9))
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var x1 = [null, undefined, 0, false, "", NaN]
x1.forEach(e => console.log(e ? "true" : "false"))

var x2 = [1, 3, 5, 7, 9, 2, 4, 6, 8]
for (index in x2) {
    console.log('index=', index, " ,value=", x2[index])
}
for (item of x2){
    console.log('value=',item)
}
var x3 = {
    courseName:"NoJS",
    duration:14,
    location:"Taipei"
}
for (k in x3){
    console.log(k, "/", x3[k])
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function Car() {
    // field
    this.speed = 0
    this.number = ""
    this.fuel = 0
    // method
    this.setSpeed = function (speed) { this.speed = speed }
    this.isOverSpeed = function (speedLimit) {
        return this.speed > speedLimit
    }
}
var myCar1 = new Car()
console.log(typeof myCar1, typeof Car)
myCar1.setSpeed(60)
myCar1.number = "AAA-1234"
console.log(myCar1.number + " has speed:" + myCar1.speed)
console.log(myCar1.isOverSpeed(100), myCar1.isOverSpeed(50))
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function Car() {
}
// field
Car.prototype.speed = 0
Car.prototype.number = ""
Car.prototype.fuel = 0
// method
Car.prototype.setSpeed = function (speed) { Car.prototype.speed = speed }
Car.prototype.isOverSpeed = function (speedLimit) {
    return Car.prototype.speed > speedLimit
}
function HybridCar() {

}
HybridCar.prototype = new Car()
HybridCar.prototype.__proto__ = Car.prototype
HybridCar.prototype.batteryLimit = 50000
HybridCar.prototype.totalLength = function () {
    return this.fuel * 21 + this.batteryLimit / 500
}

var myCar1 = new Car()
console.log(typeof myCar1, typeof Car)
myCar1.setSpeed(60)
myCar1.number = "AAA-1234"
console.log(myCar1.number + " has speed:" + myCar1.speed)
console.log(myCar1.isOverSpeed(100), myCar1.isOverSpeed(50))
//
var myCar2 = new HybridCar()
console.log(typeof myCar2, typeof HybridCar)
myCar2.setSpeed(60)
myCar2.number = "DDD-5678"
console.log(myCar2.number + " has speed:" + myCar2.speed)
console.log(myCar2.isOverSpeed(100), myCar2.isOverSpeed(50))
myCar2.batteryLimit=100000
myCar2.fuel = 70
console.log("myCar2 total length=",myCar2.totalLength())

finish basic type

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function oops() {
    throw new Error("something went wrong, oops!")
}
try {
    oops()
    console.log("execution inside try, after oops")
} catch (e) {
    console.log(typeof e)
    console.log("reason:", e.toString())
    console.log(e)
}
oops()
// this line will not be show
console.log("program terminate line---")

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
global.coffee = 'hot latte'
global.juice = 'lemonade'
tea = 'earl gray'
function printSomething(name){
    console.time(global[name])
    console.log(global[name])
    console.warn(global[name])
    console.error(global[name])
    console.timeEnd(global[name])
}
console.time('TOTAL')
printSomething('coffee')
printSomething('juice')
printSomething('hello')
printSomething('tea')
console.timeEnd('TOTAL')

under project:
lab10_modules ==> make a directory

under foo.js
module.exports = {
    qoo: function (data) {
        console.log("[foo]:[qoo]", data)
    }
}

under bar.js

module.exports = {
    ooo: function (data) {
        console.log("[bar]:[ooo]", data)
    }
}

under index.js
var foo = require('./foo')
var bar = require('./bar')
console.log('inside index.js')
foo.qoo('hello world')
bar.ooo('hi js modules')
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log(x2)
//console.log(x1)
x1 = 'hello'
var x2 = 'world'
console.log(typeof x1, typeof x2)
console.log(x1, x2)
function printMessage() {
    console.log( 'inside printmessage',x1, x2)
}
printMessage()

~~~~~~~~~~~~~~~~~~~~~~~~~~
"use strict";
console.log(x2)
//console.log(x1)
var x2 = 'world'
x1 = 'hello'
console.log(typeof x1, typeof x2)
console.log(x1, x2)
function printMessage() {
    console.log( 'inside printmessage',x1, x2)
}
printMessage()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function foo() {
    console.log('inside foo begin:', current)
    var current = 300;
    implyGlobal = 500;
    console.log('inside foo after:', current)
    console.log('inside foo, implyglobal=', implyGlobal)
}

foo()
//console.log(current)
console.log(implyGlobal)
implyGlobal += 300
console.log(implyGlobal)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var x1 = 100
x2 = 200
console.log(x1, x2)
console.log(global.x1, global.x2)
delete global.x1
delete global.x2
console.log(x1, x2)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function varTest() {
    var x = 100;
    console.log("beginning, x=", x);
    if (true) {
        //var x = 200;
        x = 200;
        console.log("inside, x=", x);
    }
    console.log("outside, x=", x);
}
function letTest() {
    let y = 30;
    console.log("beginning, y=", y);
    if (true) {
        let y = 50;
        console.log("inside, y=", y);
    }
    console.log("outside, y=", y);
}

varTest();
letTest();
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function scopeTest() {
    var x2 = 5
    var x2 = '500'
    console.log(x2)
    let x3 = 3.14
    //let x3 = 'pi'
    console.log(x3)
}

function scopeTest2() {
    var j = 0;
    for (let i=j; i<10; i++){
    //for (var i=j; i<10; i++){
        console.log(i);
    }
    //console.log(i,j);
}

scopeTest()
scopeTest2()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var a = 100;
var b = 200;

if (true) {
    let a = 50;
    var b= 400;
    console.log(a);
    console.log(b);
}
console.log(a)
console.log(b)

//const PROGRAM_TITLE;
const PROGRAM_TITLE="Hello WORLD";
//PROGRAM_TITLE += "Hi";
//const PROGRAM_TITLE = "Hi";
const MAX1 = 1;
let i = 100;
const CONST2 = i+1;
console.log(MAX1, i, CONST2)
i+=20
console.log(MAX1, i, CONST2)
//CONST2 += 50;
const AR = [1,2,3,4,5];
console.log(AR)
AR.push(6)
console.log(AR)
var AR2 = [1,2,3,4,5];
AR2.push(6)
console.log(AR2)
AR2 = ['p','q','r']
console.log(AR2)
//AR = ['P','Q','R']
console.log(AR)


data\\info.txt
copy paste from wiki

var process = require('process')
console.log(process.cwd())

var fs = require("fs")
console.log("Program start")
var data = fs.readFileSync('data\\info.txt')
console.log(data.toString())
console.log("Program terminated")
~~~~~~~~~~~~~~~~~~~~~~~
setTimeout(()=>{console.log("I am ready, can start to work")}, 2000)
setTimeout(()=>{console.log("I am ready, can start to work")}, 2000)
setTimeout(()=>{console.log("I am ready, can start to work")}, 2000)
setTimeout(()=>{console.log("I am ready, can start to work")}, 2000)
setTimeout(()=>{console.log("I am ready, can start to work")}, 2000)
console.log("doing something in main thread")
~~~~~~~~~~~~~~~~~~~~~~
setTimeout(()=>{
    console.log("prepare for stage2")
    setTimeout(()=>{console.log("prepare for stage3")},2000)
},2000)

console.log("start working")
~~~~~~~~~~~~~~~~~~~~~~~~
"use strict";
var fs = require('fs')

fs.open('data\\info.txt', 'r', (error, handle) => {
    if (error){
        return console.log(error)
    }
    console.log("file open successful, continue")
 });

~~~~~~~~~~~~~~~~~~~
"use strict";
var fs = require('fs')
console.log("program start")
fs.open('data\\info.txt', 'r', (error, handle) => {
    if (error) {
        return console.log(error)
    }
    console.log("file open successful, continue")
    var buffer = new Buffer(10000, 0)
    fs.read(handle, buffer, 0, 10000, null, (error, length) => {
        console.log("total:", length, "read")
        const result = buffer.slice(0, length)
        console.log("data read:", result.toString())
        fs.close(handle, () => { })

    })
});
console.log("program finish")
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
setTimeout(()=>{
    try{

        throw new Error("oops, happen something in another thread..")
    }catch(e){
        console.warn('got an error:',e)
    }
},2000)
console.log('program terminated')
~~~~~~~~~~~~~~~~~~~~~~~~~~
try {
    
    setTimeout(() => { throw new Error("HAHA") }, 2000)
} catch (e) {
    console.log("got an error:"+e)
}
console.log("program terminated")

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        try{
            //throw new Error("oops!")
            console.log("no error")
            resolve(1000)
        } catch(e){
            reject(e)
        }
    },2000)
})
console.log("start p1")
p1.then(result=>console.log("OK! result="+result))
.catch(error=>console.error("Found exception:"+error))
console.log("stop p1")