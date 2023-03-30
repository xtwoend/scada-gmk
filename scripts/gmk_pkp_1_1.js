var pkp1_1 = getTag('data_pkp_1');     

eval('data =' + pkp1_1);     

if(typeof data == 'object') { 

setTag('pkp1.1_a1.1', data.ai_refiner[0]);     // Temp Cooling Tank 1
setTag('pkp1.1_a1.2', data.ai_refiner[1]);     // Temp Holding Tank 1
setTag('pkp1.1_a1.3', data.ai_refiner[2]);     // Temp Cooling Tank 5
setTag('pkp1.1_a1.4', data.ai_refiner[3]);     // Temp Holding Tank 6
setTag('pkp1.1_a1.5', data.ai_refiner[4]);     // Temp Cooling Tank LM3
setTag('pkp1.1_a1.6', data.ai_refiner[5]);     // Temp Holding Tank LM3
setTag('pkp1.1_a1.7', data.ai_refiner[6]);     // Not used
setTag('pkp1.1_a1.8', data.ai_refiner[7]);     // Not Used


if (data.di_refiner[0] == true ){setTag('pkp1.1_i2.0',1);}else{setTag('pkp1.1_i2.0',0);} // Cooling Tank 1 Run   
if (data.di_refiner[1] == true ){setTag('pkp1.1_i2.1',1);}else{setTag('pkp1.1_i2.1',0);}// Hold Tank 1 Run 
if (data.di_refiner[2] == true ){setTag('pkp1.1_i2.2',1);}else{setTag('pkp1.1_i2.2',0);} // Cooling Tank 5 Run
if (data.di_refiner[3] == true ){setTag('pkp1.1_i2.3',1);}else{setTag('pkp1.1_i2.3',0);}  // Hold Tank 6 Run
if (data.di_refiner[4] == true ){setTag('pkp1.1_i2.4',1);}else{setTag('pkp1.1_i2.4',0);}// Cooling Tank LM3 Run
if (data.di_refiner[5] == true ){setTag('pkp1.1_i2.5',1);}else{setTag('pkp1.1_i2.5',0);}// Cooling Tank LM3 Run
   

}       

    