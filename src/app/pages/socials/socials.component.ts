import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../shared/translate.pipe';

type ContactCard = {
	label: string;
	value: string;
	translateValue?: boolean;
	description: string;
	href?: string;
	external?: boolean;
	ariaLabel?: string;
};

type SocialCard = {
	label: string;
	handle: string;
	description: string;
	href: string;
	ariaLabel: string;
};

@Component({
	imports: [NgOptimizedImage, TranslatePipe],
	templateUrl: './socials.component.html',
	styleUrl: './socials.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialsComponent {
	protected readonly contacts: ContactCard[] = [
		{
			label: 'Телефон',
			value: '+380 99 333 8880',
			description: 'Для бронювання столика, уточнення меню та деталей візиту.',
			href: 'tel:+380993338880',
			ariaLabel: 'Зателефонувати у ресторацію Три Миколи',
		},
		{
			label: 'Адреса',
			value: 'вул. Торговиця, 1а, Тернопіль, Тернопільська область, Україна',
			translateValue: true,
			description: 'Локація ресторації у Тернополі. Відкривається у картах.',
			href: 'https://maps.google.com/?q=%D0%B2%D1%83%D0%BB.%20%D0%A2%D0%BE%D1%80%D0%B3%D0%BE%D0%B2%D0%B8%D1%86%D1%8F%2C%201%D0%B0%2C%20%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D1%96%D0%BB%D1%8C',
			external: true,
			ariaLabel: 'Відкрити адресу ресторації Три Миколи на мапі',
		},
		{
			label: 'Графік роботи',
			value: 'Щодня 11:00-23:00',
			translateValue: true,
			description: 'Актуальний режим роботи за наданою офіційною інформацією.',
		},
		{
			label: 'Середній чек',
			value: 'Приблизно 200-400 грн за страву',
			translateValue: true,
			description: 'Орієнтовний рівень цін для гостей ресторації.',
		},
	];

	protected readonly socials: SocialCard[] = [
		{
			label: 'Instagram',
			handle: '@trumukolu',
			description: 'Пости та сторіз про страви, атмосферу і життя ресторації.',
			href: 'https://www.instagram.com/trumukolu/',
			ariaLabel: 'Відкрити Instagram ресторації Три Миколи',
		},
		{
			label: 'Facebook',
			handle: 'Trumukolu',
			description: 'Контакти, відгуки та фото на офіційній сторінці закладу.',
			href: 'https://www.facebook.com/trumukolu/',
			ariaLabel: 'Відкрити Facebook сторінку ресторації Три Миколи',
		},
		{
			label: 'Linktree',
			handle: 'trumukolu',
			description: 'Зібрані посилання на соцмережі, меню, TikTok та інші корисні сторінки.',
			href: 'https://linktr.ee/trumukolu',
			ariaLabel: 'Відкрити Linktree ресторації Три Миколи',
		},
	];
}
