import { defaultScreen } from "@ulixee/default-browser-emulator/lib/Viewports";
import type { IBounds } from "@ulixee/desktop-interfaces/IBounds";

interface IBoundsAndScale extends IBounds {
	scale: number;
}

export default class Workarea {
	public static workarea: IBoundsAndScale;

	public static getMaxChromeBounds(): IBoundsAndScale | null {
		if (!Workarea.workarea) return null;

		return {
			top: Workarea.workarea.top,
			left: Workarea.workarea.left,
			width: Workarea.workarea.width,
			height: Workarea.workarea.height,
			scale: Workarea.workarea.scale,
		};
	}

	public static setHeroDefaultScreen(workarea: IBoundsAndScale): void {
		Workarea.workarea = workarea;
		const maxbounds = Workarea.getMaxChromeBounds();

		defaultScreen.width = maxbounds.width;
		defaultScreen.height = maxbounds.height;
		defaultScreen.scale = maxbounds.scale;
	}
}
