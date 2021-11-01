// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'UniPad Document',
	tagline: 'Document for UniPad',
	url: 'https://unipad.io',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'kimjisub', // Usually your GitHub org/user name.
	projectName: 'UniPad-Document', // Usually your repo name.

	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/kimjisub/UniPad-Document/edit/main/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						'https://github.com/kimjisub/UniPad-Document/edit/main/blog/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'UniPad',
				logo: {
					alt: 'UniPad',
					src: 'img/logo.svg',
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Docs',
					},
					{ to: '/blog', label: 'Blog', position: 'left' },
					{
						type: 'localeDropdown',
						position: 'right',
					},
					/* {
						href: 'https://github.com/kimjisub/UniPad-Document',
						label: 'GitHub',
						position: 'right',
					}, */
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Links',
						items: [
							{
								label: 'Document',
								to: '/docs/intro',
							},
							{
								label: 'Blog',
								to: '/blog',
							},
						],
					},
					{
						title: 'Community',
						items: [
							/*{
								label: 'Stack Overflow',
								href: 'https://stackoverflow.com/questions/tagged/docusaurus',
							},
							{
								label: 'Discord',
								href: 'https://discordapp.com/invite/docusaurus',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/docusaurus',
							},*/
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog',
							},
							/*{
								label: 'GitHub',
								href: 'https://github.com/facebook/docusaurus',
							},*/
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} UniPad.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),

	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'ko'],
		localeConfigs: {
			en: {
				label: 'English',
			},
			ko: {
				label: '한국어',
			},
		},
	},
};

module.exports = config;
