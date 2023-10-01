<?php 

    $conexion = mysqli_connect("127.0.0.1", "root", "", "");
    if ($conexion){
        echo "La conexion ha sido exitosa";
    }else{
        echo "La conexion ha sido fallida. Intente nuevamente";
    }
?>