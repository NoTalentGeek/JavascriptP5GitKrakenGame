/*==================================================*/
var Node_Object = function(
    _width_Int,
    _height_Int,
    _xC_Int,
    _yC_Int,
    _fill_Bool,
    _stroke_Bool,
    _fillColor_String,
    _stroke_Int,
    _strokeColor_String
){

    /*Filling in optional parameters.*/
    if(_fill_Bool           === undefined || _fill_Bool             === null){ _fill_Bool              = true; }
    if(_fillColor_String    === undefined || _fillColor_String      === null){ _fillColor_String       = "#FFFFFF"; }
    if(_stroke_Bool         === undefined || _stroke_Bool           === null){ _stroke_Bool            = true; }
    if(_stroke_Int          === undefined || _stroke_Int            === null){ _stroke_Int             = 1; }
    if(_strokeColor_String  === undefined || _strokeColor_String    === null){ _strokeColor_String     = "#000000"; }





    /*Assign the parameters into local variables.*/
    this.height_Int             = _height_Int;  /*CAUTION: Change this using setter.*/
    this.width_Int              = _width_Int;   /*CAUTION: Change this using setter.*/





    this.xC_Int                 = _xC_Int;      /*CAUTION: Change this using setter.*/
    this.yC_Int                 = _yC_Int;      /*CAUTION: Change this using setter.*/
    this.fill_Bool              = _fill_Bool;
    this.fillColor_String       = _fillColor_String;
    this.stroke_Bool            = _stroke_Bool;
    this.stroke_Int             = _stroke_Int;
    this.strokeColor_String     = _strokeColor_String;





    this.xUL_Int                = this.xC_Int - (this.width_Int/2);     /*CAUTION: Do not change this variable.*/
    this.yUL_Int                = this.yC_Int - (this.height_Int/2);    /*CAUTION: Do not change this variable.*/




    this._Area_Struct = new Area_Struct(
        this.width_Int,
        this.height_Int,
        this.xUL_Int,
        this.yUL_Int
    );

};
Node_Object.prototype.constructor = Node_Object;
/*==================================================*/





/*==================================================
Setter functions.*/
Node_Object.prototype.Set_xC_Int_Void = function(_xC_Int){

    this.xC_Int         = _xC_Int;
    this.xUL_Int        = this.xC_Int - (this.width_Int/2);
    this._Area_Struct   = new Area_Struct(
        this.width_Int,
        this.height_Int,
        this.xUL_Int,
        this.yUL_Int
    );

};
Node_Object.prototype.Set_yC_Int_Void = function(_yC_Int){

    this.yC_Int         = _yC_Int;
    this.yUL_Int        = this.yC_Int - (this.height_Int/2);
    this._Area_Struct   = new Area_Struct(
        this.width_Int,
        this.height_Int,
        this.xUL_Int,
        this.yUL_Int
    );




    //console.log(this.height_Int/2);
    //console.log(this.yC_Int);
    //console.log(this.yUL_Int);
    //console.log(this.height_Int/2 + " " + this.yC_Int + " " + this.yUL_Int);

};
Node_Object.prototype.Set_height_Int_Void = function(_height_Int){

    this.height_Int     = _height_Int
    this.yUL_Int        = this.yC_Int - (this.height_Int/2);
    this._Area_Struct   = new Area_Struct(
        this.width_Int,
        this.height_Int,
        this.xUL_Int,
        this.yUL_Int
    );

}
Node_Object.prototype.Set_width_Int_Void = function(_width_Int){

    this.width_Int      = _width_Int
    this.xUL_Int        = this.xC_Int - (this.width_Int/2);
    this._Area_Struct   = new Area_Struct(
        this.width_Int,
        this.height_Int,
        this.xUL_Int,
        this.yUL_Int
    );

}
/*==================================================*/





/*==================================================*/
Node_Object.prototype.Update_Node_Object = function(){

    ellipseMode(CORNER);





    if(this.fill_Bool == true){ fill(this.fillColor_String); }
    else if(this.fill_Bool == false){ noFill(); }
    //console.log(this.fill_Bool);





    if(this.stroke_Bool == true){
        stroke(this.strokeColor_String);
        strokeWeight(this.stroke_Int);
    }
    else if(this.stroke_Bool == false){ noStroke(); }
    //console.log(this.stroke_Bool);





    ellipse(
        this.xUL_Int,
        this.yUL_Int,
        this.width_Int,
        this.height_Int
    );





    fill("#FFFFFF");
    stroke("#000000");
    strokeWeight(1);
    ellipseMode(CENTER);





    return this;

};
/*==================================================*/