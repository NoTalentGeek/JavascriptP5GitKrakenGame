/*==================================================*/
var MasterNode_Object = function(){

    Node_Object.call(
        this,
        50,             /*_width_Int,*/
        50,             /*_height_Int,*/
        (width/2),      /*_xC_Int,*/
        (height/4),     /*_yC_Int,*/
        true,           /*_fill_Bool,*/
        true,           /*_stroke_Bool,*/
        "#663931",      /*_fillColor_String,*/
        10,             /*_stroke_Int,*/
        "#45283C"       /*_strokeColor_String*/
    );





    //console.log(this._Area_Struct.xUL_Int);

};
MasterNode_Object.prototype.constructor = MasterNode_Object;
/*==================================================*/





/*==================================================*/
MasterNode_Object.prototype.Update_MasterNode_Object = function(){

    Node_Object.prototype.Update_Node_Object.call(this);

}
/*==================================================*/