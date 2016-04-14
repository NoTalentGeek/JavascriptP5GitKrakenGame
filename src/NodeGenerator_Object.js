/*==================================================*/
var NodeGenerator_Object = function(){

    /*How many times this program tick while the condition
        to spawn new node is fulfilled but no node is
        actually spawned.*/
    this.counter_Float = 0.0;
    this.nothing_Bool = true;

}
NodeGenerator_Object.prototype.constructor = NodeGenerator_Object;
/*==================================================*/





/*==================================================*/
NodeGenerator_Object.prototype.Update_NodeGenerator_Object = function(){

    if(
        global_Node_Object_Array.length                 == 0 ||
        global_NodeGenerator_Object.nothing_Boolean     == true
    ){ new MasterNode_Object(); }
    /*Make the main node to have fixed interval for the main branch.*/
    if(global_nodeMasterInterval_Int > 0){ global_nodeMasterInterval_Int --; }
    else if(global_nodeMasterInterval_Int <= 0){

        new MasterNode_Object();
        global_nodeMasterInterval_Int = global_nodeMasterIntervalFix_Int;

    }





    return this;

};
/*==================================================*/