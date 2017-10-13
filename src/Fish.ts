class Fish extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        var sprite:egret.Sprite = new egret.Sprite();
        sprite.graphics.beginFill(0xff0000);
        sprite.graphics.drawRect(0, 0, 100, 100);
        sprite.graphics.endFill();
        this.addChild(sprite);
    }
}