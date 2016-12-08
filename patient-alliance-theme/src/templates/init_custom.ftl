<#--
This file allows you to override and define new FreeMarker variables.
-->

<#assign 

 log_in_url = htmlUtil.escape(theme_display.getURLSignIn())
 log_out_url = htmlUtil.escape(theme_display.getURLSignOut())
 log_in_user_first_name = user.getFirstName()
 is_omni_admin = theme_display.getPermissionChecker().isOmniadmin()
 
/>
