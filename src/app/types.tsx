// hex string for dynamic colours
export type ColorValueHex = `#${string}`;

// corner-of-screen string interpolation
export type CornerPosition = 'tr'|'br'|'bl'|'tl'|undefined;

// allowed screen types
export type ScreenType = 'welcome'|'game'|'end'|'menu'|'level';