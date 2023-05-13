var leepack1 = getTag('data_leepack_1');



eval('data =' + leepack1);

//debugString(nutkernel);

if(typeof data == 'object') {

if (data.mc_run == true ){setTag('mc_run_leepack1',1);}else{setTag('mc_run_leepack1',0);}
setTag('mc_stop_leepack1', data.mc_stop);
setTag('filling_speed_leepack1', data.filling_speed);
setTag('sv_speed_bpm_leepack1', data.sv_speed_bpm);
setTag('pv_speed_bpm_leepack1', data.pv_speed_bpm);
setTag('sv_bag_leepack1', data.sv_bag);
setTag('pv_bag_leepack1', data.pv_bag);
setTag('sv_filling_speed_rpm_leepack1', data.sv_filling_speed_rpm);
setTag('pv_filling_speed_rpm_leepack1', data.pv_filling_speed_rpm);
//setTag('level_hopper_leepack1', data.level_hopper);


}  

var leepack1_alarm = getTag('data_alarm_leepack1');



eval('data_alarm =' + leepack1_alarm);







if(typeof data_alarm == 'object') {

setTag('Leepack1_alarm_message', data_alarm.message); 
setTag('Leepack1_alarm_status', data_alarm.status); 
} 
  









