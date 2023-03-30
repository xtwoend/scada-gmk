var leepack2 = getTag('data_leepack_2');
eval('data =' + leepack2);

if(typeof data == 'object') {

if (data.mc_run == true ){setTag('mc_run_leepack2',1);}else{setTag('mc_run_leepack2',0);}
setTag('mc_stop_leepack2', data.mc_stop);
setTag('sv_speed_bpm_leepack2', data.sv_speed_bpm);
setTag('pv_speed_bpm_leepack2', data.pv_speed_bpm);
setTag('sv_bag_leepack2', data.sv_bag);
setTag('pv_bag_leepack2', data.pv_bag);
setTag('sv_filling_speed_rpm_leepack2', data.sv_filling_speed_rpm);
setTag('pv_filling_speed_rpm_leepack2', data.pv_filling_speed_rpm);
//setTag('level_hopper_leepack2', data.level_hopper);

}  

  





















