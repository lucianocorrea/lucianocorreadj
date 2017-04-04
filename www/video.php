<?php 
	$opcoes = '';
	foreach ($_GET as $key => $value) {
		if($value == 1):
			$opcoes .= ' ';
			$opcoes .= preg_replace('/[^[:alnum:]]/', '', addslashes($key)); 
		endif;
	}

?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>Video Header</title>

<style>
video {
	position: fixed;
	top: 0; height: 100%;
	left: 0; width: 100%;
	background-color: #000;
}
</style>
</head>
<body>

	<video<?php echo $opcoes; ?>>
		<source src="<?php echo $_GET['url'] ?>" type="video/mp4">
	</video>
	
</body>
</html>