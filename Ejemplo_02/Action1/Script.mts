'Call prueba()

variable1 = "Hola"
variable2 = "asd"

If variable1 = variable2 Then
	Reporter.ReportEvent micPass, "Validacion", "Se valida si las variables son iguales y son iguales"
else
	Reporter.ReportEvent micFail, "Validacion", "Se valida si las variables son iguales y no son iguales"
End If

Browser("My Store").Page("My Store").WebEdit("search_query").Set DataTable("Producto", dtLocalSheet) @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("My Store").Page("My Store").WebButton("Search").Click
Browser("My Store").Page("My Store").Image("Blouse").Click
'valido que sea una blusa
Browser("My Store").Page("My Store").WebElement("Blouse").Check CheckPoint("Blouse")

'agrego la cantidad
Browser("My Store").Page("My Store").WebEdit("qty").Set DataTable("Cantidad", dtLocalSheet)

'clickeo el boton de agregar al carrito
Browser("My Store").Page("My Store").WebButton("Add to cart").Click







'valido que salga el boton de continuar comprando
Browser("My Store").Page("My Store").WebElement("Continue shopping").Check CheckPoint("Continue shopping") @@ script infofile_;_ZIP::ssf2.xml_;_

wait 1
Browser("My Store").Page("My Store").WebElement("Continue shopping").Click @@ script infofile_;_ZIP::ssf9.xml_;_
