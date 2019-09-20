module.exports = function crickets(){
    var str ;
    var list = ['-',1,2,3,4,6,'w']
    var check;
    var newList = []
    var result;

    function add(){
        for(var i =1;i<list.length;i++){
           check = list[Math.floor(Math.random()*list.length)];
            
            newList.push(check)
            //console.log(newList)
        }
    }
    function score(){
        result = newList.reduce((a, b) => a + b, 2)
        console.log(result)
         return result
    }

    function addScore(newList){
        var total = 0
        for(var j=0;j<newList.length;j++){
            total += newList[j]
            
        }
        console.log(total)
    }

    return{
        add,
        score,
        addScore,
    }
}