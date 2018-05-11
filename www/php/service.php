<?php
header('content-type: application/json; charset=utf-8');

//Cadena de conexión:
$connect = mysql_connect("104.198.68.161", "exelesTD", "fertertrevere")
or die('Could not connect: ' . mysql_error());

//seleccionamos bbdd:
$bool = mysql_select_db("DB_TICKETERA", $connect);
if ($bool === False){
   print "No puedo encontrar la bbdd: $database";
}

//inicializamos el cliente en utf-8:
mysql_query('SET names utf8');


$query = "SELECT * FROM Usuarios";

$result = mysql_query($query) or die("SQL Error: " . mysql_error());
$data = array();
// obtenemos los datos:
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = array(
        'celular' => $row['CELULAR'],
        'pin' => $row['PIN']
      );
}



//codificamos en json:
$json = json_encode($data);

//enviamos json envuelto en la función de callback:
echo isset($_GET['callback'])
    ? "{$_GET['callback']}($json)"
    : $json;

?>