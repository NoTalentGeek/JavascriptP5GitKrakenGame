/*==================================================*/
var Container_Object = function(
    _x_Int,
    _y_Int,
    _width_Int,
    _height_Int
){

    this.x_Int      = _x_Int;
    this.y_Int      = _y_Int;
    this.width_Int  = _width_Int;
    this.height_Int = _height_Int;




    this.insideComponent_Dynamic_Array = new Array(0);

};
Container_Object.prototype.constructor = Container_Object;
/*==================================================*/





/*==================================================
A function to add visual object into this container.*/
Container_Object.prototype.AddComponent_Container_Object = function(__Dynamic_Object){

    this.insideComponent_Dynamic_Array.push(__Dynamic_Object);





    return this;

};
/*==================================================*/





/*==================================================*/
Container_Object.prototype.Draw_Container_Object = function(){

    fill(global_containerColor_String);
    noStroke();
    rect(
        this.x_Int,
        this.y_Int,
        this.width_Int,
        this.height_Int,
        20
    );
    stroke("rgba(0, 0, 0, 1)");
    fill("rgba(0, 0, 0, 1)");





    return this;

};
/*==================================================*/