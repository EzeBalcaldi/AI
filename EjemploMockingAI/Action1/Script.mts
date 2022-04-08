Browser("My Store").Page("My Store").Sync
AIUtil.SetContext(Browser("My Store"))

AIUtil.FindTextBlock("Sign in").Click
AIUtil("text_box", "Email address", micFromTop, 1).Type "ezequielbalcaldi@hotmail.com"
AIUtil("text_box", "Password").Type "caldo"
AIUtil("button", "Sign in").Click
'wait 1

Browser("My Store").Page("My Store").Link("Sign out").WaitProperty "text", "Ready"


AIUtil("text_box", "a new experience").Type "blouse"
AIUtil("button", "", micFromTop, 1).Click

AIUtil.Scroll("down")
AIUtil("text_box", "$27.00").Click
'AIUtil.FindTextBlock("Blouse", micFromBottom, 1).Click'
AIUtil("down_triangle", micAnyText, micFromTop, 2).Click
'AIUtil("text_box", "").Click
AIUtil("button", "- Add to cart").Click
AIUtil("button", "< Continue shopping").Click
AIUtil.FindTextBlock("Sign out").Click
