var pku1 = getTag('data_pku_1');

eval('data =' + pku1);



if(typeof data == 'object') {

setTag('pku1_a1.1', data.ai_module_1[0]); // Pressure Comp Screw 7
setTag('pku1_a1.2', data.ai_module_1[1]); // Temp Chill WT1
setTag('pku1_a1.3', data.ai_module_1[2]); // Level Chill WT1
setTag('pku1_a1.4', data.ai_module_1[3]); // Temp Chill WT2
setTag('pku1_a1.5', data.ai_module_1[4]); // Level Chill WT2
setTag('pku1_a1.6', data.ai_module_1[5]); // Temp Hot WT 45
setTag('pku1_a1.7', data.ai_module_1[6]); // Level Hot WT 45
setTag('pku1_a1.8', data.ai_module_1[7]); // Temmp Hot WT 60

setTag('pku1_a2.1', data.ai_module_2[0]); // Level Hot WT 60    
setTag('pku1_a2.2', data.ai_module_2[1]);  // Temp Hot WT3  
setTag('pku1_a2.3', data.ai_module_2[2]);  // Level Hot WT3  
setTag('pku1_a2.4', data.ai_module_2[3]);    // Level Groung Tank 
setTag('pku1_a2.5', data.ai_module_2[4]);    // Level Water Tank GK
setTag('pku1_a2.6', data.ai_module_2[5]);    // Temp Tank FAT1
setTag('pku1_a2.7', data.ai_module_2[6]);    // Level Tank FAT1
setTag('pku1_a2.8', data.ai_module_2[7]);    // Temp Tank FAT2

setTag('pku1_a3.1', data.ai_module_3[0]);    // Level Tank FAT2
setTag('pku1_a3.2', data.ai_module_3[1]);    // Temp Tank FAT3
setTag('pku1_a3.3', data.ai_module_3[2]);    // Level Tank FAT3
setTag('pku1_a3.4', data.ai_module_3[3]);    // Temp Tank FAT4
setTag('pku1_a3.5', data.ai_module_3[4]);    // Level Tank FAT4
setTag('pku1_a3.6', data.ai_module_3[5]);    // Temp Tank FAT5
setTag('pku1_a3.7', data.ai_module_3[6]);    // Level Tank FAT5
setTag('pku1_a3.8', data.ai_module_3[7]);    // Temp Tank FAT6

setTag('pku1_a4.1', data.ai_module_4[0]);   // Level Tank FAT6 
setTag('pku1_a4.2', data.ai_module_4[1]);    // Temp Tank FAT7
setTag('pku1_a4.3', data.ai_module_4[2]);   // Level Tank FAT7 
setTag('pku1_a4.4', data.ai_module_4[3]);   // Temp Melter Tank  
setTag('pku1_a4.5', data.ai_module_4[4]);   // Level Melter Tank 
setTag('pku1_a4.6', data.ai_module_4[5]);    // Not Used
setTag('pku1_a4.7', data.ai_module_4[6]);    // Not Used
setTag('pku1_a4.8', data.ai_module_4[7]);    // Not Used



if (data.di_module_1[0] == true ){setTag('pku1_i5.0',1);}else{setTag('pku1_i5.0',0);} // Compressor 1 Run 
if (data.di_module_1[1] == true ){setTag('pku1_i5.1',1);}else{setTag('pku1_i5.1',0);} // Compressor  1 Trip
if (data.di_module_1[2] == true ){setTag('pku1_i5.2',1);}else{setTag('pku1_i5.2',0);}// Compressor 2 Run
if (data.di_module_1[3] == true ){setTag('pku1_i5.3',1);}else{setTag('pku1_i5.3',0);} // Compressor 2 Trip
if (data.di_module_1[4] == true ){setTag('pku1_i5.4',1);}else{setTag('pku1_i5.4',0);} // Compressor 3 Run
if (data.di_module_1[5] == true ){setTag('pku1_i5.5',1);}else{setTag('pku1_i5.5',0);} // Compressor 3 Trip
if (data.di_module_1[6] == true ){setTag('pku1_i5.6',1);}else{setTag('pku1_i5.6',0);} // Compressor 4 Run
if (data.di_module_1[7] == true ){setTag('pku1_i5.7',1);}else{setTag('pku1_i5.7',0);} // Compressor 4 Trip
if (data.di_module_1[8] == true ){setTag('pku1_i5.8',1);}else{setTag('pku1_i5.8',0);}  // Compressor Screw 5 Run
if (data.di_module_1[9] == true ){setTag('pku1_i5.9',1);}else{setTag('pku1_i5.9',0);}   // Compressor Screw 6 Run
if (data.di_module_1[10] == true ){setTag('pku1_i5.10',1);}else{setTag('pku1_i5.10',0);} // Compressor Screw 7 Run 
if (data.di_module_1[11] == true ){setTag('pku1_i5.11',1);}else{setTag('pku1_i5.11',0);} // Chill KC1 Run
if (data.di_module_1[12] == true ){setTag('pku1_i5.12',1);}else{setTag('pku1_i5.12',0);}  // Pump Circ KC1 Run
if (data.di_module_1[13] == true ){setTag('pku1_i5.13',1);}else{setTag('pku1_i5.13',0);}  // Chill KC2 Run
if (data.di_module_1[14] == true ){setTag('pku1_i5.14',1);}else{setTag('pku1_i5.14',0);} // Pump Circ KC2 Run
if (data.di_module_1[15] == true ){setTag('pku1_i5.15',1);}else{setTag('pku1_i5.15',0);} // Chill KC3 Run

if (data.di_module_2[0] == true ){setTag('pku1_i6.0',1);}else{setTag('pku1_i6.0',0);} // Pump Circ KC3 Run 
if (data.di_module_2[1] == true ){setTag('pku1_i6.1',1);}else{setTag('pku1_i6.1',0);}   // Chill KC4 Run
if (data.di_module_2[2] == true ){setTag('pku1_i6.2',1);}else{setTag('pku1_i6.2',0);}  // Pump Circ KC4 Run 
if (data.di_module_2[3] == true ){setTag('pku1_i6.3',1);}else{setTag('pku1_i6.3',0);} // Chill KC5 Run
if (data.di_module_2[4] == true ){setTag('pku1_i6.4',1);}else{setTag('pku1_i6.4',0);} // Pump Circ KC5 Run
if (data.di_module_2[5] == true ){setTag('pku1_i6.5',1);}else{setTag('pku1_i6.5',0);}   // Chill KC6 Run 
if (data.di_module_2[6] == true ){setTag('pku1_i6.6',1);}else{setTag('pku1_i6.6',0);}  // Pump Circ KC6 Run
if (data.di_module_2[7] == true ){setTag('pku1_i6.7',1);}else{setTag('pku1_i6.7',0);} // Chill KC7 Run
if (data.di_module_2[8] == true ){setTag('pku1_i6.8',1);}else{setTag('pku1_i6.8',0);}  // Pump Circ KC7 Run 
if (data.di_module_2[9] == true ){setTag('pku1_i6.9',1);}else{setTag('pku1_i6.9',0);}    // Chill KC8 Run 
if (data.di_module_2[10] == true ){setTag('pku1_i6.10',1);}else{setTag('pku1_i6.10',0);}  // Pump Circ KC8 Run 
if (data.di_module_2[11] == true ){setTag('pku1_i6.11',1);}else{setTag('pku1_i6.11',0);} // Chill KC9 Run
if (data.di_module_2[12] == true ){setTag('pku1_i6.12',1);}else{setTag('pku1_i6.12',0);}  // Pump Circ KC9 Run 
if (data.di_module_2[13] == true ){setTag('pku1_i6.13',1);}else{setTag('pku1_i6.13',0);}  // Chill KC10 Run
if (data.di_module_2[14] == true ){setTag('pku1_i6.14',1);}else{setTag('pku1_i6.14',0);} // Pump Circ KC10 Run 
if (data.di_module_2[15] == true ){setTag('pku1_i6.15',1);}else{setTag('pku1_i6.15',0);}  // Chill KC11 Run 


if (data.di_module_3[0] == true ){setTag('pku1_i7.0',1);}else{setTag('pku1_i7.0',0);} // Pump Circ KC11 Run 
if (data.di_module_3[1] == true ){setTag('pku1_i7.1',1);}else{setTag('pku1_i7.1',0);}   // Chilled WT1 Run
if (data.di_module_3[2] == true ){setTag('pku1_i7.2',1);}else{setTag('pku1_i7.2',0);}  // Chilled WT2 Run
if (data.di_module_3[3] == true ){setTag('pku1_i7.3',1);}else{setTag('pku1_i7.3',0);}    // Chilled WT3 Run
if (data.di_module_3[4] == true ){setTag('pku1_i7.4',1);}else{setTag('pku1_i7.4',0);} // Chilled WT4 Run
if (data.di_module_3[5] == true ){setTag('pku1_i7.5',1);}else{setTag('pku1_i7.5',0);}   // Hot Water Pump 1 Run
if (data.di_module_3[6] == true ){setTag('pku1_i7.6',1);}else{setTag('pku1_i7.6',0);}   // Hot Water Pump 2 Run 
if (data.di_module_3[7] == true ){setTag('pku1_i7.7',1);}else{setTag('pku1_i7.7',0);}  // Hot Water Pump 3 Run
if (data.di_module_3[8] == true ){setTag('pku1_i7.8',1);}else{setTag('pku1_i7.8',0);} // Hot Water Pump 4 Run 
if (data.di_module_3[9] == true ){setTag('pku1_i7.9',1);}else{setTag('pku1_i7.9',0);}    // Hot Water Pump 5 Run 
if (data.di_module_3[10] == true ){setTag('pku1_i7.10',1);}else{setTag('pku1_i7.10',0);}  // Hot Water Pump 6 Run 
if (data.di_module_3[11] == true ){setTag('pku1_i7.11',1);}else{setTag('pku1_i7.11',0);}  // Hot Water Pump 7 Run 
if (data.di_module_3[12] == true ){setTag('pku1_i7.12',1);}else{setTag('pku1_i7.12',0);}  // Hot Water Pump 8 Run   
if (data.di_module_3[13] == true ){setTag('pku1_i7.13',1);}else{setTag('pku1_i7.13',0);} // Hot Water Pump 9 Run 
if (data.di_module_3[14] == true ){setTag('pku1_i7.14',1);}else{setTag('pku1_i7.14',0);} // Ground Tank Pump Run 
if (data.di_module_3[15] == true ){setTag('pku1_i7.15',1);}else{setTag('pku1_i7.15',0);} //Water Pump GK Run

}  





  




