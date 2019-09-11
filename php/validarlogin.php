<?php





 



header("Access-Control-Allow-Origin:http://localhost:8100");

header("Content-Type: application/x-www-form-urlencoded");

header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

	

    $data = file_get_contents("php://input");

    $objData = json_decode($data);

	



	

    $rut = $objData->rut;

    $pass = $objData->pass;

 



    $rut = stripslashes($rut);

    $pass = stripslashes($pass);

 

    $rut = trim($rut);

    $pass = trim($pass);

	

 

	$resultados_finales;

 

	

        @$db = mysqli_connect("localhost","root","","speedomart");



    if($db){

        $sql = "select * from cliente WHERE rut='".$rut."' AND contrasena='".$pass."'";

        $query = $db->prepare($sql);

        $query ->execute();

        $query->setFetchMode(PDO::FETCH_NUM);

		

		if($fila = $query->fetch()){ 

			   

			    

				 $rut = $fila[0];

   		         $nombre = $fila[1];

                 $apellido = $fila[2];

			 

			   

			    $resultados_finales = array("mensage"=>"credenciales correctas","rut"=>$rut,"nombre"=>$nombre,"apellido"=>$apellido);

				echo json_encode($resultados_finales);

 

			}else{

				

				$resultados_finales = array("mensage"=>"credenciales incorrectas");

				echo json_encode($resultados_finales);

				

				

			}

	 

		 

		 

    }

   else{

          $datos = array('mensage' => "ERROR.");

          echo json_encode($datos);

    };

	 

 

	?>