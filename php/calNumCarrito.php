<?php



header("Access-Control-Allow-Origin:http://localhost:8100");
header("Content-Type: application/x-www-form-urlencoded");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

 $datos;
 $resultados_finales; 

 @$db = mysqli_connect("localhost","root","","speedomart");


if($db)

{
        $query2 = "SELECT COUNT(idProd) FROM detalle_carrito WHERE detalle_carrito.idCarrito = 17";
        $data2=mysqli_query($db,$query2);

        $row = mysqli_fetch_array($data2);
        $num = $row[0];


        $resultados_finales[] = array("mensagee"=>"algcorrecto2","num"=>$num); 
        
               

        echo json_encode($resultados_finales);

}else

{
    $resultados_finales = array("mensage"=>"credenciales incorrectas");

    echo json_encode($resultados_finales);
};

?>