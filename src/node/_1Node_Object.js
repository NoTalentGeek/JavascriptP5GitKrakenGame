/*==================================================*/
var _1Node_Object = function(){

    Node_Object.call(
        this,
        global_node_Audio_Array[1],                     /*__Audio,*/
        Branch_Enum._1_BRANCH,                          /*__Branch_Enum,*/
        global_branch_Node_Object_Array[1],             /*_branch_Node_Object_Array,*/
        global_heightFix_Int,                           /*_width_Int,*/
        global_heightFix_Int,                           /*_height_Int,*/
        global_xUCNode_Int_Array[1],                    /*_xC_Int,*/
        global_nodeSpawnPointY_Int,                     /*_yC_Int,*/
        true,                                           /*_fill_Bool,*/
        true,                                           /*_stroke_Bool,*/
        global_fillNodeColor_String_Array[1],           /*_fillNodeColor_String,*/
        global_fillNodeFurthestColor_String_Array[1],   /*_fillNodeFurthestColor_String,*/
        global_fillNodeNearestColor_String_Array[1],    /*_fillNodeNearestColor_String,*/
        global_strokeWeight_Int,                        /*_stroke_Int,*/
        global_strokeDefaultColor_String                /*_strokeColor_String*/
    );





    //console.log(this._Area_Struct.xUL_Int);

};
_1Node_Object.prototype.constructor = _1Node_Object;
/*==================================================*/





/*==================================================*/
_1Node_Object.prototype.Update_Node_Object = function(){

    Node_Object.prototype.CheckDelete_Node_Object.call(this);





    Node_Object.prototype.CheckBound_Node_Object.call(this)
    Node_Object.prototype.Draw_Node_Object.call(this);
    Node_Object.prototype.Set_yC_Int_Void.call(this, this.yC_Int + global_nodeSpeed_Int);





    //console.log("Test!");

};
/*==================================================*/