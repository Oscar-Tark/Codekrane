<?php

	include("../../../phpinclude/module_sql.php");
	
	$testshit = $_GET['token'];
	//include("../phpinclude/modules/files.php");
	require("../../../packages/fpdf181/fpdf.php");
	$file = file_get_contents("../../../Assets/Legal/freelancecontract.txt");

	//echo("Require Ok..");
	$pdf = new FPDF('P','mm','A4');
	$pdf->AddPage();
	$pdf->SetFont('Arial','B',9);
	$pdf->Write(5, "Freelance Agreement\n");
	$pdf->Write(5, getdate()[mday]."/".getdate()[mon]."/".getdate()[year]." - Berlin\n\n\n");
	$pdf->Write(5, "This agreement is between:\n\n");
	$pdf->Write(5, "Karrasch & Tark GbR\nLoschwitzer Weg 19,\n13593 - Berlin\n\nHere in known as Cleanery\n\n&\n\n".$name."\n".$address."\n".$tax_number."\nIdentification type - Identification number\n\nHere in known as Freelancer\n\n\n");
	$pdf->Write(5, $file);//Cell(40,10,'Hello World!');
	$pdf->Output("D", 'CleaneryContract.pdf');
	$pdf->Output("F", '../../uploads/onboarding/'.$ob_ky."/agreement.pdf");
?>