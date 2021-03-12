$(document).ready(function() {
	$('input[type="checkbox"]').click(function () {
 var count=document.querySelectorAll("input:checked").length
  document.getElementById('no_seat').innerHTML = '';
	document.getElementById('no_seat').innerHTML = count;

});
 
});


function get_movie() {

	var e = document.getElementById("m_name").value;
	document.getElementById('movie_name').innerHTML = '';
	document.getElementById('movie_name').innerHTML = e;
	if(e=="padmavati")
	{
document.getElementById('price').innerHTML = '';
	document.getElementById('price').innerHTML = "13$";
  document.getElementById('no_seat').innerHTML = '';

	}
	else if(e=="raaz")
	{
document.getElementById('price').innerHTML = '';
	document.getElementById('price').innerHTML = "10$";
  document.getElementById('no_seat').innerHTML = '';

	}
	else{
		document.getElementById('price').innerHTML = '';
	document.getElementById('price').innerHTML = "7$";
  document.getElementById('no_seat').innerHTML = '';

	}
}

