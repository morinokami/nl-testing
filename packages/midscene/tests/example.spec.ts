import { test } from "./fixture";

test("has title", async ({ aiAssert, page }) => {
	await page.goto("https://playwright.dev/");

	await aiAssert("The page title should contain 'Playwright'");
});

test("get started link", async ({ aiTap, aiAssert, page }) => {
	await page.goto("https://playwright.dev/");

	await aiTap("The 'Get started' link");

	await aiAssert(
		"The page should have a heading with the name of 'Installation'",
	);
});

const TODO_ITEMS = [
	"チーズを買う",
	"猫に餌を与える",
	"病院を予約する",
] as const;

test("TODO アイテムを追加できる", async ({ ai, aiAssert, page }) => {
	await page.goto("https://demo.playwright.dev/todomvc");

	await ai(
		`入力欄に「${TODO_ITEMS[0]}」と入力して Enter キーを押し、最初の TODO アイテムを追加する`,
	);

	await aiAssert("リストには TODO アイテムが 1 つだけ表示されている");

	await ai(
		`入力欄に「${TODO_ITEMS[1]}」と入力して Enter キーを押し、2 番目の TODO アイテムを追加する`,
	);

	await aiAssert(
		`リストには「${TODO_ITEMS[0]}」と「${TODO_ITEMS[1]}」というタイトルの 2 つの TODO アイテムが表示されている`,
	);

	await aiAssert("ローカルストレージには 2 つの TODO アイテムが保存されている");
});
