/*==================================================*/
var MasterNode_Object = function(){

    Node_Object.call(
        this,
        global_nodeMaster_Audio,            /*__Audio,*/
        Branch_Enum.MASTER_BRANCH,          /*__Branch_Enum,*/
        global_branch_Node_Object_Array[0], /*_branch_Node_Object_Array,*/
        global_heightFix_Int,               /*_width_Int,*/
        global_heightFix_Int,               /*_height_Int,*/
        global_xUCMasterNode_Int,           /*_xC_Int,*/
        global_nodeSpawnPointY_Int,         /*_yC_Int,*/
        true,                               /*_fill_Bool,*/
        true,                               /*_stroke_Bool,*/
        global_fillNodeMaster_String,       /*_fillColor_String,*/
        global_strokeWeight_Int,            /*_stroke_Int,*/
        global_strokeColor_String           /*_strokeColor_String*/
    );





    //console.log(this._Area_Struct.xUL_Int);

};
MasterNode_Object.prototype.constructor = MasterNode_Object;
/*==================================================*/





/*==================================================*/
MasterNode_Object.prototype.Update_Node_Object = function(){

    Node_Object.prototype.CheckDelete_Node_Object.call(this);





    Node_Object.prototype.CheckBound_Node_Object.call(this)
    Node_Object.prototype.Draw_Node_Object.call(this);
    Node_Object.prototype.Set_yC_Int_Void.call(this, this.yC_Int - global_nodeSpeed_Int);





    //console.log("Test!");

};
/*==================================================*/