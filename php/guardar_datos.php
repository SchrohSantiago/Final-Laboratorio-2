<?php
// Conexión a la base de datos (ajusta los valores según tu configuración)
require_once 'pagination-conection.php';
// Recibir datos del formulario

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$ciudad = $_POST['ciudad'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];

// Preparar y ejecutar la consulta SQL para insertar datos
$verificar_email = "SELECT * FROM datos_contacto WHERE email='$email'";
$resultado = $conexion->query($verificar_email);
$sql = "INSERT INTO datos_contacto (nombre, apellido, ciudad, email, telefono) VALUES ('$nombre', '$apellido', '$ciudad', '$email', '$telefono')";

if ($resultado->num_rows > 0) {
    echo "Error: El correo electrónico ya está registrado";
} else {
    if ($conexion->query($sql) === TRUE) {
         echo "Datos insertados correctamente";
    } else {
         echo "Error al insertar datos: " . $conexion->error;
    }
}

// Cerrar la conexión
$conexion->close();
?>
