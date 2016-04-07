var test_Node_Object;

function setup(){

    createCanvas(960, 540);





    test_Node_Object = new Node_Object(
        (width/2),      /*_positionCenterX,*/
        (height/2),     /*_positionCenterY,*/
        100,            /*_width_Int,*/
        100,            /*_height_Int,*/
        true,           /*_fill_Bool,*/
        true,           /*_stroke_Bool,*/
        "#663931",      /*_fillColor_String,*/
        10,             /*_stroke_Int,*/
        "#45283C"       /*_strokeColor_String*/
    );

}





function draw(){

    background("#222034");





    test_Node_Object.Update_Node_Object();

}