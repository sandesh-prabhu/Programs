function land(){
    this.area=''
    this.status=''
}
land.prototype.setParam=function(data){
    this.area=data
    return this
}
land.prototype.setOpen=function(){
    this.status="for sale"
    return this
}
land.prototype.setClose=function(){
    this.status="not for sale"
    return this
}
land.prototype.getStatus=function(){
    console.log("The '"+this.area+"' land is "+this.status)
    return this
}
let area51=new land()
area51.setParam("1360 sq.m.").setOpen().getStatus().setClose().getStatus()