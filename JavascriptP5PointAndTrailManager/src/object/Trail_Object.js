/*==================================================*/
var Trail_Object = function(
    _name_String,
    _horizontal_Bool,
    __Container_Object
){

    this._Container_Object      = __Container_Object;
    this.horizontal_Bool        = _horizontal_Bool;
    this.name_String            = _name_String;





    this.endAxis_Int;
    this.index_Int;
    this.startAxis_Int;
    this.staticAxis_Int;
    this.animation_Bool         = true;
    this.animationIn_Bool       = true;
    this.animationOut_Bool      = false;
    this.prepareDelete_Bool     = false;
    this.prepareSetup_Bool      = true;
    this.ready_Bool             = false;




    this.AddToArray_Trail_Object();

};
Trail_Object.prototype.constructor = Trail_Object;
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.AddToArray_Trail_Object = function(){

    global_Trail_Object_Array.add(this);
    this.index_Int = global_Trail_Object_Array.indexOf(this);





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

        //this.AnimationOut_Trail_Object();
        this.animationOut_Bool = true;

    }
    if(
        this.animationOut_Bool  == false &&
        this.prepareDelete_Bool == true
    ){

        this.prepareDelete_Bool = false;
        //this.Delete_Trail_Object();

    }





    if(this.prepareSetup_Bool == true){

        //this.AnimationIn_Trail_Object();
        this.animationIn_Bool = true;

    }
    if(
        this.animationIn_Bool   == false &&
        this.prepareSetup_Bool  == true
    ){

        this.prepareSetup_Bool  = false;
        this.ready_Bool         = true;

    }





    return this;

};
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.AnimationIn_Trail_Object = function(){

    return this;

};
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.AnimationOut_Trail_Object = function(){

    return this;

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
Trail_Object.prototype.Update_Trail_Object = function(
    _staticAxis_Int,
    _endAxis_Int,
    _startAxis_Int
){

    this.endAxis_Int        = this.Set_endAxis_Int(_endAxis_Int);
    this.startAxis_Int      = this.Set_startAxis_Int(_startAxis_Int);
    this.staticAxis_Int     = this.Set_staticAxis_Int(_staticAxis_Int);





    this.AnimationControl_Trail_Object();
    this.Draw_Trail_Object(
        this.staticAxis_Int,
        this.endAxis_Int,
        this.startAxis_Int
    );





    return this;

};
/*==================================================*/