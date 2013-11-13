/* See license.txt for terms of usage */
/*jshint esnext:true, es5:true, curly:false */
/*global FBTrace:true, XPCNativeWrapper:true, Window:true, define:true */

define([
    "firebug/firebug",
    "firebug/lib/trace",
    "firebug/lib/object",
    "firebug/dom/domBasePanel",
    "firebug/dom/domPanelTree",
    "firebug/dom/domProvider",
    "firebug/dom/domMemberProvider",
    "firebug/dom/toggleBranch",
],
function(Firebug, FBTrace, Obj, DOMBasePanel, DomPanelTree, DomProvider, DOMMemberProvider,
    ToggleBranch) {

"use strict";

// ********************************************************************************************* //
// Constants

// ********************************************************************************************* //
// DOM Side Panel Implementation

/**
 * @panel This object represents a DOM Side panel used inside the HTML panel.
 */
function DOMSidePanel()
{
}

DOMSidePanel.prototype = Obj.extend(DOMBasePanel.prototype,
/** @lends DOMSidePanel */
{
    name: "domSide",
    parentPanel: "html",
    order: 3,
    enableA11y: true,
    deriveA11yFrom: "console",

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
    // Initialization

    initialize: function()
    {
        // Content rendering
        this.provider = new DomProvider(this);
        this.tree = new DomPanelTree();
        this.tree.provider = this.provider;
        this.tree.memberProvider = new DOMMemberProvider(this.context);
        this.toggles = new ToggleBranch.ToggleBranch();

        DOMBasePanel.prototype.initialize.apply(this, arguments);
    },
});

// ********************************************************************************************* //
// Registration

Firebug.registerPanel(DOMSidePanel);

return DOMSidePanel;

// ********************************************************************************************* //
});
