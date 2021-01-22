function detectCollision(Obj1,Obj2) {

    sos = Obj1.body.position
    gos = Obj2.body.position
    
    var distance=dist(sos.x,sos.y,gos.x,gos.y);
      if (distance<=Obj2.r + Obj1.r){
    
      Matter.Body.setStatic(Obj2.body,false);
      
    }
}