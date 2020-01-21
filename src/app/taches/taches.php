<?php


$data = json_decode(file_get_contents("php://input"));
$TaskName=mysql_real_escape_string($data->TaskName);
$TaskMember=mysql_real_escape_string($data->TaskMember);
mysql_connect("localhost","root"," ");
mysql_select_db("angular");
mysql_query("INSERT INTO taches(TaskName,TaskMember) VALUES('$TaskName','$TaskMember')");


?>