﻿/**
*/
enyo.kind({
	name: "enyo.ScrollStrategy",
	kind: enyo.Control,
	events: {
		onScroll: "doScroll"
	},
	published: {
		vertical: true,
		horizontal: true,
		scrollLeft: 0,
		scrollTop: 0
	},
	handlers: {
		scroll: "scrollHandler"
	},
	classes: "enyo-scroller",
	create: function() {
		this.inherited(arguments);
		this.horizontalChanged();
		this.verticalChanged();
		this.setAttribute("onscroll", enyo.bubbler);
	},
	rendered: function() {
		this.inherited(arguments);
		this.scrollNode = this.calcScrollNode();
	},
	teardownRender: function() {
		this.inherited(arguments);
		this.scrollNode = null;
	},
	calcScrollNode: function() {
		return this.hasNode();
	},
	horizontalChanged: function() {
		this.applyStyle("overflow-x", this.horizontal ? "auto" : "hidden");
	},
	verticalChanged: function() {
		this.applyStyle("overflow-y", this.vertical ? "auto" : "hidden");
	},
	scrollHandler: function(inSender, e) {
		// keep these properties up to date
		if (this.scrollNode) {
			this.scrollTop = this.scrollNode.scrollTop; 
			this.scrollLeft = this.scrollNode.scrollLeft; 
		}
		return this.doScroll(e);
	},
	scrollTo: function(inX, inY) {
		if (this.scrollNode) {
			this.setScrollLeft(inX);
			this.setScrollTop(inY);
		}
	},
	scrollIntoView: function(inControl, inAlignWithTop) {
		if (inControl.hasNode()) {
			inControl.node.scrollIntoView(inAlignWithTop);
		}
	},
	setScrollTop: function(inTop) {
		this.scrollTop = inTop;
		if (this.scrollNode) {
			this.scrollNode.scrollTop = this.scrollTop;
		}
	},
	setScrollLeft: function(inLeft) {
		this.scrollLeft = inLeft;
		if (this.scrollNode) {
			this.scrollNode.scrollLeft = this.scrollLeft;
		}
	},
	getScrollLeft: function() {
		return this.scrollNode ? this.scrollNode.scrollLeft : this.scrollLeft;
	},
	getScrollTop: function() {
		return this.scrollNode ? this.scrollNode.scrollTop : this.scrollTop;
	}
});
