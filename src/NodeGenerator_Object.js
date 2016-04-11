/*==================================================*/
var NodeGenerator_Object = function(){

    /*How many times this program tick while the condition
        to spawn new node is fulfilled but no node is
        actually spawned.*/
    this.counter_Float = 0.0;



}
NodeGenerator_Object.prototype.constructor = NodeGenerator_Object;
/*==================================================*/





/*==================================================*/
NodeGenerator_Object.prototype.Update_NodeGenerator_Object = function(){

    /*If the main node array length is 0 then spawn a free node.*/
    if(global_Node_Object_Array.length == 0){ new MasterNode_Object(); }
    /*Check if this object is ready to spawn new node.
    Check the farthest node from the bar.*/
    else if(global_furthest_Node_Object != null){

        if(
            global_nodeSpawnPointY_Int -
                (
                    global_furthest_Node_Object._Area_Struct.yUL_Int +
                    global_furthest_Node_Object._Area_Struct.height_Int
                ) >= global_strokeWeight_Int
        ){

            if(Math.random() > (0.99 - this.counter_Float)){

                var random_Float    = Math.random() * global_nodeAmount_Int;
                var random_Int      = Math.floor(random_Float);
                if(random_Int == 0){ new MasterNode_Object(); }
                if(random_Int == 1){ new _1Node_Object(); }
                if(random_Int == 2){ new _2Node_Object(); }
                if(random_Int == 3){ new _3Node_Object(); }
                if(random_Int == 4){ new _4Node_Object(); }

                this.counter_Float = 0.0;

            }
            else{ this.counter_Float += 0.001; }

        }

    }





    return this;

};
/*==================================================*/