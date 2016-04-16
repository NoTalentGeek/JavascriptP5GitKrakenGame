/*==================================================*/
var Trail_Object = function(
    _name_String,
    _endAxis_Int,
    _startAxis_Int,
    _horizontal_Bool,
    __Container_Object
){

    this._Container_Object      = __Container_Object;
    this.endAxis_Int            = _endAxis_Int;
    this.horizontal_Bool        = _horizontal_Bool;
    this.name_String            = _name_String;
    this.startAxis_Int          = _startAxis_Int;





    this.destinedAxis_Int;
    this.index_Int;
    this.indexTrue_Int;
    this.staticAxis_Int;
    this.animation_Bool         = true;
    this.animation_Fix          = false;
    this.animationIn_Bool       = true;
    this.animationOut_Bool      = false;
    this.prepareDelete_Bool     = false;
    this.prepareSetup_Bool      = true;
    this.ready_Bool             = false;





    if(this.horizontal_Bool == true){ this.staticAxis_Int = this.Set_staticAxis_Int(this._Container_Object.height_Int + global_offset_Int); }
    else if(this.horizontal_Bool == false){ this.staticAxis_Int = this.Set_staticAxis_Int(this._Container_Object.width_Int + global_offset_Int); }
    else{ this.staticAxis_Int = this.Set_staticAxis_Int(this._Container_Object.height_Int + global_offset_Int); }





    //console.log(global_offset_Int);
    //console.log(this.staticAxis_Int);





    this.AddToArray_Trail_Object();

};
Trail_Object.prototype.constructor = Trail_Object;
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.AddToArray_Trail_Object = function(){

    global_Trail_Object_Array.push(this);
    this.index_Int = global_Trail_Object_Array.indexOf(this);



    for(
        var i_Int = 0;
        i_Int < global_Trail_Object_Array.length;
        i_Int ++
    ){

        //console.log(global_Trail_Object_Array[i_Int]);





        if(
            global_Trail_Object_Array[i_Int] != null &&
            global_Trail_Object_Array[i_Int] !== undefined
        ){ global_Trail_Object_Array[i_Int].DetermineTrueIndex_Trail_Object(); }

    }





    //console.log(this.indexTrue_Int);





    for(
        var i_Int = 0;
        i_Int < global_Trail_Object_Array.length;
        i_Int ++
    ){

        if(
            global_Trail_Object_Array[i_Int] != null &&
            global_Trail_Object_Array[i_Int] !== undefined
        ){

            var maxLength_Int;
            if(
                global_Trail_Object_Array[i_Int]._Container_Object_Object != null &&
                global_Trail_Object_Array[i_Int]._Container_Object_Object !== undefined
            ){

                if(global_Trail_Object_Array[i_Int].horizontal_Bool == true)
                    { maxLength_Int = _Container_Object.height; }
                else if(global_Trail_Object_Array[i_Int].horizontal_Bool == false)
                    { maxLength_Int = _Container_Object.width; }

            }
            else if(
                global_Trail_Object_Array[i_Int]._Container_Object_Object == null ||
                global_Trail_Object_Array[i_Int]._Container_Object_Object === undefined
            ){

                if(global_Trail_Object_Array[i_Int].horizontal_Bool == true)
                    { maxLength_Int = height; }
                else if(global_Trail_Object_Array[i_Int].horizontal_Bool == false)
                    { maxLength_Int = width; }

            }




            console.log(maxLength_Int);
            global_Trail_Object_Array[i_Int].DetermineDestinedAxis_Trail_Object(maxLength_Int);

        }

    }





    console.log(this.destinedAxis_Int);





    return this;

};
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.AnimationControl_Trail_Object = function(){

    if(
        this.animationIn_Bool   == true ||
        this.animationOut_Bool  == true
    ){ this.animation_Bool      = true; }
    if(
        this.animationIn_Bool   == false &&
        this.animationOut_Bool  == false
    ){ this.animation_Bool      = false; }




    if(this.prepareDelete_Bool == true){

        this.AnimationOut_Trail_Object();

    }
    if(
        this.animationOut_Bool  == false &&
        this.prepareDelete_Bool == true
    ){

        this.prepareDelete_Bool = false;
        //this.Delete_Trail_Object();

    }





    if(this.prepareSetup_Bool == true){

        this.AnimationIn_Trail_Object();

    }
    if(
        this.animationIn_Bool   == false &&
        this.prepareSetup_Bool  == true
    ){

        this.prepareSetup_Bool  = false;
        this.ready_Bool         = true;

    }





    if(
        this.destinedAxis_Int != this.staticAxis_Int &&
        this.ready_Bool == true
    ){

        AnimationFix_Trail_Object();

    }





    return this;

};
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.AnimationFix_Trail_Object = function(){

        this.animation_Bool = true;





        if(this.destinedAxis_Int < this.staticAxis_Int)
            { this.staticAxis_Int = Set_staticAxis_Int(this.staticAxis_Int - global_animationSpeed_Int); }
        else if(this.destinedAxis_Int > this.staticAxis_Int)
            { this.staticAxis_Int = Set_staticAxis_Int(this.staticAxis_Int + global_animationSpeed_Int); }
        else if(this.destinedAxis_Int == this.staticAxis_Int)
            { this.animation_Bool = false; }

}
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.AnimationIn_Trail_Object = function(){

    this.animation_Bool = true;





    if(this.destinedAxis_Int < this.staticAxis_Int)
        { this.staticAxis_Int = this.Set_staticAxis_Int(this.staticAxis_Int - global_animationSpeed_Int); }
    else if(this.destinedAxis_Int > this.staticAxis_Int){

        this.staticAxis_Int = this.Set_staticAxis_Int(this.destinedAxis_Int);
        this.animation_Bool = false;

    }
    else if(this.destinedAxis_Int == this.staticAxis_Int){ this.animation_Bool = false; }






    return this;

};
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.AnimationOut_Trail_Object = function(){

    this.animation_Bool = true;





    if(this.horizontal_Bool == true){

        if(width + global_offset_Int != this.staticAxis_Int)
            { this.staticAxis_Int = Set_staticAxis_Int(this.staticAxis_Int + global_animationSpeed_Int); }
        if(width + global_offset_Int == this.staticAxis_Int){ this.animation_Bool = false; }

    }
    else if(this.horizontal_Bool == false){

        if(height + global_offset_Int != this.staticAxis_Int)
            { this.staticAxis_Int = Set_staticAxis_Int(this.staticAxis_Int + global_animationSpeed_Int); }
        if(height + global_offset_Int == this.staticAxis_Int){ this.animation_Bool = false; }

    }
    else{

        if(width + global_offset_Int != this.staticAxis_Int)
            { this.staticAxis_Int = Set_staticAxis_Int(this.staticAxis_Int + global_animationSpeed_Int); }
        if(width + global_offset_Int == this.staticAxis_Int){ this.animation_Bool = false; }

    }





    return this;

};
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.DetermineDestinedAxis_Trail_Object = function(_maxLength_Int){

    var trailInterval_Int = _maxLength_Int/(CheckTrueArrayLength_Int(global_Trail_Object_Array) + 1);





    console.log(_maxLength_Int);
    console.log(CheckTrueArrayLength_Int(global_Trail_Object_Array) + 1);
    console.log(trailInterval_Int);





    this.destinedAxis_Int = (this.indexTrue_Int + 1)*trailInterval_Int;





    console.log(this.destinedAxis_Int);

}
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.DetermineTrueIndex_Trail_Object = function(){

    //console.log("Hello world!");





    var decreaseCounter_Int = 0;
    for(
        var i_Int = 0;
        i_Int < this.index_Int;
        i_Int ++
    ){

        if(
            global_Trail_Object_Array[i_Int] == null ||
            global_Trail_Object_Array[i_Int] === undefined
        ){ decreaseCounter_Int ++; }

    }
    this.indexTrue_Int = this.index_Int - decreaseCounter_Int;

};
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.Draw_Trail_Object = function(){

    strokeWeight(global_strokeWeight_Int);





    if(this.horizontal_Bool == true){

        line(
            this.startAxis_Int,
            this.staticAxis_Int,
            this.endAxis_Int,
            this.staticAxis_Int
        );

    }
    else if(this.horizontal_Bool == false){

        //rect(520, height/2 - 50, 100, 100);
        //console.log(this.staticAxis_Int);




        line(
            this.staticAxis_Int,
            this.startAxis_Int,
            this.staticAxis_Int,
            this.endAxis_Int
        );

    }




    strokeWeight(1);





    return this;

}
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.Set_endAxis_Int = function(_endAxis_Int){

    if(
        this._Container_Object_Object != null &&
        this._Container_Object_Object !== undefined
    ){

        if(this.horizontal_Bool == true)
            { this.endAxis_Int = this._Container_Object.x_Int + _endAxis_Int; }
        else if(this.horizontal_Bool == false)
            { this.endAxis_Int = this._Container_Object.y_Int + _endAxis_Int; }

    }
    else{ this.endAxis_Int = _endAxis_Int; }





    return this.endAxis_Int;

};
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.Set_startAxis_Int = function(_startAxis_Int){

    if(
        this._Container_Object_Object != null &&
        this._Container_Object_Object !== undefined
    ){

        if(this.horizontal_Bool == true)
            { this.startAxis_Int = this._Container_Object.x_Int + _startAxis_Int; }
        else if(this.horizontal_Bool == false)
            { this.startAxis_Int = this._Container_Object.y_Int + _startAxis_Int; }

    }
    else{ this.startAxis_Int = _startAxis_Int; }





    return this.startAxis_Int;

};
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.Set_staticAxis_Int = function(_staticAxis_Int){

    if(
        this._Container_Object_Object != null &&
        this._Container_Object_Object !== undefined
    ){

        if(this.horizontal_Bool == true)
            { this.staticAxis_Int = this._Container_Object.y_Int + _startAxis_Int; }
        else if(this.horizontal_Bool == false)
            { this.staticAxis_Int = this._Container_Object.x_Int + _startAxis_Int; }

    }
    else{ this.staticAxis_Int = _staticAxis_Int; }





    return this.staticAxis_Int;

};
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.Update_Trail_Object = function(){

    this.AnimationControl_Trail_Object();
    this.Draw_Trail_Object(
        this.staticAxis_Int,
        this.endAxis_Int,
        this.startAxis_Int
    );





    return this;

};
/*==================================================*/