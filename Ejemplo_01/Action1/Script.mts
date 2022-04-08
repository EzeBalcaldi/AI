

'valido que se abra la pagina @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("My Store").Page("My Store").Image("My Store").Check CheckPoint("My Store") @@ script infofile_;_ZIP::ssf12.xml_;_

If  Browser("My Store").Page("My Store").Link("Sign out").Exist(1) Then
	Reporter.ReportEvent micWarning, "Logged", "El usuario ya estaba logeado"
	RunAction "LogOut", oneIteration
End If




'realizo el login
Browser("My Store").Page("My Store").Link("Sign in").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("My Store").Page("My Store").WebElement("Email address Password").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("My Store").Page("My Store").WebEdit("email").Set DataTable("User", dtLocalSheet) @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("My Store").Page("My Store").WebEdit("passwd").SetSecure DataTable("Pass", dtLocalSheet) @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("My Store").Page("My Store").WebButton("Sign in").Click
'valido que este logeado
Browser("My Store").Page("My Store").Link("Sign out").Check CheckPoint("Sign out")




