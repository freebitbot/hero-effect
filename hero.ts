import Hero from "./apps/ulixee/hero/lib/Hero";

const heroApp = new Hero({
	userAgent: "~ chrome >= 136 && mac",
	connectionToCore: {
		host: "ws://localhost:1818",
	},
	showChrome: true,
	showDevtools: true,
	showChromeInteractions: true,
});

await heroApp.goto("https://www.google.com/");

const form = heroApp.document.querySelector("form textarea");

await form.$type("test");

// inspect(form, {
// 	colors: true,
// 	depth: 2,
// });

// console.log(res);

// Wait a bit to see if resources load
// await new Promise(resolve => setTimeout(resolve, 5000));

// await heroApp.close();
