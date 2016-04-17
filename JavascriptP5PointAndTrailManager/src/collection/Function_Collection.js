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





/*==================================================
Function to update all trail object in the main trail
    array.*/
function Update_global_Trail_Object_Array_Void(){

    for(
        var i_Int = 0;
        i_Int < global_Trail_Object_Array.length;
        i_Int ++
    ){

        global_Trail_Object_Array[i_Int].Update_Trail_Object();

    }

}
/*==================================================*/