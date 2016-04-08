/*==================================================*/
var MasterNode_Object = function(){

    Node_Object.call(
        this,
        50,                         /*_width_Int,*/
        50,                         /*_height_Int,*/
        (width/2),                  /*_xC_Int,*/
        (height/4),                 /*_yC_Int,*/
        true,                       /*_fill_Bool,*/
        true,                       /*_stroke_Bool,*/
        "#663931",                  /*_fillColor_String,*/
        global_strokeWeight_Int,    /*_stroke_Int,*/
        "#45283C"                   /*_strokeColor_String*/
    );





    //console.log(this._Area_Struct.xUL_Int);

};
MasterNode_Object.prototype.constructor = MasterNode_Object;
/*==================================================*/





/*==================================================*/
MasterNode_Object.prototype.Update_MasterNode_Object = function(){

    Node_Object.prototype.Update_Node_Object.call(this);
    this.Move_MasterNode_Object();





    //console.log("Test!");

};
/*==================================================*/




MasterNode_Object.prototype.Move_MasterNode_Object = function(){

    Node_Object.prototype.Set_yC_Int_Void.call(this, this.yC_Int + global_nodeSpeed_Int);




    //console.log(global_nodeSpeed_Int);
    //console.log(this.yC_Int);

};