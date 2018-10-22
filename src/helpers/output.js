export const setAppName = name => (global.appName = name);

export const output = text => console.log(`[${global.appName}] > ${text}`);

global.output = output;
global.appName = 'no-name';
