AIUtil.SetContext(Browser("Advantage Shopping"))
AIUtil("profile").Click
AIUtil.FindTextBlock("CREATE NEW ACCOUNT").Click
AIUtil("input", "ACCOUNT DETAILS").Type "caldito"
AIUtil("input", "Email").Type "ezequielbalcaldi@hotmail.com"
AIUtil("input", "Password").Type "Hola123"
AIUtil("input", "Confirm password").Type "Hola123"
AIUtil.Scroll("down")
AIUtil("check_box", "Receive exclusive offers and promotions from Advantage").SetState "On"
AIUtil("check_box", "agree ti").SetState "On"
AIUtil("button", "REGISTER").Click
