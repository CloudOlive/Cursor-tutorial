kaboom({
	width: window.innerWidth,
	height: Math.floor(window.innerHeight * 0.9),
	canvas: undefined,
	background: [17, 17, 17],
	debug: true,
});

setGravity(1200);

const COLORS = {
	player: rgb(80, 180, 255),
	platform: rgb(80, 80, 80),
	goal: rgb(80, 200, 120),
	text: rgb(220, 220, 220),
};

const SPEED = 320;
const JUMP_FORCE = 1000;

function makePlatform(platformPos, size) {
	add([
		rect(size.x, size.y),
		pos(platformPos),
		area(),
		body({ isStatic: true }),
		outline(2, rgb(40, 40, 40)),
		color(COLORS.platform),
		"platform",
	]);
}

scene("game", () => {
	// Clear to background on scene start
	// Ground
	makePlatform(vec2(0, height() - 32), vec2(width(), 32));
	// Ledges
	makePlatform(vec2(80, height() - 140), vec2(180, 22));
	makePlatform(vec2(width() / 2 - 120, height() - 260), vec2(240, 22));
	makePlatform(vec2(width() - 280, height() - 180), vec2(220, 22));
	makePlatform(vec2(width() - 420, height() - 360), vec2(180, 22));

	// Goal indicator square
	const goal = add([
		rect(28, 28),
		pos(width() - 60, height() - 388),
		area(),
		color(COLORS.goal),
		outline(2, rgb(40, 40, 40)),
		"goal",
	]);

	const player = add([
		rect(24, 30),
		area({ collisionIgnore: [] }),
		body(),
		pos(40, height() - 100),
		color(COLORS.player),
		outline(2, rgb(30, 30, 30)),
		anchor("center"),
		"player",
	]);

	// Movement
	onKeyDown("left", () => player.move(-SPEED, 0));
	onKeyDown("a", () => player.move(-SPEED, 0));
	onKeyDown("right", () => player.move(SPEED, 0));
	onKeyDown("d", () => player.move(SPEED, 0));

	function tryJump() {
		if (player.isGrounded()) {
			player.jump(JUMP_FORCE);
		}
	}
	onKeyPress("space", tryJump);
	onKeyPress("w", tryJump);
	onKeyPress("up", tryJump);

	// Reset velocity X when no movement keys are held
	function stopIfNoMoveKeys() {
		if (!isKeyDown("left") && !isKeyDown("a") && !isKeyDown("right") && !isKeyDown("d")) player.vel.x = 0;
	}
	onKeyRelease("left", stopIfNoMoveKeys);
	onKeyRelease("a", stopIfNoMoveKeys);
	onKeyRelease("right", stopIfNoMoveKeys);
	onKeyRelease("d", stopIfNoMoveKeys);

	// Simple fall reset
	player.onUpdate(() => {
		if (player.pos.y > height() + 200) {
			go("game");
		}
	});

	// Win condition
	player.onCollide("goal", () => {
		// Brief success text
		add([
			text("You win! Press R to restart", { size: 24 }),
			pos(width() / 2, 40),
			anchor("center"),
			color(COLORS.text),
			lifespan(4),
			fixed(),
		]);
	});

	// Restart
	onKeyPress("r", () => go("game"));

	// UI hint
	add([
		text("Jump to the green square!", { size: 18 }),
		pos(16, 16),
		color(COLORS.text),
		fixed(),
	]);
});

go("game");


