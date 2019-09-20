module.exports = function CricketScoreKeeper() {
    var list = []
    var check;
    var newList = []
    var result;
    var wicket = 10;
    var overs = 0;
    var checkwick;
    var errorM

    function error() {
        return errorM
    }

    function setOver(set) {
        overs = set

    }
    function oversLeft() {
        return overs
    }

    function checkwicks() {
        return wicket
    }


    function add(lists) {
        list = lists.split('');
        if (lists.length == 6) {
            if (overs > 0) {
                if (wicket > 0) {
                    for (var i = 1; i < list.length; i++) {
                        var n = list.includes("w");
                        check = list[i];
                        newList.push(check);
                    }
                    if (n == true) {
                        wicket--
                    }
                    overs--
                }
            }
        }
        else {
            errorM = 'Enter a valid score'
        }
    }



    function over() {

        return newList
    }

    function score() {

        let numOr0 = n => isNaN(n) ? 0 : n

        result = newList.reduce((a, b) =>
            Number(numOr0(a)) + Number(numOr0(b)))

        return result
    }


    return {
        add,
        score,
        setOver,
        over,
        checkwicks,
        oversLeft,
        error

    }
}