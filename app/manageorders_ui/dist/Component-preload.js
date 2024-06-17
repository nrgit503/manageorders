//@ui5-bundle manageordersui/Component-preload.js
sap.ui.require.preload({
	"manageordersui/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("manageordersui.Component",{metadata:{manifest:"json"}})});
},
	"manageordersui/i18n/i18n.properties":'# This is the resource bundle for manageordersui\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Manage Sales Orders\n\n#YDES: Application description\nappDescription=Manage Sales Orders\n\n#XFLD,39\nflpTitle=Manage Orders\n',
	"manageordersui/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"manageordersui","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.13.6","toolsId":"16db48cc-3f65-4cc6-a5c6-6646a9b270a0"},"dataSources":{"mainService":{"uri":"catalog/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"Orders-Manage":{"semanticObject":"Orders","action":"Manage","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.124.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"manageordersui.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"SalesOrdersList","target":"SalesOrdersList"},{"pattern":"SalesOrders({key}):?query:","name":"SalesOrdersObjectPage","target":"SalesOrdersObjectPage"}],"targets":{"SalesOrdersList":{"type":"Component","id":"SalesOrdersList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/SalesOrders","variantManagement":"Page","navigation":{"SalesOrders":{"detail":{"route":"SalesOrdersObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"SalesOrdersObjectPage":{"type":"Component","id":"SalesOrdersObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/SalesOrders"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"manageorders"}}'
});
//# sourceMappingURL=Component-preload.js.map
