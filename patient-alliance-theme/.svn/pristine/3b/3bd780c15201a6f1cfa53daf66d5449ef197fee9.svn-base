<!DOCTYPE html>

<#include init />

<html class="${root_css_class}" dir="<@liferay.language key="lang.dir" />" lang="${w3c_language_id}">

<head>
    <title>Patient Alliance</title> 
    <meta charset="utf-8">
	<meta content="initial-scale=1.0, width=device-width" name="viewport" />
	
	<link rel="icon" type="image/png" href="${images_folder}/favicon.png">
    <link rel="icon" type="image/x-icon" href="${images_folder}/favicon.ico" />
	
	<script src="${javascript_folder}/jquery.min.js"></script>
	<script src="${javascript_folder}/pa-main.js"></script>
	
	<@liferay_util["include"] page=top_head_include />	
</head>

<body class="${css_class}">

<@liferay_util["include"] page=body_top_include />

<#if is_omni_admin>
  <@liferay.control_menu />
</#if>

<div class="container-fluid" id="wrapper">
<div id="pa">
	<header id="banner" role="banner">
		 <#include "${full_templates_path}/pa_header.ftl" />
	</header>

	<section id="content">
		<#if selectable>
			<@liferay_util["include"] page=content_include />
		<#else>
			${portletDisplay.recycle()}
			${portletDisplay.setTitle(the_title)}
			<@liferay_theme["wrap-portlet"] page="portlet.ftl">
				<@liferay_util["include"] page=content_include />
			</@>
		</#if>
	</section>

	<footer id="footer" role="contentinfo">
		<#include "${full_templates_path}/pa_footer.ftl" />
	</footer>
</div>	
</div>

<@liferay_util["include"] page=body_bottom_include />
<@liferay_util["include"] page=bottom_include />

</body>

</html>