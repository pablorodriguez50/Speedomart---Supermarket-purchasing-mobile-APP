<?php

header("Access-Control-Allow-Origin:http://localhost:8100");
header("Content-Type: application/x-www-form-urlencoded");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


     $data = file_get_contents('php://input');
     $objData = json_decode($data);	
	 
	 $categoria = $objData->categoria;
  

 $datos;
 $resultados_finales;
 
 @$db = mysqli_connect("localhost","root","","speedomart");

if($db)
{
        $query = "SELECT producto.codigo_barra, producto.nombre, producto.imagen, producto.precio FROM producto WHERE producto.idCategoria='".$categoria."'"; 
        $data=mysqli_query($db,$query);

        while($fila=mysqli_fetch_array($data))
        {
            $codigo = $fila[0];
            $nombre = $fila[1];
            $imagen = $fila[2];
            $precio = $fila[3];            


            $resultados_finales[] = array("mensage"=>"correcto","codigo"=>$codigo,"nombre"=>$nombre,"imagen"=>$imagen,"precio"=>$precio,"categoria"=>$categoria);

        }

          echo json_encode($resultados_finales);

  
}else
{
    $resultados_finales = array("mensage"=>"error");
    echo json_encode($resultados_finales);
};


?>