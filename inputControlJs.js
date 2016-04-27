$(document).ready(function(){

	$(".alpha").each(function(){
		
		$(this).on("keypress",function(event){
			var key=event.which;
			
			if(key >=97 && key <=122){
				
				return true;
			}else{
					if(key >=65 && key <=90){
						return true;
					}else{
						if(key == 8 || key == 13 || key == 32){
							return true;
						}else{
							return false;
						}
					}
			}
			
		});
	});

	
	$(".alpha-no-space").each(function(){
		
		$(this).on("keypress",function(event){
			var key=event.which;
			
			if(key==32){
				return false;
			}
			
		});
	});
	
	$(".digit-no-space").each(function(){
		
		$(this).on("keypress",function(event){
			var key=event.which;
			
			if(key==32){
				return false;
			}
			
		});
	});
	
	$(".alpha-lc").each(function(){
		$(this).on("keypress",function(event){
			var key=event.which;
			if(key >=97 && key <= 122){
				return true;
			}else{
				if(key == 8 || key ==13 || key ==32){
					return true;
				}else{
					return false;
				}
			}
		
		});
	
	});
	
	
	$(".alpha-uc").each(function(){
		$(this).on("keypress",function(event){
			var key=event.which;
			if(key >=65 && key <= 90){
				return true;
			}else{
				if(key == 8 || key ==13 || key ==32){
					return true;
				}else{
					return false;
				}
			}
		
		});
	
	});
	
	
	$(".digit").each(function(){
		$(this).on("keypress",function(event){
			var classe=$(this).attr("class");
			classe=classe.split(" ");
			var tab=new Array();
			if(classe.length == 2){
				
				var second=classe[1];
				second=second.replace(/digit:/,"");
				var condition_part=second.split("(");
				condition_part=condition_part[0];
				second=second.replace(/\)/,"");
				second=second.split("(");
				
				
				var val=second[1];
				for(var i=0; i<val.length; i++){
					var el=val[i];
					
					if(el!=","){
						
						tab.push(el.charCodeAt(0));
					}
				}
				var key=event.which;
				
				if(condition_part=="not"){
					
					if(key >=48 && key <= 57){
						if(tab.indexOf(key)!=-1){
							return false;
						}else{
							return true;
						}
					}else{
					if(key == 8 || key ==13 || key ==32){
						return true;
					}else{
						return false;
					}
			}
					
				}else{
					if(key >=48 && key <= 57){
						if(tab.indexOf(key)!=-1){
							return true;
						}else{
							return false;
						}
					}else{
					if(key == 8 || key ==13 || key ==32){
						return true;
					}else{
						return false;
					}
			}
				}
				
				
			}else{
			
			
			
			var key=event.which;
			
			if(key >=48 && key <= 57){
				return true;
			}else{
				if(key == 8 || key ==13 || key ==32){
					return true;
				}else{
					return false;
				}
			}
			
			}
		
		});
	
	});
	
	
	
	
	
	
	
	
	
	
});