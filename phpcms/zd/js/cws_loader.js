(function ($){

	$.fn.start_cws_loader = start_cws_loader;
	$.fn.stop_cws_loader = stop_cws_loader;

	$( document ).ready(function (){
		cws_page_loader_controller ();
	});

	function cws_page_loader_controller (){
		var cws_page_loader, interval, timeLaps ;
		cws_page_loader = $( "#cws_page_loader" );
		timeLaps = 0;
		interval = setInterval( function (){
			var page_loaded = cws_check_if_page_loaded ();	
			timeLaps ++;		
			if ( page_loaded ||  timeLaps == 12) {
				clearInterval ( interval );
				cws_page_loader.stop_cws_loader ();
			}
		}, 500);
	}

	function cws_check_if_page_loaded (){
		var keys, key, i, r;
		if ( window.cws_modules_state == undefined ) return false;
		r = true;
		keys = Object.keys( window.cws_modules_state );
		for ( i = 0; i < keys.length; i++ ){
			key = keys[i];
			if ( !window.cws_modules_state[key] ){
				r = false;
				break;
			}
		}
		return r;
	}	

	function start_cws_loader (){
		var loader_obj, loader_container, indicators;
		loader = jQuery( this );
		if ( !loader.length ) return;
		loader_container = loader[0].parentNode;
		if ( loader_container != null ){
			loader_container.style.opacity = 1;
			setTimeout( function (){
				loader_container.style.display = "block";
			}, 300);
		}
/*		indicators = $( ".cws_loader_indicator_dot", loader );
		indicators.each( function( i ){
			startCircleAnim(jQuery(this),50,0.1,1+(i*0.2),1.1+(i*0.3));			
		});*/
	}

	function stop_cws_loader (){
		var loader_obj, loader_container, indicators;
		loader = jQuery( this );
		if ( !loader.length ) return;
		loader_container = loader[0].parentNode;
		if ( loader_container != null ){
			loader_container.style.opacity = 0;
			setTimeout( function (){
				loader_container.style.display = "none";
			}, 300);
		}
	}

	function setFilter(filter){
		jQuery("#cws_loader").css({
			webkitFilter:filter,
			mozFilter:filter,
			filter:filter,
		});
	}

	function setGoo(){
		setFilter("url(#goo)");
	}
	
	function setGooNoComp(){
		setFilter("url(#goo-no-comp)");
	}

	function setupCircle($obj){
		if(typeof($obj.data("circle"))=="undefined"){
			$obj.data("circle",{radius:0,angle:0});

			function updateCirclePos(){
				var circle=$obj.data("circle");
				TweenMax.set($obj,{
					x:Math.cos(circle.angle)*circle.radius,
					y:Math.sin(circle.angle)*circle.radius,
				})
				requestAnimationFrame(updateCirclePos);
			}
			updateCirclePos();
		}
	}

	function startCircleAnim($obj,radius,delay,startDuration,loopDuration){
		setupCircle($obj);
		$obj.data("circle").radius=0;
		$obj.data("circle").angle=0;
		TweenMax.to($obj.data("circle"),startDuration,{
			delay:delay,
			radius:radius,
			ease:Quad.easeInOut
		});
		TweenMax.to($obj.data("circle"),loopDuration,{
			delay:delay,
			angle:Math.PI*2,
			ease:Linear.easeNone,
			repeat:-1
		});
	}
	function stopCircleAnim($obj,duration){
		TweenMax.to($obj.data("circle"),duration,{
			radius:0,
			ease:Quad.easeInOut,
			onComplete:function(){
				TweenMax.killTweensOf($obj.data("circle"));
			}
		});
	}

}(jQuery))