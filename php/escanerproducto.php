<?php

header("Access-Control-Allow-Origin:http://localhost:8100");
header("Content-Type: application/x-www-form-urlencoded");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	
    $data = file_get_contents("php://input");
    $objData = json_decode($data);
	

	
    $codigodebarra = $objData->codigodebarra;
   
 

    $codigodebarra = stripslashes($codigodebarra);
  
 
    $codigodebarra = trim($codigodebarra);
  
	
 
	$resultados_finales;
 
           try {
              //@$db = mysqli_connect("mysql:host=sql10.freesqldatabase.com;dbname=sql10181809", "sql10181809", "⁠⁠⁠dfFf6leMHk");
			 // @$db = new PDO("mysql:host=localhost;dbname=speedomart", "root", "");
			 // @$db = new PDO("mysql:host=www.db4free.net;dbname=id2053403_speedomart", "ricardo10102020", "123456");
                            @$db = mysqli_connect("localhost","root","","speedomart");

			//@$db = new PDO("mysql:host=sql10.freesqldatabase.com;dbname=sql10181809", "sql10181809", "⁠⁠⁠dfFf6leMHk");
			
			 

    if($db){
		    
           $sql = "select * from producto WHERE codigo_barra='".$codigodebarra."'";
		  // $sql = "select * from producto WHERE codigo_barra='333'";
	
        $query = $db->prepare($sql);
        $query ->execute();
        $query->setFetchMode(PDO::FETCH_NUM);
		$db ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);   
		
		if($fila = $query->fetch()){ 
			   
			    
			 
   		         $nombre = $fila[2];
                         $imagen = $fila[3];
                         $precio = $fila[5];
			 
			   
			    $resultados_finales = array("nombre"=>$nombre,"imagen"=>$imagen,"precio"=>$precio);
				echo json_encode($resultados_finales);
 
			}else{
				
				$resultados_finales = array("mensage"=>"error");
				echo json_encode($resultados_finales);
				 
				
			}
	 
		 
		 
    }
   else{
          $resultados_finales = array('mensage' => "ERROR.");
          echo json_encode($resultados_finales);
		 
      };
	  }
	  catch(PDOexception $e){
		    echo "ERROR : " . $e->getMessage();
	  }
 
	?>