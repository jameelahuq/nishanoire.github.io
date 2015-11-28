/**
 * Created by HUQ on 9/8/15.
 */
function mask(str) {
 return str.split("").map(function (e, i) {
   return (i > str.length-5 ? e : '#'); }).join('');
}

console.log(mask("2848383820937")); //######0937
console.log(mask("01234")); //#1234
console.log(mask("567")); ///567



