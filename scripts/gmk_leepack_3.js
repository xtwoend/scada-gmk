var leepack3 = getTag('data_leepack_3');

eval('data =' + leepack3);
if(typeof data == 'object') {

if (data.mc_run == true ){setTag('mc_run_leepack3',1);}else{setTag('mc_run_leepack3',0);}
setTag('mc_stop_leepack3', data.mc_stop);
setTag('sv_bag_leepack3', data.sv_bag);
setTag('pv_bag_leepack3', data.pv_bag);
setTag('sv_filling_speed_rpm_leepack3', data.sv_filling_speed_rpm);
setTag('sv_filling_pulse_leepack3', data.sv_filling_pulse);
//setTag('level_hopper_leepack3', data.level_hopper);
}  


  
































