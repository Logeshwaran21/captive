const words = ['spray', 'span', 'elites', 'exuberant', 'destruction', 'prestent'];
let s = 'sp';
test = `^${s}`;
// search = `/^${s}/`;
// console.log(search);
re = new RegExp();
console.log(re);
const result = words.filter(word => {
   word.match(test);
   
   
   // console.log(word);
})
console.log(words.sort());


// var re = /hi/g;
// console.log(re.test('hi there!'));
// console.log(RegExp.input );
// console.log(re.test('foo'));
// console.log(RegExp.$_  );
// // console.log(re.test('hi there!'));
// // console.log(re.test('hi there!'));
// //
// //
// // RegExp.$_;
// // re.test('hi world!');
// // RegExp.$_;
