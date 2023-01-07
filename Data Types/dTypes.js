//string
"Hello World"
//number
7
//boolean
true 
false
//undefined
var x;
//null
var x = null;

//object
var x = {firstName:"John", lastName:"Doe"};
//symbol
var x = Symbol("my symbol");
//array
var x = ["John", "Doe"];
//function
function myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
}

//date
var x = new Date();
//regexp
var x = /w3schools/i;
//error
var x = new Error("Something went wrong");
//math
var x = Math.PI;
//json
var x = { "name":"John", "age":30, "city":"New York"};
//map
var x = new Map();
//set
var x = new Set();
//weakmap
var x = new WeakMap();
//weakset
var x = new WeakSet();
//arraybuffer
var x = new ArrayBuffer();
//dataview
var x = new DataView();
//int8array
var x = new Int8Array();
//uint8array
var x = new Uint8Array();
//uint8clampedarray
var x = new Uint8ClampedArray();
//int16array
var x = new Int16Array();
//uint16array
var x = new Uint16Array();
//int32array
var x = new Int32Array();
//uint32array
var x = new Uint32Array();
//float32array
var x = new Float32Array();
//float64array
var x = new Float64Array();
//promise
var x = new Promise();
//proxy
var x = new Proxy();
//reflect
var x = new Reflect();
//generator
function* idMaker() {
  var index = 0;
  while(true)
    yield index++;
}
//iterator
var x = [Symbol.iterator]();
//typedarray
var x = new Uint8Array(10);
//arrayiterator
var x = [Symbol.iterator]();
//stringiterator
var x = "foo"[Symbol.iterator]();
//mapiterator
var x = new Map()[Symbol.iterator]();
//setiterator
var x = new Set()[Symbol.iterator]();
//generatorfunction
function* idMaker() {
  var index = 0;
  while(true)
    yield index++;
}
//generatoriterator
var x = idMaker()[Symbol.iterator]();
//asyncfunction
async function f() {}
//asyncgeneratorfunction
async function* g() {}
//asyncgenerator
var x = g()[Symbol.asyncIterator]();
//asynciterator
var x = f()[Symbol.asyncIterator]();
//module
var x = module;
//immutabledata
var x = Immutable.Map({a:1, b:2, c:3});
//immutablelist
var x = Immutable.List([1,2,3]);
//immutablerecord
var x = Immutable.Record({a:1, b:2, c:3});
//immutablestack
var x = Immutable.Stack([1,2,3]);
//immutableset
var x = Immutable.Set([1,2,3]);
//immutableorderedset
var x = Immutable.OrderedSet([1,2,3]);
//immutableorderedmap
var x = Immutable.OrderedMap({a:1, b:2, c:3});
//immutablesequenc
var x = Immutable.Seq([1,2,3]);
//immutablecollection
var x = Immutable.Collection([1,2,3]);
//immutablemap
var x = Immutable.Map({a:1, b:2, c:3});
//immutablestack
var x = Immutable.Stack([1,2,3]);
//immutablelist
var x = Immutable.List([1,2,3]);
//etc