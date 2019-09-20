var assert = require('assert')

var crickets = require('../cricketFact')

describe('The cricket function', function(){
    var cricFact = crickets()

    it('should ', function(){
        assert.equal('Hello, Andre', cricFact.add());
    });

});