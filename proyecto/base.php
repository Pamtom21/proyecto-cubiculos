<?php
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$database = "registro"; 


$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (isset($_POST["login"])) {
        $correo = $_POST["correo"];
        $contrasena = $_POST["contrasena"];

        include 'link.php'; 
        $sql = "SELECT * FROM usuarios WHERE correo = '$correo' AND contrasena = '$contrasena'";
        $resultado = $conn->query($sql);

        if ($resultado->num_rows == 1) {
            header("Location: file:///C:/Users/josit/OneDrive/Desktop/tarar/proyecto-cubiculos/proyecto/home.html# ");
            exit();
        } else {
            echo "Correo o contrasena invalida. Inténtalo de nuevo.";
        }
    }


    if (isset($_POST["registro"])) {

        $nombre = $_POST["nombre"];
        $correo = $_POST["correo"];
        $usuario = $_POST["usuario"];
        $contrasena = $_POST["contrasena"];
        include 'link.php'; 
        $sql = "INSERT INTO usuarios (nombre, correo, usuario, contrasena) VALUES ('$nombre', '$correo', '$usuario', '$contrasena')";
        $resultado = $conn->query($sql);

        if ($resultado) {
            header("Location:file:///C:/Users/josit/OneDrive/Desktop/tarar/proyecto-cubiculos/proyecto/home.html# ");
            exit();
        } else {
            // Error al registrar el usuario, muestra un mensaje de error
            echo "Error al registrar el usuario.";
        }
    }
}

$conn->close();
?>