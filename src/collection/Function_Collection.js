/*==================================================
Function to check if this area is inside container area.*/
function CheckInsideArea_Bool(_Area_Struct, container_Area_Struct){

    var inside_Bool;





    if(
        _Area_Struct.xUL_Int + _Area_Struct.width_Int   >= container_Area_Struct.xUL_Int &&
        _Area_Struct.xUL_Int                            <= container_Area_Struct.xUL_Int + container_Area_Struct.width_Int &&
        _Area_Struct.yUL_Int + _Area_Struct.height_Int  >= container_Area_Struct.yUL_Int &&
        _Area_Struct.yUL_Int                            <= container_Area_Struct.yUL_Int + container_Area_Struct.height_Int
    ){ inside_Bool = true; }
    else if(
        _Area_Struct.xUL_Int + _Area_Struct.width_Int   >= container_Area_Struct.xUL_Int &&
        _Area_Struct.xUL_Int                            <= container_Area_Struct.xUL_Int + container_Area_Struct.width_Int &&
        _Area_Struct.yUL_Int + _Area_Struct.height_Int  >= container_Area_Struct.yUL_Int &&
        _Area_Struct.yUL_Int                            <= container_Area_Struct.yUL_Int + container_Area_Struct.height_Int
    ){ inside_Bool = false; }





    //console.log(_Area_Struct.xUL_Int                              <= container_Area_Struct.xUL_Int + container_Area_Struct.width_Int);
    //console.log(_Area_Struct.xUL_Int + _Area_Struct.width_Int     >= container_Area_Struct.xUL_Int);
    //console.log(_Area_Struct.xUL_Int + _Area_Struct.width_Int + " " + container_Area_Struct.xUL_Int);
    //console.log(_Area_Struct.yUL_Int                              <= container_Area_Struct.yUL_Int + container_Area_Struct.height_Int);
    //console.log(_Area_Struct.yUL_Int + _Area_Struct.height_Int    >= container_Area_Struct.yUL_Int);
    //console.log(_Area_Struct.yUL_Int + _Area_Struct.height_Int + " " + container_Area_Struct.yUL_Int);
    //console.log(inside_Bool);





    return inside_Bool;

}
/*==================================================*/




/*==================================================
Function to always check which node is the nearest to the bar object.
This function will executed because the bar need to determine which
    node to be deleted when the player wrongly pressed the button or
    missed the timing.*/
function CheckNearestBarNode_Void(){

    /*Check if this node is the nearest node to the bar
        object based on the y axis position.
    CAUTION: There is a bug if I forget to put .length
        fields in an Array object that returns no error.*/
    var nearestY_Int = height;
    for(
        var i_Int = 0;
        i_Int < global_Node_Object_Array.length;
        i_Int ++
    ){

        var y_Int = global_Node_Object_Array[i_Int].yUL_Int -global_yULBar_Int;
        if(
            y_Int > 0 &&
            y_Int < nearestY_Int
        ){

            nearestY_Int = y_Int;
            global_Node_Object_Array[i_Int].nearest_Bool = true;





            global_nearest_Node_Object = global_Node_Object_Array[i_Int];





            if(i_Int > 0){

                global_Node_Object_Array[i_Int - 1]
                    .nearest_Bool
                        = false;

            }

        }

    }


    /*If there is no node object in the main node array then there is
        no nearest node object to the bar object.
    Hence, set the global_nearest_Node_Object to null.*/
    if(global_Node_Object_Array == 0){ global_nearest_Node_Object = null; }


    //console.log("Hello world!");
    //console.log(global_Node_Object_Array[0].nearest_Bool);

}
/*==================================================*/





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