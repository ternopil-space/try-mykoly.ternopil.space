// src/app/constants/languages.ts

import { LanguageOption } from './language.interface';

export const LANGUAGES: (LanguageOption & { population: number })[] = [
	{
		code: 'ua',
		label: 'Українська',
		flagSrc: 'flags/ukraine.svg',
		htmlLang: 'uk',
		population: 35,
	},
	{
		code: 'en',
		label: 'English',
		flagSrc: 'flags/united-kingdom.svg',
		htmlLang: 'en',
		population: 280,
	},
	{
		code: 'de',
		label: 'Deutsch',
		flagSrc: 'flags/germany.svg',
		htmlLang: 'de',
		population: 130,
	},
	{
		code: 'es',
		label: 'Español',
		flagSrc: 'flags/spain.svg',
		htmlLang: 'es',
		population: 75,
	},
];
