var bl1 = getTag('data_bl1');



eval('data =' + bl1);







if(typeof data == 'object') {



setTag('bl1_cooling_temperature1', data.cooling_temperature1); //Current Conche Product Temperature (°C) CE600

setTag('bl1_cooling_temperature2', data.cooling_temperature2); // Temp. Product Cooling Tank 

setTag('bl1_formen_temperature', data.formen_temperature); // Temp. Product Holding Tank

setTag('bl1_temperature_heating1_up', data.temperature_heating1_up); // Mill LME500 Feeding Pump Speed (rpm)

setTag('bl1_tempeature_heating2_up', data.tempeature_heating2_up); // Mill CUM450 Motor Speed (rpm)

setTag('bl1_cooling_tempeature3', data.cooling_tempeature3); // Mill LME500 Current (A) 

setTag('bl1_cooling_tempeature4', data.cooling_tempeature4); // Mill LME500 In Product Pressure (bar)

setTag('bl1_water_temp_forward_run', data.water_temp_forward_run); //  Mill LME500 Out Product Temperature (°C)



setTag('bl1_water_temp_runback', data.water_temp_runback);


} 