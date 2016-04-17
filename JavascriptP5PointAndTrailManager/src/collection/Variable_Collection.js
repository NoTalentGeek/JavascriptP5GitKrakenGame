var global_backgroundColor_String   = "rgba(50, 100, 150, 1)";
var global_offset_Int               = 20;
var global_animationSpeed_Int       = 10;
var global_strokeWeight_Int         = 10;
var global_Trail_Object_Array       = new Array(0);





function Update_global_Trail_Object_Array_Void(){

    for(
        var i_Int = 0;
        i_Int < global_Trail_Object_Array.length;
        i_Int ++
    ){

        global_Trail_Object_Array[i_Int].Update_Trail_Object();

    }

}





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