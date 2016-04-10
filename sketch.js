var test_Bar_Object;
var test_MasterNode_Object;





/*==================================================*/
function setup(){

    createCanvas(960, 540);





    global_screen_Area_Struct = new Area_Struct(
        width,
        height,
        0,
        0
    );





    text_Bar_Object             = new Bar_Object();
    test_MasterNode_Object      = new MasterNode_Object();

}
/*==================================================*/





/*==================================================*/
function draw(){

    background(global_backgroundColor_String);
    CheckNearestBarNode_Void();





    test_MasterNode_Object.Update_MasterNode_Object();





    text_Bar_Object.Update_Bar_Object();

}
/*==================================================*/





/*==================================================*/
function keyTyped(){

    if(key === "a"){

        //console.log("Lowercase a was just pressed.");

    }
    if(key === "s"){

        //console.log("Lowercase s was just pressed.");

    }





    return false;

}
/*==================================================*/