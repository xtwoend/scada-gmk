var mp2 = getTag('data_mp2');



eval('data =' + mp2);







if(typeof data == 'object') {



setTag('mp2_water_temperature', data.water_temperature); //Current Conche Product Temperature (°C) CE600

setTag('mp2_temperature_heating_house', data.temperature_heating_house); // Temp. Product Cooling Tank 

setTag('mp2_water_temperature_in', data.water_temperature_in); // Temp. Product Holding Tank

setTag('mp2_water_temperature_out', data.water_temperature_out); // Mill LME500 Feeding Pump Speed (rpm)

setTag('mp2_level_control_left', data.level_control_left); // Mill CUM450 Motor Speed (rpm)

setTag('mp2_cooling_temperature1_right', data.cooling_temperature1_right); // Mill LME500 Current (A) 

setTag('mp2_cooling_temperature2_left', data.cooling_temperature2_left); // Mill LME500 In Product Pressure (bar)

setTag('mp2_cooling_temperature3_right', data.cooling_temperature3_right); //  Mill LME500 Out Product Temperature (°C)



setTag('mp2_cooling_temperature4_left', data.cooling_temperature4_left);


} 


