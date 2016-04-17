/*==================================================
Check the true array length without elements those are
    null or undefined*/
function CheckTrueArrayLength_Int(_Array){

    var trueLength_Int = 0;
    for(
        var i_Int = 0;
        i_Int < _Array.length;
        i_Int ++
    ){

        if(
            _Array[i_Int] != null &&
            _Array[i_Int] !== undefined
        ){ trueLength_Int ++; }

    }




    return trueLength_Int;

}
/*==================================================*/