<?php
class Api{

  public function getPersonas(){

    $list = array();
    $conexion = new Conexion();
    $db = $conexion->getConexion();
    $sql = "SELECT * FROM personas";
    $query = $db->prepare($sql);
    $query->execute();
    while($row = $query->fetch()) {
          $list[] = array(
            "id" => $row['id'],
            "nombre" => $row['nombre'],
            "apellidos" => $row['apellidos'],
            "edad" => $row['edad'] );
          }

    return $list;
  }
  
}
