// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://a2-ai.github.io',
	base: '/ghqc-docs',
	integrations: [
		starlight({
			title: 'ghqc',
			social: [
				{ icon: 'github', label: 'ghqc', href: 'https://github.com/a2-ai/ghqc' },
				{ icon: 'github', label: 'ghqc.app', href: 'https://github.com/a2-ai/ghqc.app' }
			],
			sidebar: [
				{ label: 'Installation', slug: 'installation' },
				{
					label: 'First ghqc project',
					items: [
						{ label: 'Introduction', slug: 'intro/introduction' },
						{ label: '0. Set-up', slug: 'intro/setup' },
						{ label: '1. Initialize', slug: 'intro/initialize'},
						{ label: '2. Review', slug: 'intro/review' },
						{ label: '3. Approve', slug: 'intro/approve' },
						{ label: '4. Record', slug: 'intro/record' },
					],
				},
				{
					label: 'Workflow',
					items: [
						{ label: 'Introduction', slug: 'workflow/introduction' },
						{ label: 'Assign Files for QC', slug: 'workflow/assign' },
					]
				}
			],
		}),
	],
});
