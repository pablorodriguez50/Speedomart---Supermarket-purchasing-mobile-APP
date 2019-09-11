<?php



header("Access-Control-Allow-Origin:http://localhost:8100");

header("Content-Type: application/x-www-form-urlencoded");

header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



 $datos;

 $resultados_finales;

 

 @$db = mysqli_connect("localhost","root","","speedomart");



if($db)

{

        //$query = "SELECT * FROM producto"; 

        $query = "SELECT producto.codigo_barra, producto.nombre, producto.imagen, producto.precio, stock_prod.ubicacion from producto JOIN stock_prod ON stock_prod.idSup = 5 ORDER BY RAND() LIMIT 0,2";

        $data=mysqli_query($db,$query);



        while($fila=mysqli_fetch_array($data))

        {

            $codigo = $fila[0];

            $nombre = $fila[1];

            $imagen = $fila[2];

            $precio = $fila[3];

            $ubicacion = $fila[4];





            $resultados_finales[] = array("mensage"=>"algcorrecto","codigo"=>$codigo,"nombre"=>$nombre,"imagen"=>$imagen,"precio"=>$precio,"ubicacion"=>$ubicacion);



        }



          echo json_encode($resultados_finales);



  

}else

{

    $resultados_finales = array("mensage"=>"credenciales incorrectas");

    echo json_encode($resultados_finales);

};



?>