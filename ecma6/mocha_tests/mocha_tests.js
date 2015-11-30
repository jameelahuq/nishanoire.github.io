/**
 * Created by HUQ on 9/5/15.
 */
import expect from "expect.js";
import doublerTest from "./doubler-test.js";


describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      //assert.equal(-1, [1,2,3].indexOf(5));
      //assert.equal(-1, [1,2,3].indexOf(0));
      expect([1,2,3].indexOf(0)).to.eql(-1)

    });
        //it('should return something greater than zero when the value is present', function () {
        //  assert.equal(1, [1,2,3].indexOf(2));
        //  assert.equal(2, [1,2,3].indexOf(3));
        //});

  });

});

doublerTest();