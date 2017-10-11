class player {
	constructor(name) {
		this.name = name;
		this.addBodyParts();
		this.bindBody();
		this.physics();
		this.animations = new animation(this);
	}
	addBodyParts() {
		this.characterBox = game.add.sprite(50, 100);
		this.characterHead = game.add.sprite(0, -30, 'char1Head');
		this.characterHead.anchor.setTo(.5, .5);
		this.characterArm2 = game.add.sprite(8, -10, 'char1ArmL');
		this.characterArm2.anchor.setTo(0, 0);
		this.characterChest = game.add.sprite(0, 0, 'char1Chest');
		this.characterChest.anchor.setTo(.5, .5);
		this.characterArm1 = game.add.sprite(-8, -10, 'char1ArmR');
		this.characterArm1.anchor.setTo(1, 0);
		this.characterLeg1 = game.add.sprite(-8, 15, 'char1LegL');
		this.characterLeg1.anchor.setTo(0, 0);
		this.characterLeg2 = game.add.sprite(-18, 15, 'char1LegR');
		this.characterLeg2.anchor.setTo(0, 0);
		this.characterPelvis = game.add.sprite(5, 10, 'char1Pelvis');
		this.characterPelvis.scale.setTo(.01, .01);
		this.characterPelvis.anchor.setTo(.5, .5);
	}
	bindBody() {
		this.characterBox.addChild(this.characterHead);
		this.characterBox.addChild(this.characterArm1);
		this.characterBox.addChild(this.characterChest);
		this.characterBox.addChild(this.characterPelvis);
		this.characterBox.addChild(this.characterArm2);
		this.characterBox.addChild(this.characterLeg1);
		this.characterBox.addChild(this.characterLeg2);
		this.characterBox.scale.setTo(.3, .3);
	}
	physics() {
		game.physics.enable(this.characterBox, Phaser.Physics.ARCADE);
		this.characterBox.body.collideWorldBounds = true;
		this.characterBox.body.gravity.y = 500;
		this.characterBox.body.bounce.y = 0.6;
	}
}