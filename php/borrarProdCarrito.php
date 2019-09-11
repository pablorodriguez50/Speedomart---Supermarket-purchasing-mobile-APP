<?php



header("Access-Control-Allow-Origin:http://localhost:8100");
header("Content-Type: application/x-www-form-urlencoded");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

 $datos;
 $resultados_finales;

 $data = file_get_contents("php://input");
 $objData = json_decode($data);

 $idProducto = $objData->idProducto;

 $idDetalle = $objData->idDetalle;

 /*$resultados_finales[] = array("mensagee"=>"algcorrecto","idProducto"=>$idDetalle);        
               

        echo json_encode($resultados_finales);*/

 @$db = mysqli_connect("localhost","root","","speedomart");

if($db)
{
        $query2 = "DELETE FROM detalle_carrito WHERE idProd='".$idProducto."' AND idCarrito=17 AND idDetalle_carrito ='".$idDetalle."'";
        $data2=mysqli_query($db,$query2);

        /*$row = mysqli_fetch_array($data2);
        $num = $row[0];*/

        $resultados_finales[] = array("mensagee"=>"Producto borrado del carrito");        
               

        echo json_encode($resultados_finales);
}else
{
    $resultados_finales = array("mensage"=>"credenciales incorrectas");

    echo json_encode($resultados_finales);
};

?>