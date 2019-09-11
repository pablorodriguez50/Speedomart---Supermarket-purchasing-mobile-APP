<?php



header("Access-Control-Allow-Origin:http://localhost:8100");

header("Content-Type: application/x-www-form-urlencoded");

header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



 $datos;

 $resultados;



 @$db = mysqli_connect("localhost","root","","speedomart");

  

if($db)

{

    $query = "SELECT * FROM categoria";

    $data=mysqli_query($db,$query);



        while($fila=mysqli_fetch_array($data))

        {

            $idCategoria = $fila[0];

            $nombreCAT = $fila[1];



            $resultados[] = array("wey"=>"asdasdsa","idCategoria"=>$idCategoria,"nombreCAT"=>$nombreCAT);



        }



          echo json_encode($resultados);



}else

{

    $resultados = array("wey"=>"credenciales incorrectas");

    echo json_encode($resultados);

};



?>