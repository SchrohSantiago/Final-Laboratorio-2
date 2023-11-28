<?php
require_once 'pagination-conection.php';

$conexion = new mysqli($servidor, $usuario, $password, $base_datos);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$query = "SELECT nombre, descripcion, precio, ruta_imagen FROM imagenes";
$result = mysqli_query($conexion, $query);
$datos_imagenes = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($datos_imagenes);

error_reporting(E_ALL);
ini_set('display_errors', 1);


$conexion->close();
?>
