<?php



header("Access-Control-Allow-Origin:http://localhost:8100");

header("Content-Type: application/x-www-form-urlencoded");

header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

	

    $data = file_get_contents('php://input');

    $objData = json_decode($data);	



	$rut = $objData->rut;

    $nombre = $objData->nombre;

    $apellido = $objData->apellido;

    $correo = $objData->correo;

    $pass = $objData->pass;





    $rut = stripslashes($rut);

    $nombre = stripslashes($nombre);

    $apellido = stripslashes($apellido);

    $correo= stripslashes($correo);

    $pass = stripslashes($pass);



    $rut = trim($rut);

    $nombre = trim($nombre);

    $apellido = trim($apellido);

    $correo = trim($correo);

    $pass = trim($pass);

	

    $datos; 



 @$db = mysqli_connect("localhost","root","","speedomart");



	

    if($db){



        $query = "SELECT * FROM cliente WHERE rut='$rut'"; 

        $data=mysqli_query($db,$query);





        if($fila=mysqli_fetch_assoc($data))

        {

            $datos = array("mensaje" => "no fue posible insertar datos");

            echo json_encode($datos);            

        }else{



        $sql2 = "insert into cliente values('".$rut."','".$nombre."','".$apellido."','".$correo."','".$pass."')";

        $query = $db->prepare($sql2);

        $query ->execute();



        $sql3 = "insert into carrito values(NULL,'".$rut."')";

        $query = $db->prepare($sql3);

        $query ->execute();



        $datos = array("mensaje" => "Registrado correctamente");

        echo json_encode($datos);





        }

    }

   else{

          $datos = array("mensaje" => "No hay conexion.");

          echo json_encode($datos);

    };

?>