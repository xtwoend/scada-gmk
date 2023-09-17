
var connection = getTag('connection_status'); 
 
eval('data =' + connection); 
//debugString(pm_gh_mknr); 
if(typeof data == 'object') { 
 if (data.id == 1 && data.connected == false ){
 setTag('mc_run_leepack1', 0 ); 
 }
 
  if (data.id == 2 && data.connected == false ){
 setTag('mc_run_leepack2', 0); 
 }
 
  if (data.id == 3 && data.connected == false ){
 setTag('mc_run_leepack3', 0); 
 }
 
  

  if (data.id == 6 && data.connected == false ){

 setTag('pkp1_connection', 0); 

 }
 
}   