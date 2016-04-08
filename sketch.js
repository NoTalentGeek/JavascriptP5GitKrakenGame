var test_Bar_Object;
var test_Node_Object;
var test_MasterNode_Object;





/*==================================================*/
function setup(){

    createCanvas(960, 540);





    text_Bar_Object             = new Bar_Object();
    test_MasterNode_Object      = new MasterNode_Object();

}
/*==================================================*/





/*==================================================*/
function draw(){

    background("#222034");





    text_Bar_Object.Update_Bar_Object();
    test_MasterNode_Object.Update_MasterNode_Object();

}
/*==================================================*/