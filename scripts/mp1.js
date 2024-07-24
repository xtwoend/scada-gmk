var mp1 = getTag('data_mp1');





eval('data =' + mp1);











if(typeof data == 'object') {





setTag('mp1_sp_machine_weighing_minute_from_hmi', data.sp_machine_weighing_minute_from_hmi); //Current Conche Product Temperature (°C) CE600


setTag('mp1_sp_right_dispenser_preaspiration_distance_from_hmi', data.sp_right_dispenser_preaspiration_distance_from_hmi); // Temp. Product Cooling Tank 


setTag('mp1_sp_right_dosing_suction_distance_from_hmi', data.sp_right_dosing_suction_distance_from_hmi); // Temp. Product Holding Tank


setTag('mp1_sp_right_dispenser_offset_distance', data.sp_right_dispenser_offset_distance); // Mill LME500 Feeding Pump Speed (rpm)


setTag('mp1_sp_left_dispenser_preaspiration_distance', data.sp_left_dispenser_preaspiration_distance); // Mill CUM450 Motor Speed (rpm)


setTag('mp1_sp_left_dispenser_dosing_distance', data.sp_left_dispenser_dosing_distance); // Mill LME500 Current (A) 


setTag('mp1_sp_left_dispenser_offset_distance', data.sp_left_dispenser_offset_distance); // Mill LME500 In Product Pressure (bar)


setTag('mp1_sp_no_dosages_followed', data.sp_no_dosages_followed); //  Mill LME500 Out Product Temperature (°C)




setTag('mp1_sp_left_dispenser_start_delay_time_from_hmi', data.sp_left_dispenser_start_delay_time_from_hmi);



setTag('mp1_sp_left_dispenser_preaspiration_distance_from_hmi', data.sp_left_dispenser_preaspiration_distance_from_hmi); // Temp. Product Cooling Tank 



setTag('mp1_sp_left_dosing_suction_distance_from_hmi', data.sp_left_dosing_suction_distance_from_hmi); // Temp. Product Holding Tank



setTag('mp1_pv_hopper_temperature', data.pv_hopper_temperature); // Mill LME500 Feeding Pump Speed (rpm)



setTag('mp1_sp_hopper_temperature', data.sp_hopper_temperature); // Mill CUM450 Motor Speed (rpm)



setTag('mp1_pv_tunnel_temperature', data.pv_tunnel_temperature); // Mill LME500 Current (A) 



setTag('mp1_weighing_machine_minute', data.weighing_machine_minute); // Mill LME500 In Product Pressure (bar)



setTag('mp1_partial_dosage_counter', data.partial_dosage_counter); //  Mill LME500 Out Product Temperature (°C)





setTag('mp1_total_dosage_counter', data.total_dosage_counter);


setTag('mp1_drag_belt_driver_alarm_code', data.drag_belt_driver_alarm_code); // Mill LME500 Current (A) 



setTag('mp1_right_dosing_driver_alarm_code', data.right_dosing_driver_alarm_code);
setTag('mp1_total_operating_hours_counter', data.total_operating_hours_counter); //  Mill LME500 Out Product Temperature (°C)





setTag('mp1_total_operating_minute_counter', data.total_operating_minute_counter);




setTag('mp1_sp_lifting_table_height', data.sp_lifting_table_height); // Temp. Product Cooling Tank 




setTag('mp1_sp_percentage_dosage_start_lowering_lifting_table', data.sp_percentage_dosage_start_lowering_lifting_table); // Temp. Product Holding Tank




setTag('mp1_sp_percentage_dosage_start_conveyor_belt_run', data.sp_percentage_dosage_start_conveyor_belt_run); // Mill LME500 Feeding Pump Speed (rpm)




setTag('mp1_sp_vibrator_speed', data.sp_vibrator_speed); // Mill CUM450 Motor Speed (rpm)




setTag('mp1_sp_work_temp_hopper', data.sp_work_temp_hopper); // Mill LME500 Current (A) 




setTag('mp1_sp_maintain_temp_hopper', data.sp_maintain_temp_hopper); // Mill LME500 In Product Pressure (bar)




setTag('mp1_sp_tunnel_temperature', data.sp_tunnel_temperature); //  Mill LME500 Out Product Temperature (°C)





} 