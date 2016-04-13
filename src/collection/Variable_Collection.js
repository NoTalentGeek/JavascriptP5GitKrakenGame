var global_bar_Area_Struct;                 /*Variable initiated in Bar_Object.js.*/
var global_Bar_Object;                      /*Variable initiated in sketch.js.*/
var global_barPressedCountdown_Int;         /*Variable initiated in sketch.js.*/
var global_barWidth_Int;                    /*Variable initiated in Bar_Object.js.*/
var global_branch_Node_Object_Array;        /*Variable initiated in sketch.js.*/
var global_furthest_Node_Object;            /*Variable initiated in CheckFurthestBarNode_Void() in sketch.js.*/
var global_height_Int;                      /*Variable initiated in InitiateGlobalVariableFromScreenRatio_Void() in sketch.js.*/
var global_heightFix_Int;                   /*Variable initiated in sketch.js.*/
var global_nearest_Node_Object;             /*Variable initiated in CheckNearestBarNode_Void() in sketch.js.*/
var global_NodeGenerator_Object;            /*Variable initiated in sketch.js.*/
var global_nodeNearestYUL_Int;              /*Variable initiated in sketch.js.*/
var global_nodeSpawnPointY_Int;             /*Variable initiated in sketch.js.*/
var global_nodeSpeed_Int;                   /*Variable initiated in InitiateGlobalVariableFromScreenRatio_Void() in sketch.js.*/
var global_offset_Int;                      /*Variable initiated in InitiateGlobalVariableFromScreenRatio_Void() in sketch.js.*/
var global_screen_Area_Struct;              /*Variable initiated in sketch.js.*/
var global_strokeWeight_Int;                /*Variable initiated in InitiateGlobalVariableFromScreenRatio_Void() in sketch.js.*/
var global_TrailGenerator_Object;           /*Variable initiated in sketch.js*/
var global_xUC1Node_Int;                    /*Variable initiated in sketch.js.*/
var global_xUC2Node_Int;                    /*Variable initiated in sketch.js.*/
var global_xUC3Node_Int;                    /*Variable initiated in sketch.js.*/
var global_xUC4Node_Int;                    /*Variable initiated in sketch.js.*/
var global_xUCMasterNode_Int;               /*Variable initiated in sketch.js.*/
var global_xULBar_Int;                      /*Variable initiated in Bar_Object.js. CAUTION: Change this using setter.*/
var global_yULBar_Int;                      /*Variable initiated in Bar_Object.js. CAUTION: Change this using setter.*/
var global_barPressed_Bool                  = false;
var global_barPressedCountdownFixed_Int     = 5;
var global_node1_Trail_Object               = new Trail_Object();
var global_node2_Trail_Object               = new Trail_Object();
var global_node3_Trail_Object               = new Trail_Object();
var global_node4_Trail_Object               = new Trail_Object();
var global_Node_Object_Array                = new Array();
var global_nodeAmount_Int                   = 5;
var global_nodeFurthestYUL_Int              = 0;
var global_nodeMaster_Trail_Object          = new Trail_Object();






var global_offsetSizeFix_Int                = (global_offset_Int*2);





/*Color variables.*/
var global_fillBarColor_String;
var global_backgroundColor_String           = "rgba(34, 32, 52, 1)";
var global_fillBarDefaultColor_String       = "rgba(69, 40, 60, 0.5)";
var global_fillBarPressedColor_String       = "rgba(143, 86, 59, 0.5)";
var global_fillColor_String                 = "rgba(69, 40, 60, 1)";
var global_fillNode1_String                 = "rgba(251, 242, 54, 1)";
var global_fillNode2_String                 = "rgba(153, 229, 80, 1)";
var global_fillNode3_String                 = "rgba(106, 190, 48, 1)";
var global_fillNode4_String                 = "rgba(55, 148, 110, 1)";
var global_fillNodeMaster_String            = "rgba(172, 50, 50, 1)";
var global_strokeBarColor_String            = "rgba(102, 57, 49, 0.5)";
var global_strokeColor_String               = "rgba(102, 57, 49, 1)";





/*Sound variables.*/
var global_node1_Audio                      = new Audio("asset/sound/_1Node.ogg");
var global_node2_Audio                      = new Audio("asset/sound/_2Node.ogg");
var global_node3_Audio                      = new Audio("asset/sound/_3Node.ogg");
var global_node4_Audio                      = new Audio("asset/sound/_4Node.ogg");
var global_nodeMaster_Audio                 = new Audio("asset/sound/MasterNode.ogg");
var global_nodeMissed_Audio                 = new Audio("asset/sound/MissedNode.ogg");





/*Variables that save the trail position.*/
var global_endNode1_Point_Struct;           /*Variable initiated in TrailGenerator_Object.js.*/
var global_endNode2_Point_Struct;           /*Variable initiated in TrailGenerator_Object.js.*/
var global_endNode3_Point_Struct;           /*Variable initiated in TrailGenerator_Object.js.*/
var global_endNode4_Point_Struct;           /*Variable initiated in TrailGenerator_Object.js.*/
var global_endNodeMaster_Point_Struct;      /*Variable initiated in TrailGenerator_Object.js.*/
var global_startNode1_Point_Struct;         /*Variable initiated in TrailGenerator_Object.js.*/
var global_startNode2_Point_Struct;         /*Variable initiated in TrailGenerator_Object.js.*/
var global_startNode3_Point_Struct;         /*Variable initiated in TrailGenerator_Object.js.*/
var global_startNode4_Point_Struct;         /*Variable initiated in TrailGenerator_Object.js.*/
var global_startNodeMaster_Point_Struct;    /*Variable initiated in TrailGenerator_Object.js.*/
var global_endNode1_Node_Object;            /*Variable initiated in each node object.*/
var global_endNode2_Node_Object;            /*Variable initiated in each node object.*/
var global_endNode3_Node_Object;            /*Variable initiated in each node object.*/
var global_endNode4_Node_Object;            /*Variable initiated in each node object.*/
var global_endNodeMaster_Node_Object;       /*Variable initiated in each node object.*/
var global_startNode1_Node_Object;          /*Variable initiated in each node object.*/
var global_startNode2_Node_Object;          /*Variable initiated in each node object.*/
var global_startNode3_Node_Object;          /*Variable initiated in each node object.*/
var global_startNode4_Node_Object;          /*Variable initiated in each node object.*/
var global_startNodeMaster_Node_Object;     /*Variable initiated in each node object.*/





/*==================================================*/
function Set_global_xULBar_Int_Void(_global_xULBar_Int){

    global_xULBar_Int = _global_xULBar_Int;
    global_bar_Area_Struct = new Area_Struct(
        global_barWidth_Int,
        global_heightFix_Int,
        global_xULBar_Int,
        global_yULBar_Int
    );

}
function Set_global_yULBar_Int_Void(_global_yULBar_Int){

    global_yULBar_Int = _global_yULBar_Int;
    global_bar_Area_Struct = new Area_Struct(
        global_barWidth_Int,
        global_heightFix_Int,
        global_xULBar_Int,
        global_yULBar_Int
    );

}
/*==================================================*/