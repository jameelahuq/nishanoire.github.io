/**
 * Created by HUQ on 9/4/15.
 */
//class Doubler extends Function {

//  operationByType: {
//    number : (input) => 2 * input,
//    boolean: (input) => input,
//    string: (input) => input.split('').map(char => char + char).join(''),
//    object:
//    (input) => { Object.keys(input).forEach(key => input[key] = doubler(input[key]));
//    return input;
//    },
//      function: (input) => {input(); input(); return;
//
//
//}
//
//
//  }
//}





//let doubler = new Doubler();git


  let doubler = (...args) => {
  let singleArgDoubler =  {
    number : (input) => 2 * input,
    boolean: (input) => input,
    string: (input) => input.split('').map(char => char + char).join(''),
    object: (input) => {
    Object.keys(input).forEach(key => input[key] = doubler(input[key]));
    return input
    },
    function: (input) => {input(); input();}
  };
let result = args.map(input => singleArgDoubler[typeof(input)](input));
return result.length === 1 ? result[0] : result;

};

export default doubler;










//switch (typeof(input)) {
//  case "number":
//    return 2 * input;
//  case "boolean":
//    return input;
//  case "string":
//    return input.split('').map(char => char + char).join('');
//  case "object":
//    Object.keys(input).forEach(key => input[key] = doubler(input[key]));
//    return input;
//  case "function":
//  {
//    input();
//    input();
//    return;
//  }
//};





//if (input.length === 1) {
  //  input = input[0];
  //
  //  if (typeof(input) === "number") {
  //    return (parseFloat(input)) * 2;
  //  }
  //
  //  if (typeof(input) === "string") {
  //    return input[0].split('').map(char => char + char).join('');
  //  }
  //
  //  if (typeof(input) === "function") {
  //    console.log("function: ");
  //    input();
  //    input();
  //    console.log("end of function");
  //    return input;
  //  }
  //
  //  if (typeof(input) === "object") {
  //    Object.keys(input.forEach(e => input[e] = doubler(input[e])));
  //    return input;
  //  }
  //}  else {
  //      input.forEach(e => input[e] = doubler(input[e]));
  //      return input;
  //    }
  //}
  ////
  //
  //
  ////
  ////}
  //




//export default doubler;
