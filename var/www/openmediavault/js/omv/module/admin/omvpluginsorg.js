/**
 * This file is part of OpenMediaVault.
 *
 * @license   http://www.gnu.org/licenses/gpl.html GPL Version 3
 * @author    Marcel Beck <marcel.beck@mbeck.org>
 * @author    Ian Moore <imooreyahoo@gmail.com>
 * @copyright Copyright (c) 2011-2012 Marcel Beck
 * @copyright Copyright (c) 2011 Ian Moore
 *
 * OpenMediaVault is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * OpenMediaVault is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with OpenMediaVault. If not, see <http://www.gnu.org/licenses/>.
 */
	// require("js/omv/NavigationPanel.js")
	// require("js/omv/FormPanelExt.js")
	// require("js/omv/form/plugins/FieldInfo.js")

Ext.ns("OMV.Module.System");

// Register the menu.
OMV.NavigationPanelMgr.registerMenu("system", "OmvPluginsOrg", {
	text:"OMV-Plugins.org",
	icon:"images/omvpluginsorg.png"
});

/**
 * @class OMV.Module.System.OmvPluginsOrg
 * @derived OMV.FormPanelExt
 */
OMV.Module.System.OmvPluginsOrg = function (config)
{
	var initialConfig = {
		rpcService:"OmvPluginsOrg"
	};
	Ext.apply(initialConfig, config);
	OMV.Module.System.OmvPluginsOrg.superclass.constructor.call(this,
																															initialConfig);
};
Ext.extend(OMV.Module.System.OmvPluginsOrg, OMV.FormPanelExt, {
	getFormItems:function ()
	{
		return [
			{
				xtype   :"fieldset",
				title   :"OMV-Plugins.org",
				defaults:{
					labelSeparator:""
				},
				items   :[
					{
						xtype   :"fieldset",
						title   :"General settings",
						defaults:{
							labelSeparator:""
						},
						items   :[
							{
								xtype     :"checkbox",
								name      :"use-stable",
								fieldLabel:"Stable",
								checked   :false,
								boxLabel  :"Use the list of plugins plugins provided in the stable repository at OMV-Plugins.org.",
								inputValue:1
							}
						]
					},
					{
						xtype   :"fieldset",
						title   :"Repositories",
						defaults:{
							labelSeparator:""
						},
						items   :[
							{
								xtype     :"checkbox",
								name      :"use-donald",
								fieldLabel:"Donald",
								checked   :false,
								boxLabel  :"Use the list of plugins provided in the Donald (unstable/testing) repository at OMV-Plugins.org.",
								inputValue:1
							},
							{
								xtype     :"checkbox",
								name      :"use-glass",
								fieldLabel:"Glass",
								checked   :false,
								boxLabel  :"Use the list of plugins provided in the Glass (experimental) repository at OMV-Plugins.org.",
								inputValue:1
							},
							{
								fieldLabel:" ",
								html      :"<b>Glass can break the system. You have to know what you're doing here.</b>"
							}
						]
					},
					{
						xtype   :"fieldset",
						title   :"Informations",
						defaults:{
							labelSeparator:""
						},
						items   :[
							{
								fieldLabel:" ",
								html      :"If more then one repository is enabled, the package with a higher version number will be installed."
							},
							{
								fieldLabel:" ",
								html      :"Donald and Glass only supports the last OMV version."
							}
						]
					}
				]
			}
		];
	}
});
OMV.NavigationPanelMgr.registerPanel("system", "OmvPluginsOrg", {
	cls:OMV.Module.System.OmvPluginsOrg
});

