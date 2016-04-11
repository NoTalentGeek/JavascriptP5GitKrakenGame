/*==================================================*/
function setup(){

    createCanvas(960, 540);





    global_Bar_Object           = new Bar_Object();
    global_NodeGenerator_Object = new NodeGenerator_Object();
    global_nodeSpawnPointY_Int  = height - global_offset_Int- (global_height_Int/2);
    global_screen_Area_Struct   = new Area_Struct(
        width,
        height,
        0,
        0
    );

}
/*==================================================*/





/*==================================================*/
function draw(){

    background(global_backgroundColor_String);
    CheckFurthestBarNode_Void();
    CheckNearestBarNode_Void();
    StartBarPressedCountdown_Void();
    UpdateAllNode_Void();





    global_Bar_Object.Update_Bar_Object();
    global_NodeGenerator_Object.Update_NodeGenerator_Object();

}
/*==================================================*/





/*==================================================*/
function keyTyped(){

    if(key == "a"){

        global_barPressed_Bool = true;
        global_barPressedCountdown_Int
            = global_barPressedCountdownFixed_Int;





        //console.log("Lowercase a was just pressed.");

    }
    if(key == "s"){

        global_barPressed_Bool = true;
        global_barPressedCountdown_Int
            = global_barPressedCountdownFixed_Int;





        //console.log("Lowercase s was just pressed.");

    }





    //console.log("Hello world!");




    return false;

}
/*==================================================*/