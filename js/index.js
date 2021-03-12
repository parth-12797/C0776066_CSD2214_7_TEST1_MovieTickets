function get_movie() {

	var e = document.getElementById("m_name").value;
	document.getElementById('movie_name').innerHTML = '';
	document.getElementById('movie_name').innerHTML = e;
	if(e=="padmavati")
	{
document.getElementById('price').innerHTML = '';
	document.getElementById('price').innerHTML = "13$";
	}
	else if(e=="raaz")
	{
document.getElementById('price').innerHTML = '';
	document.getElementById('price').innerHTML = "10$";
	}
	else{
		document.getElementById('price').innerHTML = '';
	document.getElementById('price').innerHTML = "7$";
	}
}