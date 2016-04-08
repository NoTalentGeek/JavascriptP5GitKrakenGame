/*==================================================*/

var Bar_Object = function(){

    this.width_Int = ((3/4)*width) - global_offsetSizeFix_Int;
    this.height_Int = 50 - global_offsetSizeFix_Int;





    this.xUL_Int = ((1/4)*width) + global_offset_Int;
    this.yUL_Int = global_offset_Int;





    this._Area_Struct = new Area_Struct(
        this.width_Int,
        this.height_Int,
        this.xUL_Int,
        this.yUL_Int
    );

};
Bar_Object.prototype.constructor = Bar_Object;
/*==================================================*/





/*==================================================*/
Bar_Object.prototype.Update_Bar_Object = function(){

    rectMode(CORNER);
    fill("#663931");
    stroke("#45283C");
    strokeWeight(10);





    rect(
        this.xUL_Int,
        this.yUL_Int,
        this.width_Int,
        this.height_Int,
        global_offset_Int
    );





    fill("#FFFFFF");
    stroke("#000000");
    strokeWeight(1);
    rectMode(CORNER);




    return this;

};
/*==================================================*/