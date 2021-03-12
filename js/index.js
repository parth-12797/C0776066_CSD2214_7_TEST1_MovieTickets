$(document).ready(function() {
	$('input[type="checkbox"]').click(function () {
 var count=document.querySelectorAll("input:checked").length
  document.getElementById('no_seat').innerHTML = '';
	document.getElementById('no_seat').innerHTML = count;
var e = document.getElementById("m_name").value;
	
	if(e=="padmavati")
	{

p=count*13;
document.getElementById('total').innerHTML = '';
	document.getElementById('total').innerHTML = p;
	}
	else if(e=="raaz")
	{
p=count*13;
document.getElementById('total').innerHTML = '';
	document.getElementById('total').innerHTML = p;

	}
	else{
p=count*7;
document.getElementById('total').innerHTML = '';
	document.getElementById('total').innerHTML = p;

	}	

});
 
});


function get_movie(divid) {
	  var inputs = document.querySelectorAll('.check1');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }

  


	var e = document.getElementById("m_name").value;
	document.getElementById('movie_name').innerHTML = '';
	document.getElementById('movie_name').innerHTML = e;
	if(e=="padmavati")
	{
document.getElementById('price').innerHTML = '';
	document.getElementById('price').innerHTML = "13$";
  document.getElementById('no_seat').innerHTML = '';
  document.getElementById('total').innerHTML = '';
	document.getElementById('total').innerHTML = 0;

	}
	else if(e=="raaz")
	{
document.getElementById('price').innerHTML = '';
	document.getElementById('price').innerHTML = "10$";
  document.getElementById('no_seat').innerHTML = '';
	document.getElementById('total').innerHTML = '';
	document.getElementById('total').innerHTML = 0;

	}
	else{
		document.getElementById('price').innerHTML = '';
	document.getElementById('price').innerHTML = "7$";
  document.getElementById('no_seat').innerHTML = '';
	document.getElementById('total').innerHTML = '';
	document.getElementById('total').innerHTML = 0;

	}
}

