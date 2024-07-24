var salsa6000 = getTag('data_salsa6000');



eval('data =' + salsa6000);







if(typeof data == 'object') {



setTag('salsa6000_mill_status', data.mill_status); //Current Conche Product Temperature (°C) CE600

setTag('salsa6000_mill_max_speed', data.mill_max_speed); // Temp. Product Cooling Tank 

setTag('salsa6000_mill_speed', data.mill_speed); // Temp. Product Holding Tank

setTag('salsa6000_mill_curent', data.mill_curent); // Mill LME500 Feeding Pump Speed (rpm)

setTag('salsa6000_mill_power', data.mill_power); // Mill CUM450 Motor Speed (rpm)

setTag('salsa6000_sealpump_status', data.sealpump_status); // Mill LME500 Current (A) 

setTag('salsa6000_feedpump_status', data.feedpump_status); // Mill LME500 In Product Pressure (bar)

setTag('salsa6000_feedpump_maxspeed', data.feedpump_maxspeed); //  Mill LME500 Out Product Temperature (°C)



setTag('salsa6000_feedpump_minspeed', data.feedpump_minspeed);

setTag('salsa6000_feedpump_speed', data.feedpump_speed);

setTag('salsa6000_feedpump_current', data.feedpump_current);

setTag('salsa6000_feedpump_power', data.feedpump_power);


setTag('salsa6000_agitator_status', data.agitator_status);

setTag('salsa6000_agitator_maxspeed', data.agitator_maxspeed);

setTag('salsa6000_agitator_minspeed', data.agitator_minspeed);

setTag('salsa6000_agitator_speed', data.agitator_speed);

setTag('salsa6000_agitator_current', data.agitator_current);

setTag('salsa6000_agitator_power', data.agitator_power);


setTag('salsa6000_dischpump_status', data.dischpump_status);

setTag('salsa6000_dischpump_maxspeed', data.dischpump_maxspeed);

setTag('salsa6000_dischpump_mispeed', data.dischpump_mispeed);

setTag('salsa6000_dischpump_speed', data.dischpump_speed);

setTag('salsa6000_dischpump_current', data.dischpump_current);


setTag('salsa6000_dischpump_power', data.dischpump_power);

setTag('salsa6000_general_machine_status', data.general_machine_status);


setTag('salsa6000_general_energy', data.general_energy);


setTag('salsa6000_product_pressure_inlet', data.product_pressure_inlet);

setTag('salsa6000_product_temperature_outlet', data.product_temperature_outlet);


setTag('salsa6000_cooling_water_flow', data.cooling_water_flow);



} 