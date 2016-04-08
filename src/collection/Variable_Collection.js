var global_screen_Area_Struct;  /*Variable initiated in sketch.js.*/
var global_Node_Object_Array    = new Array();
var global_nodeSpeed_Int        = 5;
var global_offset_Int           = 10;
var global_offsetSizeFix_Int    = (global_offset_Int*2);
var global_strokeWeight_Int     = 5;





var global_bar_Area_Struct; /*Variable initiated in Bar_Object.js.*/
var global_xULBar_Int;      /*Variable initiated in Bar_Object.js.*/
var global_yULBar_Int;      /*Variable initiated in Bar_Object.js.*/
var global_widthBar_Int;    /*Variable initiated in Bar_Object.js.*/
var global_heightBar_Int    = 50 - global_offsetSizeFix_Int;
/*==================================================*/
function Set_global_xULBar_Int_Void(_global_xULBar_Int){

    global_xULBar_Int = _global_xULBar_Int;
    global_bar_Area_Struct = new Area_Struct(
        global_widthBar_Int,
        global_heightBar_Int,
        global_xULBar_Int,
        global_yULBar_Int
    );

}
function Set_global_yULBar_Int_Void(_global_yULBar_Int){

    global_yULBar_Int = _global_yULBar_Int;
    global_bar_Area_Struct = new Area_Struct(
        global_widthBar_Int,
        global_heightBar_Int,
        global_xULBar_Int,
        global_yULBar_Int
    );

}
/*==================================================*/