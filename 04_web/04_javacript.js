// 0. 개요
/*
(1) 역사
JS는 ECMA script라고 한다. 현재 ECMA 4,5,6,7 버전이 상용화 혹은 상용화 전 단계에 있다.
가장 많이 사용하는 문법은 ECMA4이며, ECMA6부터 class 기능이 추가되었다.

(2) 장점 / 단점
장점 : 자유도가 높다
단점 : 프로그래머, 회사마다 컨벤션이 다를 수 있다. 오래되었기 때문에,

(3) 툴 (패키지, 파생언어)
npm : 패키지 관리 툴
node :
- JS 파생언어. 프론트엔드 개발자가 백엔드 파트를 개발할 때 사용한다.
- 싱글 스레드를 사용하기 때문에 연산량이 많으면 제 성능을 유지하지 못한다.
eg. 소켓 설정할 때 사용.
*/

// 1. 주석
// `//` : 한줄 주석
// /* test */ : 여러줄 주석

// 2.출력
// console.log('test');

function test(){
    console.log("any");
    console.log("data");
    console.log("science");
}
test();

// 3.식별자
/*
(1) 상수 : SNAKE_CASE (대문자 스네이크 케이스)
(2) 변수 : camelCase (카멜 케이스)
var {변수명} = "{변수명}"

(3) 모듈 : PascalCase (파스칼 케이스)
> 상황에 따라 다르게 사용할 수 있다.
(4) 특수기호 : $, _  cf. 파이썬의 특수기호 : _
_name : private variable, function
$target : selector 사용할 때. // jquery(JS framework) 쓸 때 사용.
*/
// var test = 'math';
// console.log(test);

var name = "sujin";
console.log(name);

var $target = 1;
console.log($target);


// 4. 연산자
/*
(1) (python처럼) +, -, *, /, % 를 기본적으로 사용할 수 있다
(2) (python과 달리) ++, --를 사용할 수 있다
*/
// var x = 2;
// var y = 5;
// console.log(x * y);

var a = 1;
var b = 2;
console.log(a+b);

// {}++ : number = 6, result = 5. 뒤에 쓰면 number값을 result에 대입한 후, 1을 증가시킨다
var number = 5;
var result = number++;
console.log(number, result);

// ++{} : number = 6, result = 6. 앞에 쓰면 1을 증가시킨 후, number값을 result에 대입한다
var result = ++number;
console.log(number, result);

// 5.자료형
/*
python : integer, float
js : number
*/

// (1) 기본 자료형
var a = 1; // Number (python : Integer)
// var b = 1.9; // Number (python : float)
var c = 'data'; // String (python : String)
// JS 문자열은 "" 보다 ''를 사용하는 것을 권장한다.
// JS는 html과 병용하는데, html에서 ''보다 ""을 주로 사용하기 때문에,
// ''를 써야 에러를 줄일 수 있다.

var d = [1,2,3]; // Object (python : List)
var e = {a:1, b:2}; // Object (python : dictionary)
var f = true; // Boolean
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f);

// (2) 추가 자료형
/*
null : 값이 없음을 지정
>
var a = 1; 이는 메모리의 주소를 받아서 해당 메모리에 값을 지정(저장)한다.
var a = null; 이는 변수 a에 지정된 메모리 값을 제거한다.
null이 식별자와 메모리 공간의 연결을 끊으면, garbage collector(GC)는 선언되지 않은 메모리 공간을 반환한다.
undefined : 값이 지정되지 않음
NaN : 존재하지 않는 데이터의 형태
*/
var a = null; var b; var c = 0/0;
console.log(a, b, c);

// 6.비교연산자
// (1) (python처럼) !=, ==, >, <, >=, <= 이러한 기본 비교연산자를 사용한다
// ==는 데이터 값만 비교한다
console.log(1 == 1); // true
console.log(1 == "1"); // true

// (2) (python과 달리) ===라는 비교연산자도 사용한다.
// ===는 데이터 값과 데이터 타입을 모두 비교한다.
console.log(1 == 1, 1 == "1", 1 === 1, 1 === "1");

console.log(1 === 1); // true
console.log(1 === "1"); // false

// (3) NaN : 비교연산을 사용하지 않는다.
// 비교연산에서 NaN이 한번이라도 등장하면 무조건 false를 리턴한다.
console.log(NaN === NaN);


// 7. 할당연산자
/*
+=, -=, *=, /=, %=...
*/
var a = 1;
a += 2;
console.log(a);


// 8. 논리연산자
// &&(and), ||(or)
console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);


// 9. 조건문

// (1) if, else, else if
if(true){
    console.log("hello");
}

if(false){
    console.log("hello");
}else{
    console.log("world");
}

if(false){
    console.log("hello");
}else if(true){
    console.log("dss");
}else{
    console.log("world");
}

// (2) false로 간주되는 데이터 : null, undefined, NaN, 0, ""
// (3) true로 간주되는 데이터 : [], {}, 위 데이터 외 모든 데이터

// 퀴즈 1. 점수를 입력하면 학점이 출력되는 코드를 작성.

var point = 88;
// TO DO

if(point >= 90){
    console.log("A");
}else if(point >= 80){
    console.log("B");
}else if(point >= 70){
    console.log("C");
}else if(point >= 60){
    console.log("D");
}else{
    console.log("F");
}

var a = 24;
if(a % 2 === 0){
    console.log('even');
}else if(a % 2 != 0){
    console.log('odd');
}


// 10. 반복문
// while, for, do while

var a = 1;
while(a < 6){
    console.log(a);
    a += 1;
}

// (1) while
var a = 10;
while(true){
    a ++;
    if(a === 12){
        continue;
    }
    if(a > 15){
        break;
    }
    console.log(a);
}

// (2) for
// for(var 초기값;조건;변수값 변경)
// python에서 for는 iterable한 변수를 하나씩 가져오는 것과 다르다
// ECMA6에서는 python처럼 for ... in ... 형태로 사용할 수 있게 되었다

for(var i=0; i<3; i++){
    console.log(i);
}

// for i in range(10); print(i)

for(var i=0; i<10; i++){
    console.log(i);
}

for(var i=0; i<11; i+=2){
    console.log(i);
}

// 11. 배열
var arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr);
console.log(arr[0]);

var arr = ['a', 'b', 'c'];
console.log(arr, arr[0]);

// 배열의 크기
console.log(arr.length);

// 배열 추가하기(python append)
var arr = ['a', 'b', 'c'];
arr.push('d');
arr.unshift('k');
console.log(arr);
var last = arr.pop();
console.log(last);
var last2 = arr.splice(0,2);
console.log(last2);

arr.push('f');
console.log(arr);
arr.unshift('z');
console.log(arr);

// 배열 마지막 엘리먼트 가져오기(python pop)
var result = arr.pop();
console.log(arr, result);

// 배열 자르기
var result2 = arr.splice(2,2);
console.log(arr, result2);


// 12. 객체(Object)

// 객체 선언
var lov = {};
lov.name = 'mandu';
lov.familyName = 'Kim';
console.log(lov);

for(var key in lov){
    console.log(key, lov[key]);
}

var obj = {};
obj.name = "sujin";
obj.familyName = "Kim";
console.log(obj);

// 객체의 key, value값 출력
for(var key in obj){
    console.log(key, obj[key]);
}

//
var user = {
    name: "seokyeong",
    age: 19,
    addr: 'paju',
    skill: function(){
        console.log('coding');
    }
};

// 13. OOP
// 모듈이 있으면 모듈을 가져와 사용하고, 없으면 아래처럼 모듈을 만들도록 한다.
var Module = Module || {};
(function(_Module){

    var _name = 'sujin';

    _Module.getName = function(){
        return _name;
    };

    _Module.setName = function(name){
        _name = name;
    };
})(Module); // 함수를 선언과 동시에 바로 실행한다.

// 함수형 프로그래밍

// 14. 함수
// 호이스팅(hoisting) : 변수를 선언하면, 변수가 최상단으로 올라가서 먼저 실행된다
function sum(num1, num2){
    return num1 + num2;
}
var result = sum(1, 2);
console.log(result);

var minus = function(num1, num2){
    return num1 - num2;
};
var result2 = minus(3, 2);
console.log(result2);


// 15. 스코프
var a = "dss1";
function disp(){
    a = "dss2"; // 'var'을 쓰지 않으면 전역(global)의 변수 a를 가져온다.
    console.log(a); // dss2
}
disp();
console.log(a); // dss2

var a = "dss1";
function disp(){
    var a = "dss2"; // 지역(local)의 변수를 새로 선언한다
    console.log(a);
}
disp();
console.log(a);


// 16. 즉시실행함수, 익명함수
// JS에서 즉시실행함수를 쓰는 이유는, JS가 프론트엔드 언어이기 때문이다.
// 프론트엔드 언어는 코드가 다 노출되기 때문에 누구나 브라우져에서 함수를 마음대로 가져다가 쓸 수 있다.
// 이를 방지하기 위해 즉시실행함수, 익명함수를 사용한다. 보안에 더 유리하다.

(function(){
    var name = 'seokyeong';
    var disp2 = function(){
        console.log(name);
    };
    disp2();
})();

(function(){
    var name = 'sujin';
    var disp = function(){
        console.log(name);
    };
    disp();
})();

var name = 'sujin';
var disp = function(){
    console.log(name);
};
disp();

// 17. Call back
// 콜백 함수는 함수의 argument로 함수를 받아서 모든 코드를 실행한 후에
// argument로 받은 함수를 실행한다.
// 비동기 통신을 할 때 주로 사용한다.

function getAny(call, n1, n2){
    var res = n1 + n2;
    call(res);
}
function disp(result){
    console.log(result);
}

function sqrt(result){
    console.log(result*result);
}

getAny(disp, 2, 3);
getAny(sqrt, 2, 3);

function getData(callback, num1, num2){
    var result = num1 + num2; // code
    callback(result); // code가 끝나고 지정한 특정 함수를 실행한다
}

function disp(result){
    console.log(result);
}

function sqrt(result){
    console.log(result*result);
}

getData(disp, 2, 3);
getData(sqrt, 2, 3);


// 18. 클로저(팩토리패턴으로 객체 생성), 프로토타입, es6 문법
// 추가 내용.
