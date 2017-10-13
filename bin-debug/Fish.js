var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fish = (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        var _this = _super.call(this) || this;
        var sprite = new egret.Sprite();
        sprite.graphics.beginFill(0xff0000);
        sprite.graphics.drawRect(0, 0, 100, 100);
        sprite.graphics.endFill();
        _this.addChild(sprite);
        return _this;
    }
    return Fish;
}(egret.DisplayObjectContainer));
__reflect(Fish.prototype, "Fish");
