var test_Bar_Object;
var test_Node_Object;
var test_MasterNode_Object;





/*==================================================*/
function setup(){

    createCanvas(960, 540);





    text_Bar_Object = new Bar_Object();





    test_Node_Object = new Node_Object(
        150,            /*_width_Int,*/
        150,            /*_height_Int,*/
        (width/2),      /*_xC_Int,*/
        (height/2),     /*_yC_Int,*/
        true,           /*_fill_Bool,*/
        true,           /*_stroke_Bool,*/
        "#663931",      /*_fillColor_String,*/
        10,             /*_stroke_Int,*/
        "#45283C"       /*_strokeColor_String*/
    );




    test_MasterNode_Object = new MasterNode_Object();

}
/*==================================================*/





/*==================================================*/
function draw(){

    background("#222034");





    text_Bar_Object.Update_Bar_Object();
    test_Node_Object.Update_Node_Object();
    test_MasterNode_Object.Update_MasterNode_Object();

}
/*==================================================*/