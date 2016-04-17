var global_Point_Object_Array   = new Array(0);
var global_pointInterval_Int    = 10;





/*==================================================*/
var Point_Object = function(
    _x_Int,
    _y_Int,
    __Container_Object
){

    this._Counter_Object    = __Container_Object;
    this.x_Int              = _x_Int;
    this.y_Int              = _y_Int;





    this.index_Int;
    this.indexTrue_Int;
    this.visible_Bool       = true;





    global_Point_Object.push(this);

};
Point_Object.prototype.constructor = Point_Object;
/*==================================================*/




/*==================================================
A function to put this object into its main array and
    then set the index and the true index.*/
Point_Object.prototype.AddToArray_Point_Object = function(){

    return this;

};
/*==================================================*/





/*==================================================
A function to check whether this point object is inside
    its container or not.
If this point object is outside container then delete it
    and remove its reference.*/
Point_Object.prototype.CheckBound_Point_Object = function(){

    if(
        this._Counter_Object == null ||
        this._Counter_Object === undefined
    ){ this.inside_Bool = CheckInside_Bool(0, 0, width, height); }
    else if(
        this._Counter_Object != null &&
        this._Counter_Object !== undefined
    ){

        this.inside_Bool = CheckInside_Bool(
            this._Container.x_Int,
            this._Container.y_Int,
            this._Container.width_Int,
            this._Container.height_Int
        );

    }





    function CheckInside_Bool(
        _xStart_Int,
        _yStart_Int,
        _xEnd_Int,
        _yEnd_Int
    ){

        var insideAlt_Bool = false;
        if(
            (this.x_Int > _xStart_Int && this.x_Int < _xEnd_Int) &&
            (this.y_Int > _yStart_Int && this.y_Int < _yEnd_Int)
        ){ insideAlt_Bool = true; }





        return insideAlt_Bool;

    }





    return this;

};
/*==================================================*/





/*==================================================
A function to delete this object and then remove this
    object reference from the main point array.*/
Point_Object.prototype.CheckDelete_Point_Object = function(){

    var delete_Bool = false;





    if(this.inside_Bool == false){ delete_Bool = true; }





    if(delete_Bool == true){

        this.visible_Bool = false;
        delete global_Point_Object_Array[this.index_Int];
        return null;

    }





    return this;

};
/*==================================================*/





/*==================================================*/
Point_Object.prototype.Draw_Point_Object = function(){

    return this;

};
/*==================================================*/