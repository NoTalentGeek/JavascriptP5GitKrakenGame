/*==================================================*/
var MasterNode_Object = function(){

    Node_Object.call(
        this,
        global_node_Audio_Array[0],         /*__Audio,*/
        Branch_Enum.MASTER_BRANCH,          /*__Branch_Enum,*/
        global_branch_Node_Object_Array[0], /*_branch_Node_Object_Array,*/
        global_heightFix_Int,               /*_width_Int,*/
        global_heightFix_Int,               /*_height_Int,*/
        global_xUCNode_Int_Array[0],        /*_xC_Int,*/
        global_nodeSpawnPointY_Int,         /*_yC_Int,*/
        true,                               /*_fill_Bool,*/
        true,                               /*_stroke_Bool,*/
        global_fillNode_String_Array[0],    /*_fillColor_String,*/
        global_strokeWeight_Int,            /*_stroke_Int,*/
        global_strokeColor_String           /*_strokeColor_String*/
    );


    if(this.startTrail_Bool == true){

        global_start_Node_Object_Array[0] = this;
        global_Trail_Object_Array[0].draw_Bool = true;

    }


    //console.log(this._Area_Struct.xUL_Int);
    //console.log(this.yC_Int);

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
    //console.log("this.xC_Int = " + this.xC_Int);
    //console.log("this.yC_Int = " + this.yC_Int);

};
/*==================================================*/