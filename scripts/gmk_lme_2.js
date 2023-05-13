var lme2 = getTag('data_lme_2');

eval('data =' + lme2);

//debugString(nutkernel);

if(typeof data == 'object') {

setTag('LME2_HMI_TK_ST_DispTKTemp', data.HMI_TK_ST_DispTKTemp);
 // Temp. Product Cin Mixer Tank (Dispatch)
setTag('LME2_HMI_TK_ST_HoldTkTemp', data.HMI_TK_ST_HoldTkTemp); // Temperature Product Holding Tank
setTag('LME2_HMI_LME_ST_FeedPSpeed', data.HMI_LME_ST_FeedPSpeed); //Mill LME500 Feeding Pump Speed (rpm)
setTag('LME2_HMI_TK_ST_DispSpeed', data.HMI_TK_ST_DispSpeed);// Disperser Motor Speed (rpm)
setTag('LME2_HMI_LME_ST_MillCurrent', data.HMI_LME_ST_MillCurrent); //Mill LME500 Current (A)
setTag('LME2_HMI_LME_ST_InProdPres', data.HMI_LME_ST_InProdPres); //Mill LME500 In Product Pressure (bar)
setTag('LME2_HMI_LME_ST_OutProdTemp', data.HMI_LME_ST_OutProdTemp); //Mill LME500 Out Product Temperature (°C)
setTag('LME2_HMI_LME_ST_MillSpeed', data.HMI_LME_ST_MillSpeed); //LME Mill ST Speed


setTag('LME2_HMI_LME_ST_FeedingPump_Status', data.HMI_LME_ST_FeedingPump_Status);
setTag('LME2_HMI_LME_ST_MillMotor_Status', data.HMI_LME_ST_MillMotor_Status);
setTag('LME2_HMI_TK_ST_TksTransfPump_Status', data.HMI_TK_ST_TksTransfPump_Status);

setTag('LME2_HMI_TK_ST_DispTkAgit_status', data.HMI_TK_ST_DispTkAgit_status);

setTag('LME2_HMI_TK_ST_HoldTkAgit_status', data.HMI_TK_ST_HoldTkAgit_status);
setTag('LME2_HMI_LME_ST_RecirPump_status', data.HMI_LME_ST_RecirPump_status);
}  

var lme2_alarm = getTag('data_alarm_lme2');



eval('data_alarm =' + lme2_alarm);







if(typeof data_alarm == 'object') {

setTag('LME2_alarm_message', data_alarm.message); 
setTag('LME2_alarm_status', data_alarm.status); 
} 
  









