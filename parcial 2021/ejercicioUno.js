/**Censo Municipal
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria:

necesitan saber si es un gato o un perro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra)
la raza (una palabra)
el peso (peso validado)
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas
H)Cual es el promedio de kilos de peso de tomando todas las mascotas
i)El nombre y raza del gato sin pelos mas liviano */
function probarEjercicio(){

	var tipodemascota;
	var tipodepelaje;
	var edadmascota;
	var nombremascota;
	var raza;
	var peso;
	var estadoclinico;
	var temperaturacorporal;
	var perromaspesado;
	var contadorperromaspesado =0;
	var porcentajedeenfermos;
	var contadortipodemascotas=0;
	var cantidaddemascotas;
	var nombreultimamascota;
	var menortemperaturacorporal;
	var porcentajesumaperroygato;
	var promediodekilos;

	do{
    	tipodemascota = prompt("Ingrese el tipo de mascota perro-gato-otra cosa");
    }
	while(tipodemascota != "perro" || tipodemascota != "gato" || tipodemascota != "otra cosa");

	do{
    	tipodepelaje = prompt("Ingrese tipo de pelaje (corto-largo-sin pelo");
    }
	while(tipodepelaje != "corto" || tipodepelaje != "largo" || tipodepelaje != "sin pelo");

	do{
		edadmascota = prompt("ingrese edad de la mascota");
		edadmascota = parseInt(edadmascota);
	}
	while(isNaN(edadmascota)==true);

	do{
		nombremascota = prompt("ingrese nombre de la mascota");
	}
	while(isNaN(nombremascota)==false);

	do{
		raza = prompt("ingrese raza");
	}
	while(isNaN(raza)==false);

	do{
		peso = prompt("ingrese peso");
	}
	while(isNaN(peso)==true);

	do{
    	estadoclinico = prompt("Ingrese el estado clinico(enfermo-internado-adopcion)");
    }
	while(estadoclinico != "enfermo" || estadoclinico != "internado" || estadoclinico != "adopcion");

	do{
		temperaturacorporal = prompt("ingrese temperatura corporal");
	}
	while(isNaN(temperaturacorporal)==true);



	if(peso==perromaspesado)
		{
			contadorperromaspesado++
		}
		if(contadorperromaspesado==1 || peso > perromaspesado);
		{
			perromaspesado = peso;
		}
		//**b)El porcentaje de enfermos sobre el total de mascotas */
	if(estadoclinico =="enfermo")
		{
			contadortipodemascotas++
		}

		//**c)El nombre de la ultima mascota de tipo "otra cosa" */
	if(tipodemascota == "otra cosa")
	{
		nombreultimamascota = tipodemascota=="otra cosa";
	}
		//**d)El animal sin pelo con menor temperatura corporal */

	if(tipodepelaje == "sin pelo")
	{
		menortemperaturacorporal = temperaturacorporal;
		menortemperaturacorporal = temperaturacorporal<menortemperaturacorporal;
	}
	/**f)Sumando gatos y perros que porcentaje del total de mascotas son */
	porcentajesumaperroygato=parseInt(porcentajesumaperroygato);
	porcentajesumaperroygato=(tipodemascota =="gatos" + tipodemascota == "perro")*100/(tipodemascota =="gatos" + tipodemascota == "perro" + tipodemascota == "otra cosa");
	
	/**H)Cual es el promedio de kilos de peso de tomando todas las mascotas*/
	promediodekilos = parseInt(promediodekilos);
	promediodekilos = peso*contadortipodemascotas+promediodekilos

	/**i)El nombre y raza del gato sin pelos mas liviano */

	document.write("perro mas pesado" + perromaspesado);
	document.write("nombre ultima mascota"+ nombreultimamascota);
	document.write("menor temperatura corporal" + menortemperaturacorporal);
	document.write("porcentaje de la suma perro y gato ingresados" + porcentajesumaperroygato);
	document.write("promedio de kilos" + promediodekilos);
}
