var salsa3000 = getTag('data_salsa3000');

eval('data =' + salsa3000);



if(typeof data == 'object') {

setTag('salsa3000_mixing_tank_product_temp', data.mixing_tank_product_temp); //Current Conche Product Temperature (°C) CE600
setTag('salsa3000_cocoa_butter_melter_boiler_water_temp', data.cocoa_butter_melter_boiler_water_temperature); // Temp. Product Cooling Tank 
setTag('salsa3000_fat_storage_tank_temp', data.fat_storage_tank_temperature); // Temp. Product Holding Tank
setTag('salsa3000_lecithin_feed_tank_level', data.lecithin_feed_tank_level); // Mill LME500 Feeding Pump Speed (rpm)
setTag('salsa3000_process_tank_level', data.process_tank_level); // Mill CUM450 Motor Speed (rpm)
setTag('salsa3000_process_tank_temp', data.process_tank_temperature); // Mill LME500 Current (A) 
setTag('salsa3000_cleaning_fat_tank_pressure', data.cleaning_fat_tank_pressure); // Mill LME500 In Product Pressure (bar)
setTag('salsa3000_master_refiner_inlet_pressure', data.master_refiner_inlet_pressure); //  Mill LME500 Out Product Temperature (°C)

setTag('salsa3000_master_refiner_outlet_pressure', data.master_refiner_outlet_pressure);
setTag('salsa3000_lobe_pump_outlet_pressure', data.lobe_pump_outlet_pressure);
setTag('salsa3000_master_refiner_outlet_temp', data.master_refiner_outlet_temperature);
setTag('salsa3000_pump_inlet_pressure', data.pump_inlet_pressure);
setTag('salsa3000_pump_outlet_pressure', data.pump_outlet_pressure);
setTag('salsa3000_nt100_tank_temp', data.nt100_tank_temperature);
setTag('salsa3000_external_samba_outlet_temp', data.external_samba_outlet_temperature);
setTag('salsa3000_external_samba_outlet_temp', data.sugar_current_weight);
setTag('salsa3000_cocoa_current_weight', data.cocoa_current_weight);
setTag('salsa3000_fat_storage_tank_current_weight', data.fat_storage_tank_current_weight);
setTag('salsa3000_pig_system_pressure', data.pig_system_pressure);
setTag('salsa3000_nivel_lecitina_actual', data.nivel_lecitina_actual);
setTag('salsa3000_rpm_cocoa_powder_dosage_rotary_valve', data.rpm_cocoa_powder_dosage_rotary_valve);
setTag('salsa3000_rpm_milk_powder_dosage_rotary_valve', data.rpm_milk_powder_dosage_rotary_valve);
setTag('salsa3000_rpm_product_transference_pump', data.rpm_product_transference_pump);
setTag('salsa3000_rpm_mixing_tank_masterblend_3000_disperser', data.rpm_mixing_tank_masterblend_3000_disperser);
setTag('salsa3000_rpm_external_samba', data.rpm_external_samba);

setTag('salsa3000_rpm_fat_storage_tank_transference_pump', data.rpm_fat_storage_tank_transference_pump);

setTag('salsa3000_rpm_lecithin_add_tank_transference_pump', data.rpm_lecithin_add_tank_transference_pump);
setTag('salsa3000_rpm_lecithin_feed_tank_transference_pump', data.rpm_lecithin_feed_tank_transference_pump);

setTag('salsa3000_rpm_process_tank_agitator', data.rpm_process_tank_agitator);

setTag('salsa3000_rpm_cleaning_fat_tank_disperser', data.rpm_cleaning_fat_tank_disperser);
setTag('salsa3000_rpm_masterrefiner_300_mill', data.rpm_masterrefiner_300_mill);

setTag('salsa3000_rpm_masterrefiner_300_feed_pump', data.rpm_masterrefiner_300_feed_pump);

setTag('salsa3000_rpm_masterrefiner_300_discharge_pump', data.rpm_masterrefiner_300_discharge_pump);
setTag('salsa3000_rpm_sugar_dosage_rotary_valve', data.rpm_sugar_dosage_rotary_valve);
} 