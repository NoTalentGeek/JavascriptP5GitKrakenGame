/*==================================================
Function to check what is the furthest node from the bar.
The comments are nearly the same with CheckNearestBarNode_Void().*/
function CheckFurthestBarNode_Void(_index_Int){

    var tempYUL_Int = global_Node_Object_Array[_index_Int].yUL_Int - global_yULBar_Int;
    if(
        tempYUL_Int > 0 &&
        tempYUL_Int > global_nodeFurthestYUL_Int
    ){





        //console.log("Hello world!");





        global_nodeFurthestYUL_Int = tempYUL_Int;
        global_Node_Object_Array[_index_Int].furthest_Bool = true;





        global_furthest_Node_Object = global_Node_Object_Array[_index_Int];





        if(_index_Int > 0){

            global_Node_Object_Array[_index_Int - 1]
                .furthest_Bool
                    = false;

        }

    }

}
/*==================================================*/




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
    else{ inside_Bool = false; }





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
function CheckNearestBarNode_Void(_index_Int){

    var tempYUL_Int = global_Node_Object_Array[_index_Int].yUL_Int -global_yULBar_Int;
    if(
        tempYUL_Int > 0 &&
        tempYUL_Int < global_nodeNearestYUL_Int
    ){

        global_nodeNearestYUL_Int = tempYUL_Int;
        global_Node_Object_Array[_index_Int].nearest_Bool = true;





        global_nearest_Node_Object = global_Node_Object_Array[_index_Int];





        if(_index_Int > 0){

            global_Node_Object_Array[_index_Int - 1]
                .nearest_Bool
                    = false;

        }

    }





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




/*==================================================
Start countdown to set back bar pressed boolean to false.*/
function StartBarPressedCountdown_Void(){

    if(global_barPressedCountdown_Int > 0){

        global_barPressedCountdown_Int --;
        if(global_barPressedCountdown_Int <= 0){

            global_barPressed_Bool          = false;
            global_barPressedCountdown_Int  = 0;

        }

    }

}
/*==================================================*/





/*==================================================*/
function UpdateAllNode_Void(){

    /*Check if this node is the nearest node to the bar
        object based on the y axis position.
    CAUTION: There is a bug if I forget to put .length
        fields in an Array object that returns no error.*/
    for(
        var i_Int = 0;
        i_Int < global_Node_Object_Array.length;
        i_Int ++
    ){

        CheckFurthestBarNode_Void(i_Int);
        CheckNearestBarNode_Void(i_Int);





        global_Node_Object_Array[i_Int].Update_Node_Object();

    }





    if(global_Node_Object_Array == 0){ global_furthest_Node_Object = null; }
    /*If there is no node object in the main node array then there is
        no nearest node object to the bar object.
    Hence, set the global_nearest_Node_Object to null.*/
    if(global_Node_Object_Array == 0){ global_nearest_Node_Object = null; }

}
/*==================================================*/