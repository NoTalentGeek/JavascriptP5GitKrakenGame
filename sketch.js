/*==================================================*/
function setup(){

    createCanvas(960, 540); /*16:9 display resolution.*/
    frameRate(30);





    InitiateGlobalVariableFromScreenRatio_Void();





    global_branch_Node_Object_Array     = new CreateMultiDimension_Array(global_nodeAmount_Int, 0);
    global_NodeGenerator_Object         = new NodeGenerator_Object();
    global_nodeNearestYUL_Int           = height;
    global_offsetSizeFix_Int            = (global_offset_Int*2);
    global_screen_Area_Struct           = new Area_Struct(
        width,
        height,
        0,
        0
    );





    global_Bar_Object                   = new Bar_Object();
    global_heightFix_Int                = global_height_Int - global_offsetSizeFix_Int;
    global_nodeSpawnPointY_Int          = height - global_offset_Int - (global_height_Int/2);





    global_xUC1Node_Int                 = global_xULBar_Int + DetermineXCNode_Int(2);
    global_xUC2Node_Int                 = global_xULBar_Int + DetermineXCNode_Int(3);
    global_xUC3Node_Int                 = global_xULBar_Int + DetermineXCNode_Int(4);
    global_xUC4Node_Int                 = global_xULBar_Int + DetermineXCNode_Int(5);
    global_xUCMasterNode_Int            = global_xULBar_Int + DetermineXCNode_Int(1);





    function DetermineXCNode_Int(_index_Int){

        var barWidthDivision_Int    = global_barWidth_Int/global_nodeAmount_Int;
        var xC_Int                  = (barWidthDivision_Int*_index_Int) - (barWidthDivision_Int/2);
        //console.log(global_barWidth_Int);
        //console.log(xC_Int);
        return xC_Int;

    }





    //var test_Audio = new Audio("asset/sound/Test.ogg");
    //test_Audio.play();
    //var test_multiDimension_Array = new CreateMultiDimension_Array(3, 0);
    /*
    for(var i_Int = 0; i_Int < test_multiDimension_Array.length; i_Int ++){

        console.log(i_Int);
        console.log(test_multiDimension_Array[i_Int]);

    }
    */





    //console.log(global_Bar_Object);
    //console.log(global_height_Int);
    //console.log(global_heightFix_Int);
    //console.log(global_NodeGenerator_Object);
    //console.log(global_nodeNearestYUL_Int);
    //console.log(global_nodeSpawnPointY_Int);
    //console.log(global_offsetSizeFix_Int);
    //console.log(global_screen_Area_Struct);
    //console.log(global_xUC1Node_Int);
    //console.log(global_xUC2Node_Int);
    //console.log(global_xUC3Node_Int);
    //console.log(global_xUC4Node_Int);
    //console.log(global_xUCMasterNode_Int);

}
/*==================================================*/





/*==================================================*/
function draw(){

    background(global_backgroundColor_String);
    StartBarPressedCountdown_Void();
    UpdateAllNode_Void();





    global_Bar_Object.Update_Bar_Object();
    global_NodeGenerator_Object.Update_NodeGenerator_Object();




    //console.log(frameRate());
    //console.log(global_furthest_Node_Object);
    //console.log(global_nearest_Node_Object);
    //console.log(global_Node_Object_Array.length);
    //console.log(global_nodeFurthestYUL_Int);
    //console.log(global_nodeNearestYUL_Int);

}
/*==================================================*/





/*==================================================*/
function keyTyped(){

    if(key == "a"){

        ButtonMainPressed_Void();
        DeleteNearestNode_Void();
        //console.log("Lowercase a was just pressed.");

    }
    if(key == "s"){

        ButtonMainPressed_Void();
        DeleteNearestNode_Void();
        //console.log("Lowercase s was just pressed.");

    }





    //console.log("Hello world!");




    return false;

}
/*==================================================*/