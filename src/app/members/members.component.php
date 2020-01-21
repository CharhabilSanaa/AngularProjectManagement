<?php
if (isset($_POST['onSAVE'])){

	// **************affectation des valeurs aux variables**************
	$MemberName = $_POST['MemberName'];
	$MemberPost = $_POST['MemberPost'];


	
	if (!empty($MemberName) && !empty($MemberPost) ){
		
		// **************Definition des conditions**************
		
	    echo 'Donc la personne ',$MemberName,' travaille comme ',$MemberPost,' ';
	}
	else{
		echo 'il ya une erreur';
    }

    //les details de la base:
        $ServerName= "localhost";
        $UserName= "root";
        $UserPass= "";
        $DataName= "orga-projet";
        
        // Etablissement de la connexion a travers les parametres inserees :
        $connect=new mysqli($ServerName, $UserName, $UserPass, $DataName);
    
        //definition de la fonction qui contient la requete d'insertion des donnees :
        function insert($connect,$MemberName,$MemberPost){
    
            // **************Saisie de la requete**************
            $requet= "INSERT INTO members(MemberName,MemberPost) 
                VALUES('$MemberName','$MemberPost')";
                
            // **************Envoie de la requete**************
            $reponse= mysqli_query($connect,$requet);
            
            // **************Condition de execution de la requete**************
            if ($reponse) {	
                echo"Votre Inscription a ete effectue avec Success!!";
            }
            else {	
                echo "Inscription failed";
            }
        }

    
        // Verification de la connexion :
        if (!$connect){
            die("Connexion failed".mysqli_error());
        }
        else{
            // Si la connexion a ete effectue avec sucess on devra inserer les donnes directement a la base :
            //la fonction insert est deja defini auparavant:
            insert($connect, $MemberName, $MemberPost);
        }
    }
    
}

    
?>	
    

?>