/*==================================================*/
var IntervalManager_Object = function(){};
IntervalManager_Object.prototype.constructor = IntervalManager_Object;
/*==================================================*/





/*==================================================*/
IntervalManager_Object.prototype.AddInterval_IntervalManager_Object = function(
    _name_String,
    _interval_Int,
    __Function
){

    var temp_Counter_Struct                 = new Counter_Struct();
        temp_Counter_Struct.name_String     = _name_String;
        temp_Counter_Struct.counter_Int     = 0;
        temp_Counter_Struct.interval_Int    = _interval_Int;
        temp_Counter_Struct._Function       = __Function;





    global_Counter_Struct_Array.push(temp_Counter_Struct);





    return this;

};
/*==================================================*/





/*==================================================*/
IntervalManager_Object.prototype.RemoveInterval_IntervalManager_Object = function(_name_String){

    for(
        var i_Int = 0;
        i_Int < global_Counter_Struct_Array.length;
        i_Int ++
    ){

        if(global_Counter_Struct_Array[i_Int].name_String == _name_String)
            { global_Counter_Struct_Array.splice(i_Int, 1); }

    }





    return this;

};
/*==================================================*/





/*==================================================*/
IntervalManager_Object.prototype.Update_IntervalManager_Object = function(){

    for(
        var i_Int = 0;
        i_Int < global_Counter_Struct_Array.length;
        i_Int ++
    ){

        global_Counter_Struct_Array[i_Int].counter_Int ++;





        if(
            global_Counter_Struct_Array[i_Int].counter_Int ==
                global_Counter_Struct_Array[i_Int].interval_Int
        ){

            global_Counter_Struct_Array[i_Int].counter_Int = 0;
            global_Counter_Struct_Array[i_Int]._Function;

        }

    }





    return this;

};
/*==================================================*/