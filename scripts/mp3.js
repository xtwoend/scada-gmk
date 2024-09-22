var mp3 = getTag('data_mp3');












eval('data =' + mp3);







if(typeof data == 'object') {



setTag('mp3_water_heater_pv', data.water_heater_pv); //Current Conche Product Temperature (°C) CE600




setTag('mp3_water_heater_sv', data.water_heater_sv); // Temp. Product Cooling Tank 




setTag('mp3_pump_speed', data.pump_speed); // Temp. Product Holding Tank




setTag('mp3_hose_heater_pv', data.hose_heater_pv); // Mill LME500 Feeding Pump Speed (rpm)




setTag('mp3_hose_hwater_sv', data.hose_hwater_sv); // Mill CUM450 Motor Speed (rpm)




setTag('mp3_encoder_cutoff_value', data.encoder_cutoff_value); // Mill LME500 Current (A) 




setTag('mp3_cutter_cutter_speed', data.cutter_cutter_speed); // Mill LME500 In Product Pressure (bar)




setTag('mp3_cutter_belt_speed', data.cutter_belt_speed); //  Mill LME500 Out Product Temperature (°C)






setTag('mp3_cutter_cutting_lenght', data.cutter_cutting_lenght);




setTag('mp3_servo_pulse_travel', data.servo_pulse_travel); //Current Conche Product Temperature (°C) CE600






setTag('mp3_water_heater_alarm_upper_limit', data.water_heater_alarm_upper_limit); // Temp. Product Cooling Tank 






setTag('mp3_water_heater_alarm_lower_limit', data.water_heater_alarm_lower_limit); // Temp. Product Holding Tank






setTag('mp3_hose_heater_alarm_upper_limit', data.hose_heater_alarm_upper_limit); // Mill LME500 Feeding Pump Speed (rpm)






setTag('mp3_hose_heater_alarm_lower_limit', data.hose_heater_alarm_lower_limit); // Mill CUM450 Motor Speed (rpm)






setTag('mp3_recipe_par_conveyor_belt_sv', data.recipe_par_conveyor_belt_sv); // Mill LME500 Current (A) 






setTag('mp3_recipe_par_cutter_speed', data.recipe_par_cutter_speed); // Mill LME500 In Product Pressure (bar)






setTag('mp3_depositor_pump_speed', data.depositor_pump_speed); //  Mill LME500 Out Product Temperature (°C)






setTag('mp3_stripe_lenght', data.stripe_lenght);




setTag('mp3_cutting_offset_increament_value', data.cutting_offset_increament_value); //  Mill LME500 Out Product Temperature (°C)









setTag('mp3_cutting_offset_decreament_value', data.cutting_offset_decreament_value);



} 
































