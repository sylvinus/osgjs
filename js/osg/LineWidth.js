osg.LineWidth = function (lineWidth) {
    osg.StateAttribute.call(this);
    this.lineWidth = 1.0;
    if (lineWidth !== undefined) {
        this.lineWidth = lineWidth;
    }
};
osg.LineWidth.prototype = osg.objectLibraryClass( osg.objectInehrit(osg.StateAttribute.prototype, {
    attributeType: "LineWidth",
    cloneType: function() {return new osg.LineWidth(); },
    getType: function() { return this.attributeType;},
    getTypeMember: function() { return this.attributeType;},
    apply: function(state) { state.getGraphicContext().lineWidth(this.lineWidth); }
}),"osg","LineWidth");
