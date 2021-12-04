var flag = true;  
var totalFlag = true;  
var flag2 = 0;
var flag3 = 0;
 
function err(){  
    var f = document.calform ; 
    f.disp.value="수식오류";
    flag = true;
}
 
function but(su){ 
 
    if (totalFlag == false && isNaN(su)==false)
    {
        c(); 
    }else{
        totalFlag = true;
        }
    
    var f = document.calform ;
 
    if (flag)  
    {    
        if (su == 0)
        {
            return;
        }
        f.disp.value="";
        flag = false;  
    }
    
    if (isNaN(su))  
    {
        flag2++;
    }else{
        flag2 = 0;
        }
        
    if (flag2 >1)  
    {
        return;
    }
    f.disp.value += su;   
}
 
 
function c(){  
    var f = document.calform ;
    flag = true;        
    totalFlag = true;    
    f.disp.value = "";     
}
 
function total(){  
 
    var f = document.calform ;
 
	try 
	{
	    var a = eval(f.disp.value);  
	    if (isNaN(a))                
	    {
	        throw err();   
	        return;
	    }
	}
	catch (e)
	{
	     err(); 
	     return;
	}
	totalFlag = false; 
	var b = (parseInt(a * 1000000000000)/1000000000000)   
	f.disp.value = b;     
}