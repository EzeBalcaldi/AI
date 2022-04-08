Browser("Blouse - My Store").Page("Blouse - My Store").Link("Check out").Click @@ script infofile_;_ZIP::ssf1.xml_;_

Browser("Blouse - My Store").Page("Blouse - My Store").WebElement("total_price").Output CheckPoint("total_price") @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Blouse - My Store").Page("Blouse - My Store").Link("Proceed to checkout").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Blouse - My Store").Page("Blouse - My Store").WebButton("Proceed to checkout").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Blouse - My Store").Page("Blouse - My Store").WebCheckBox("cgv").Set "ON" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Blouse - My Store").Page("Blouse - My Store").WebButton("Proceed to checkout").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Blouse - My Store").Page("Blouse - My Store").Link("Pay by bank wire (order").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Blouse - My Store").Page("Blouse - My Store").WebButton("I confirm my order").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Blouse - My Store").Page("Blouse - My Store").WebElement("Your order on My Store").Check CheckPoint("Your order on My Store is complete.") @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Blouse - My Store").Page("Blouse - My Store").Check CheckPoint("Order confirmation - My Store") @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Blouse - My Store").Page("Blouse - My Store").Link("Back to orders").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Blouse - My Store").Page("Blouse - My Store").WebTable("Order reference").Check CheckPoint("Order reference") @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Blouse - My Store").Page("Blouse - My Store").Link("Home").Click @@ script infofile_;_ZIP::ssf12.xml_;_
