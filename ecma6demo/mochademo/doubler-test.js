//Created by HUQ on 9/5/15.

import expect from "expect.js";
import doubler from "../doubler";

export default () => {
   describe('doubler', () => {
      it('doubles a single integer argument', () => {
         expect(doubler(4)).to.equal(8);
         expect(doubler(-1)).to.equal(-2);
      });
      it('doubles each letter in a string', () => {
         expect(doubler('hello')).to.equal("hheelllloo");
         expect(doubler('lala.lala')).to.equal("llaallaa..llaallaa");
      });
      it('doubles each element in an object using the above rules', () => {
         expect(doubler({a:'a', b: 5, c:{Jameela: 65, Huq: "nope"}})).to.eql({a:'aa', b: 10, c: {Jameela: 130, Huq: "nnooppee"}});
         //expect(doubler([2,3.2,-5,0]).to.eql([4,6.4,-10,0]));
      });
     it('works on every argument', () => {
       expect(doubler(1, 'hi', [4,5])).to.eql([2, 'hhii', [8,10]]);
     });
     it('calls a function twice if the argument is a function', () => {
       let counter = 40;
       let fn = () =>{counter++;};
       doubler(fn);
       expect(counter).to.equal(42);
     });
   });
}




