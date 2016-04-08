/*==================================================
Function to make a struct.
This snippet is taken from here.
    http://stackoverflow.com/questions/502366/structs-in-javascript*/
function MakeStruct_Function(_variable_String){

    var variable_String_Array = _variable_String.split(" ");




    function MakeStruct_Void(){

        for(var i = 0; i < variable_String_Array.length; i ++)
            { this[variable_String_Array[i]] = arguments[i]; }

    }

    return MakeStruct_Void;

}
/*==================================================*/