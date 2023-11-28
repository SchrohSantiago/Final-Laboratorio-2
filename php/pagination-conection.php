<?php
// Datos de conexión a la base de datos
$servidor = "localhost"; // Por lo general, localhost
$usuario = "KhristyXV";
$password = "1545492-sS";
$base_datos = "travel";

// Crear conexión
$conexion = new mysqli($servidor, $usuario, $password, $base_datos);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}



?>
