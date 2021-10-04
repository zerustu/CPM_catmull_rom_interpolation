/* Animation */

/* catmull rom interpolation by zerustu */
function animation_catmullrom_rotation(entity,model,frame,total_time,bone,original_positionX,original_positionY,original_positionZ){
    var anim_moment= entity.getAge()%(total_time*20)
    for (var i=0; i<frame.length-2;i=i+2){
        if (anim_moment>=(frame[i]*20)&&anim_moment<=(frame[i+2]*20)){
			var t = (anim_moment-(frame[i]*20))/(frame[i+2]*20-frame[i*20])
            var res_1 = frame[i+1][0][0]*Math.pow(t, 3) + frame[i+1][0][1]*Math.pow(t, 2) + frame[i+1][0][2]*t + frame[i+1][0][3];
            var res_2 = frame[i+1][1][0]*Math.pow(t, 3) + frame[i+1][1][1]*Math.pow(t, 2) + frame[i+1][1][2]*t + frame[i+1][1][3];
            var res_3 = frame[i+1][2][0]*Math.pow(t, 3) + frame[i+1][2][1]*Math.pow(t, 2) + frame[i+1][2][2]*t + frame[i+1][2][3];
            model.getBone(bone).setRotation(res_1+original_positionX,res_2+original_positionY,res_3+original_positionZ);
        }
    }
}
function animation_catmullrom_position(entity,model,frame,total_time,bone,original_positionX,original_positionY,original_positionZ){
    var anim_moment= entity.getAge()%(total_time*20)
    for (var i=0; i<frame.length-2;i=i+2){
        if (anim_moment>=(frame[i]*20)&&anim_moment<=(frame[i+2]*20)){
            var t = (anim_moment-(frame[i]*20))/(frame[i+2]*20-frame[i*20])
            var res_1 = frame[i+1][0][0]*Math.pow(t, 3) + frame[i+1][0][1]*Math.pow(t, 2) + frame[i+1][0][2]*t + frame[i+1][0][3];
            var res_2 = frame[i+1][1][0]*Math.pow(t, 3) + frame[i+1][1][1]*Math.pow(t, 2) + frame[i+1][1][2]*t + frame[i+1][1][3];
            var res_3 = frame[i+1][2][0]*Math.pow(t, 3) + frame[i+1][2][1]*Math.pow(t, 2) + frame[i+1][2][2]*t + frame[i+1][2][3];
            model.getBone(bone).setPosition(res_1+original_positionX,res_2+original_positionY,res_3+original_positionZ);
        }
    }
}

function init(entity, model){
}
function update(entity, model){
    // Place here the animation
}
function tick(entity, model){
}
