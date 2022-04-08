 @@ hightlight id_;_400232_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Google").Page("GPS Running Watches |").Sync
Browser("Google").Navigate "https://www.garmin.com/en-US" @@ hightlight id_;_400232_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Google").Page("Garmin International |").Link("Running").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Google").Page("GPS Running Watches |").WebButton("COMPARE").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Google").Page("GPS Running Watches |").WebButton("Add to comparison").Click @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Google").Page("GPS Running Watches |").WebButton("Add to comparison").Click @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Google").Page("GPS Running Watches |").WebButton("Add to comparison").Click @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Google").Page("GPS Running Watches |").WebButton("Add to comparison").Click @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Google").Page("GPS Running Watches |").Link("COMPARE").Click @@ script infofile_;_ZIP::ssf15.xml_;_
wait 1

totalFilas = Browser("Google").Page("Garmin | Compare").WebTable("Lens Material").RowCount
totalColumnas = Browser("Google").Page("Garmin | Compare").WebTable("Lens Material").GetROProperty ("cols")
For i = 1 To totalFilas Step 1
	For j = 1 To totalColumnas Step 1
			DataTable("_"&j, dtGlobalSheet) = Browser("Google").Page("Garmin | Compare").WebTable("Lens Material").GetCellData (i,j)
	Next
	DataTable.GlobalSheet.SetCurrentRow (i+1)
Next


 @@ script infofile_;_ZIP::ssf21.xml_;_
