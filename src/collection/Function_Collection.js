/*==================================================
Function that triggered when the action button is pressed.*/
function ButtonMainPressed_Void(){

        global_barPressed_Bool = true;
        global_barPressedCountdown_Int
            = global_barPressedCountdownFixed_Int;





        /*For every time the action button being pushed
            check for the nearest node first.*/
        for(
            var i_Int = 0;
            i_Int < global_Node_Object_Array.length;
            i_Int ++
        ){

            //CheckNearestBarNode_Void(i_Int);
            //console.log(global_nearest_Node_Object);

        }

}
/*==================================================*/





/*==================================================
This function is for checking null value availability in an array.*/
function CheckArrayIntegrity_Bool(_Array){

    /*If an array has its elements all null or undefined then return this boolean to true.*/
    var allNull_Bool = true;

    for(var i_Int = 0; i_Int < _Array.length; i_Int ++){

        if(
            _Array[i_Int] != null ||
            _Array[i_Int] !== undefined
        ){
            allNull_Bool = false;
            return allNull_Bool;
        }

    }

    return allNull_Bool;

}
/*==================================================*/





/*==================================================
Function to check what is the furthest node from the bar.
The comments are nearly the same with CheckNearestBarNode_Void().*/
function CheckFurthestBarNode_Void(_index_Int){

    if(
        global_Node_Object_Array[_index_Int] != null &&
        global_Node_Object_Array[_index_Int] !== undefined
    ){

        var tempYUL_Int =
            global_yULBar_Int +
            global_Node_Object_Array[_index_Int].yUL_Int +
            global_Node_Object_Array[_index_Int]._Area_Struct.height_Int;





        if(
            tempYUL_Int > 0 &&
            tempYUL_Int > global_nodeFurthestYUL_Int
        ){





            //console.log("Hello world!");





            global_nodeFurthestYUL_Int = tempYUL_Int;
            global_Node_Object_Array[_index_Int].furthest_Bool = true;





            global_furthest_Node_Object = global_Node_Object_Array[_index_Int];





            if(_index_Int > 0){

                if(global_Node_Object_Array[_index_Int - 1]!= null){

                    global_Node_Object_Array[_index_Int - 1]
                        .furthest_Bool
                            = false;

                }

            }

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

    if(
        global_Node_Object_Array[_index_Int] != null &&
        global_Node_Object_Array[_index_Int] !== undefined
    ){

        var tempYUL_Int =
            global_yULBar_Int -
            global_Node_Object_Array[_index_Int].yUL_Int +
            global_Node_Object_Array[_index_Int]._Area_Struct.height_Int;





        if(
            tempYUL_Int > 0 &&
            tempYUL_Int < global_nodeNearestYUL_Int
        ){

            global_nodeNearestYUL_Int = tempYUL_Int;
            global_Node_Object_Array[_index_Int].nearest_Bool = true;





            global_nearest_Node_Object = global_Node_Object_Array[_index_Int];





            if(_index_Int > 0){

                if(global_Node_Object_Array[_index_Int - 1]!= null){

                    global_Node_Object_Array[_index_Int - 1]
                        .nearest_Bool
                            = false;

                }

            }

        }

    }





    //console.log("Hello world!");
    //console.log(global_Node_Object_Array[0].nearest_Bool);

}
/*==================================================*/





/*==================================================
A function to make a multi dimensional array.*/
function CreateMultiDimension_Array(_dimension_Int) {
    var _Array = new Array(_dimension_Int || 0),
        i_Int = _dimension_Int;

    if (arguments.length > 1) {

        var slicePrototype_Array = Array.prototype.slice.call(arguments, 1);
        while(i_Int --){

            _Array[_dimension_Int - 1 - i_Int] =
                CreateMultiDimension_Array.apply(this, slicePrototype_Array);

        }

    }

    return _Array;
}
/*==================================================*/





/*==================================================*/
function DeleteNearestNode_Void(){

    if(
        global_nearest_Node_Object != null &&
        global_nearest_Node_Object !== undefined
    ){

        /*Check if the nearest node is in the area of bar object.
        If so play the sound before delete the node.*/
        var insideBar_Bool = CheckInsideArea_Bool(global_nearest_Node_Object._Area_Struct, global_bar_Area_Struct);
        //var insideBar_Bool = true;
        if(insideBar_Bool == true){ global_nearest_Node_Object._Audio.play(); }
        else if(insideBar_Bool == false){ global_nodeMissed_Audio.play(); }





        global_nearest_Node_Object.delete_Bool = true;





        /*After delete the nearest node from bar, I need to
            setup new nearest node object.*/
        for(
            var i_Int = 0;
            i_Int < global_Node_Object_Array.length;
            i_Int ++
        ){ CheckNearestBarNode_Void(i_Int); }

    }





    //console.log(global_nearest_Node_Object.delete_Bool);
    //console.log(global_Node_Object_Array[0].delete_Bool);

}
/*==================================================*/





/*==================================================*/
function InitiateGlobalVariableFromScreenRatio_Void(){

    if(width >= height)         { GlobalVariableRatioControl(width); }
    else if(width < height)     { GlobalVariableRatioControl(height); }





    function GlobalVariableRatioControl(_widthOrHeight_Int){

        global_height_Int           = _widthOrHeight_Int/16;
        global_nodeSpeed_Int        = _widthOrHeight_Int/96;
        global_offset_Int           = _widthOrHeight_Int/96;
        global_strokeWeight_Int     = _widthOrHeight_Int/192;





        /*Limit so that these variable does not appear to small.*/
        if(global_height_Int        < 20)   { global_height_Int         = 20; }
        if(global_nodeSpeed_Int     < 1)    { global_nodeSpeed_Int      = 1; }
        if(global_offset_Int        < 5)    { global_offset_Int         = 5; }
        if(global_strokeWeight_Int  < 1)    { global_strokeWeight_Int   = 1; }





        global_offsetSizeFix_Int    = (global_offset_Int*2);





        //console.log(global_height_Int);
        //console.log(global_nodeSpeed_Int);
        //console.log(global_offset_Int);
        //console.log(global_strokeWeight_Int);

    }

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

    global_NodeGenerator_Object.nothing_Boolean = true;





    /*Check if this node is the nearest node to the bar
        object based on the y axis position.
    CAUTION: There is a bug if I forget to put .length
        fields in an Array object that returns no error.*/
    for(
        var i_Int = 0;
        i_Int < global_Node_Object_Array.length;
        i_Int ++
    ){

        if(global_Node_Object_Array[i_Int] != null){

            CheckFurthestBarNode_Void(i_Int);
            CheckNearestBarNode_Void(i_Int);
            global_Node_Object_Array[i_Int].Update_Node_Object();





            global_NodeGenerator_Object.nothing_Boolean = false;

        }

    }





    /*Set back to default value.*/
    global_nodeNearestYUL_Int   = height;
    global_nodeFurthestYUL_Int  = 0;





    /*Assign default nearest and furthest node is there is only
        one node active.*/
    if(global_Node_Object_Array.length == 1){

        global_furthest_Node_Object = global_Node_Object_Array[0];
        global_nearest_Node_Object  = global_Node_Object_Array[0];

    }





    if(global_Node_Object_Array.length == 0){ global_furthest_Node_Object = null; }
    /*If there is no node object in the main node array then there is
        no nearest node object to the bar object.
    Hence, set the global_nearest_Node_Object to null.*/
    if(global_Node_Object_Array.length == 0){ global_nearest_Node_Object = null; }

}
/*==================================================*/