var lme3 = getTag('data_lme_3');



eval('data =' + lme3);

//debugString(nutkernel);

if(typeof data == 'object') {

setTag('data1_LME3', data.data1); // Mill Current 
//setTag('data2_LME3', data.data2); // Output Pressure (%) Not used
setTag('data3_LME3', data.data3); // Mill Inlet pressure
setTag('data4_LME3', data.data4); // Mull Outlet Pressure
//setTag('data5_LME3', data.data5); // Inlet Pressure  Heat Xchanger
setTag('data6_LME3', data.data6); // Feed Pump Speed
//setTag('data7_LME3', data.data7); // Discharge Pump Speed
setTag('data8_LME3', data.data8); // Mill Rotation
setTag('data9_LME3', data.data9); // Product Output Temperature
//setTag('data10_LME3', data.data10); // Heat Xchanger Temperature

setTag('LME3_IHM_ST_Moinho_status', data.IHM_ST_Moinho_status);

setTag('LME3_alarm1', data.alarm1);
setTag('LME3_alarm2', data.alarm2);
setTag('LME3_alarm3', data.alarm3);
setTag('LME3_alarm4', data.alarm4);

}  
 
  
var lme3_alarm = getTag('data_alarm_lme3');



eval('data_alarm =' + lme3_alarm);







if(typeof data_alarm == 'object') {

setTag('LME3_alarm_message', data_alarm.message); 
setTag('LME3_alarm_status', data_alarm.status); 
} 










