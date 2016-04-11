var global_bar_Area_Struct;             /*Variable initiated in Bar_Object.js.*/
var global_Bar_Object;                  /*Variable initiated in sketch.js.*/
var global_barPressedCountdown_Int;     /*Variable initiated in sketch.js.*/
var global_furthest_Node_Object;        /*Variable initiated in CheckFurthestBarNode_Void() in sketch.js.*/
var global_nearest_Node_Object;         /*Variable initiated in CheckNearestBarNode_Void() in sketch.js.*/
var global_NodeGenerator_Object;        /*Variable initiated in sketch.js.*/
var global_nodeSpawnPointY_Int;         /*Variable initiated in sketch.js.*/
var global_screen_Area_Struct;          /*Variable initiated in sketch.js.*/
var global_widthBar_Int;                /*Variable initiated in Bar_Object.js.*/
var global_xULBar_Int;                  /*Variable initiated in Bar_Object.js. CAUTION: Change this using setter.*/
var global_yULBar_Int;                  /*Variable initiated in Bar_Object.js. CAUTION: Change this using setter.*/
var global_barPressed_Bool              = false;
var global_barPressedCountdownFixed_Int = 5;
var global_Node_Object_Array            = new Array();
var global_nodeSpeed_Int                = 5;
var global_nodeAmount_Int               = 5;
var global_offset_Int                   = 10;
var global_strokeWeight_Int             = 5;





var global_offsetSizeFix_Int            = (global_offset_Int*2);





var global_height_Int                   = 50;
var global_heightFix_Int                = global_height_Int - global_offsetSizeFix_Int;





/*Color variables.*/
var global_fillBarColor_String;
var global_backgroundColor_String       = "rgba(34, 32, 52, 1)";
var global_fillBarDefaultColor_String   = "rgba(69, 40, 60, 0.5)";
var global_fillBarPressedColor_String   = "rgba(143, 86, 59, 0.5)";
var global_fillColor_String             = "rgba(69, 40, 60, 1)";
var global_fillNode1_String             = "rgba(251, 242, 54, 1)";
var global_fillNode2_String             = "rgba(153, 229, 80, 1)";
var global_fillNode3_String             = "rgba(106, 190, 48, 1)";
var global_fillNode4_String             = "rgba(55, 148, 110, 1)";
var global_fillNodeMaster_String        = "rgba(172, 50, 50, 1)";
var global_strokeBarColor_String        = "rgba(102, 57, 49, 0.5)";
var global_strokeColor_String           = "rgba(102, 57, 49, 1)";



/*==================================================*/
function Set_global_xULBar_Int_Void(_global_xULBar_Int){

    global_xULBar_Int = _global_xULBar_Int;
    global_bar_Area_Struct = new Area_Struct(
        global_widthBar_Int,
        global_heightFix_Int,
        global_xULBar_Int,
        global_yULBar_Int
    );

}
function Set_global_yULBar_Int_Void(_global_yULBar_Int){

    global_yULBar_Int = _global_yULBar_Int;
    global_bar_Area_Struct = new Area_Struct(
        global_widthBar_Int,
        global_heightFix_Int,
        global_xULBar_Int,
        global_yULBar_Int
    );

}
/*==================================================*/