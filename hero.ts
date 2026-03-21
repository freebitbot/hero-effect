import Hero from "./apps/ulixee/hero/lib/Hero";

const heroApp = new Hero({
	userAgent: "~ chrome >= 136 && mac",
	connectionToCore: {
		host: "ws://localhost:1818",
	},
	showChrome: true,
	showDevtools: true,
});

await heroApp.goto("https://www.google.com/");

// Wait a bit to see if resources load
// await new Promise(resolve => setTimeout(resolve, 5000));

// await heroApp.close();
