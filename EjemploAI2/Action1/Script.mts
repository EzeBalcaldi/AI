AIUtil.SetContext(Browser("Order - My Store"))
AIUtil.FindTextBlock("Sign in").Click
AIUtil("text_box", "Email address", micFromTop, 1).Type "ezequielbalcaldi@hotmail.com"
AIUtil("text_box", "Password").Type "caldo"
AIUtil("button", "Sign in").Click
AIUtil("text_box", "a new experience").Type "blouse"
AIUtil("button", "", micFromTop, 1).Click
AIUtil.FindTextBlock("Blouse", micFromBottom, 1).Click
AIUtil.FindTextBlock("Add to cart").Click
AIUtil.FindTextBlock("Proceed to checkout ?").Click
Browser("Order - My Store").Page("Order - My Store").WebElement("total_price").Output CheckPoint("total_price") @@ script infofile_;_ZIP::ssf1.xml_;_
AIUtil.Scroll("down")
AIUtil("button", "Proceed to checkout )").Click
AIUtil.Scroll("down")
AIUtil("button", "Proceed to checkout )").Click

AIUtil("check_box", "agree to the terms of service and will adhere to them unconditionally. (Read the Terms of Service)").SetState "On"
AIUtil("button", "Proceed to checkout )'").Click


AIUtil("button", "Pay by bank wire (order processing will be longer)").Click

AIUtil("button", "l confirm my order )'").Click

AIUtil.FindTextBlock("Amount $29.00").CheckExists True

AIUtil.FindTextBlock("Sign out").Click
AIUtil.FindTextBlock("Sign in", micFromTop, 1).CheckExists True
