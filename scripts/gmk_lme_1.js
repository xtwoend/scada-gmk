var lme1 = getTag('data_lme_1');

eval('data =' + lme1);



if(typeof data == 'object') {

setTag('LME1_HMI_CE_ST_ConcProdTemp', data.HMI_CE_ST_ConcProdTemp); //Current Conche Product Temperature (°C) CE600
setTag('LME1_HMI_TK_ST_CoolTkTemp', data.HMI_TK_ST_CoolTkTemp); // Temp. Product Cooling Tank 
setTag('LME1_HMI_TK_ST_HoldTkTemp', data.HMI_TK_ST_HoldTkTemp); // Temp. Product Holding Tank
setTag('LME1_HMI_LME_ST_FeedPSpeed', data.HMI_LME_ST_FeedPSpeed); // Mill LME500 Feeding Pump Speed (rpm)
setTag('LME1_HMI_CUM_ST_MillSpeed', data.HMI_CUM_ST_MillSpeed); // Mill CUM450 Motor Speed (rpm)
setTag('LME1_HMI_LME_ST_MillCurrent', data.HMI_LME_ST_MillCurrent); // Mill LME500 Current (A) 
setTag('LME1_HMI_LME_ST_InProdPres', data.HMI_LME_ST_InProdPres); // Mill LME500 In Product Pressure (bar)
setTag('LME1_HMI_LME_ST_OutProdTemp', data.HMI_LME_ST_OutProdTemp); //  Mill LME500 Out Product Temperature (°C)

setTag('LME1_HMI_LME_ST_MillMotor_Status', data.LME_ST_MillMotor_Status);
setTag('LME1_HMI_TK_ST_TksTransfPump_Status', data.TK_ST_TksTransfPump_Status);
setTag('LME1_LME_ST_FeedingPump_Status', data.LME_ST_FeedingPump_Status);
setTag('LME1_HMI_TK_ST_CoolTkAgit_status', data.HMI_TK_ST_CoolTkAgit_status);
setTag('LME1_HMI_TK_ST_HoldTkAgit_status', data.HMI_TK_ST_HoldTkAgit_status);
setTag('LME1_HMI_CE_ST_Conche_status', data.HMI_CE_ST_Conche_status);
setTag('LME1_HMI_LME_ST_RecirPump_status', data.HMI_LME_ST_RecirPump_status);
}  
  










