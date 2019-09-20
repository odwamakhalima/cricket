var assert = require('assert')

var CricketScoreKeeper = require('../cricketFact')

describe('The cricket function', function () {


    it('should only return how many overs left ', function () {
        var cricFact = CricketScoreKeeper()

        
    
        cricFact.setOver(4)
        cricFact.add('-123ww')
        cricFact.add('-1234w')
        cricFact.add('-1234w')



        assert.equal(1,cricFact.oversLeft() );
    });

    it('should get the total score in an over ', function(){
        var cricFact = CricketScoreKeeper()
      
        cricFact.setOver(3)

        cricFact.add('-1234w')
        cricFact.add('-1234w')
        cricFact.over()
        

        assert.equal(20, cricFact.score());
    });

    it('should return the wickets left ', function(){
        var cricFact = CricketScoreKeeper()

        cricFact.setOver(4)
        

        cricFact.add('--wwww')
        cricFact.add('ww-www')
        cricFact.add('3-w-41')
        cricFact.over()
        

        assert.equal(7,cricFact.checkwicks() );
    });
    

    it('if the length of the string is not equal to 6 should return an error ', function(){
        var cricFact = CricketScoreKeeper()

        cricFact.setOver(4)
        

    
        cricFact.add('w-41')
        cricFact.over()
        

        assert.equal('Enter a valid score',cricFact.error() );
    });



});