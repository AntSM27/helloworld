function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();

	//create app tabs
	var win1 = new Window(L('click me')),
		win2 = new Window(L('did you poop too?'));

	var tab1 = Ti.UI.createTab({
		title: L('you smell like cheese'),
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	win1.containingTab = tab1;

	var tab2 = Ti.UI.createTab({
		title: L('heuheuheu'),
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	win2.containingTab = tab2;
	
	var label1 = Ti.UI.createLabel({
		text: ('i pooped today'),
		top: (75),
		color: ('ORANGE')
	});
	
	win1.add(label1);
	self.addTab(tab1);
	self.addTab(tab2);

	return self;
};

module.exports = ApplicationTabGroup;
