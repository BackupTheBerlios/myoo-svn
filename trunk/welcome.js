Ext.BLANK_IMAGE_URL = 'ExtJS/resources/images/default/s.gif';

Ext.onReady(
function(){
		
		
		var welcomeMessageDivision = Ext.get('message');
		Ext.get(document.body).update('');

		Ext.MessageBox.show({
				title: 'welcome',
				msg: welcomeMessageDivision.dom.innerHTML,
				buttons: false,
				icon: Ext.MessageBox.INFO,
				animEl: welcomeMessageDivision
		});

}
);