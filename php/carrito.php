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
        $query = "SELECT * FROM producto INNER JOIN detalle_carrito on detalle_carrito.idProd = producto.idProducto where detalle_carrito.idCarrito = 17"; 
        //$query = "SELECT * from producto JOIN stock_prod ON stock_prod.idSup = 5 ORDER BY RAND() LIMIT 0,2";
        $data=mysqli_query($db,$query);

        while($fila=mysqli_fetch_array($data))

        {
            $idProducto = $fila[0];
            $codigo = $fila[1];
            $nombre = $fila[2];
            $imagen = $fila[3];
            $descripcion = $fila[4];
            $precio = $fila[5];
            $stock = $fila[6];
            $idDetalle = $fila[8];

            $resultados_finales[] = array("mensage"=>"algcorrecto","idProducto"=>$idProducto,"codigo"=>$codigo,"nombre"=>$nombre,"imagen"=>$imagen,"descripcion"=>$descripcion,"precio"=>$precio,"stock"=>$stock,"idDetalle"=>$idDetalle);

        }
        echo json_encode($resultados_finales);

        /*$query2 = "SELECT SUM(producto.precio) AS value_sum FROM producto JOIN detalle_carrito on detalle_carrito.idProd = producto.idProducto where detalle_carrito.idCarrito = 17";
        $data2=mysqli_query($db,$query2);

        

        $row = mysqli_fetch_array($data2);
        $sum = $row[0];


        $resultados_finales[] = array("mensagee"=>"algcorrecto2","sum"=>$sum); 
        
               

        echo json_encode($resultados_finales);*/
 

}else

{
    $resultados_finales = array("mensage"=>"credenciales incorrectas");

    echo json_encode($resultados_finales);
};

?>