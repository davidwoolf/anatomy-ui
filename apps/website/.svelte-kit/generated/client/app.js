export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15')
];

export const server_loads = [3];

export const dictionary = {
		"/(app)": [6,[2]],
		"/examples/dynamic-components/dialogs/backdrop": [12,[5]],
		"/examples/dynamic-components/modals/panels": [13,[5]],
		"/examples/layout/layout-shift/font-fallbacks": [14,[5]],
		"/examples/layout/position/sticky-fixed": [15,[5]],
		"/(app)/foundations": [7,[2,3]],
		"/(app)/foundations/[id]/[slug]": [~8,[2,3]],
		"/(app)/kit": [~9,[2,4]],
		"/(app)/kit/components/[slug]": [~10,[2,4]],
		"/(app)/release-notes": [11,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';