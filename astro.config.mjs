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
			components: {
				SiteTitle: "./src/components/VersionSelect.astro",
				Sidebar: "./src/components/VersionedSidebar.astro",
			},
			sidebar: [
				{ label: 'Installation', slug: 'installation' },
				{ label: 'Workflow', slug: 'workflow' },
				{
					label: 'Legacy - Shiny R packages',
					collapsed: true,
					items: [
						{ label: 'Home', slug: 'legacy' },
						{ label: 'Installation', slug: 'legacy/installation' },
						{
							label: 'First ghqc project',
							items: [
								{ label: 'Introduction', slug: 'legacy/intro/introduction' },
								{ label: '0. Set-up', slug: 'legacy/intro/setup' },
								{ label: '1. Initialize', slug: 'legacy/intro/initialize'},
								{ label: '2. Review', slug: 'legacy/intro/review' },
								{ label: '3. Approve', slug: 'legacy/intro/approve' },
								{ label: '4. Record', slug: 'legacy/intro/record' },
								{ label: '5. Archive', slug: 'legacy/intro/archive' },
							],
						},
						{
							label: 'Workflow',
							items: [
								{ label: 'Introduction', slug: 'legacy/workflow/introduction' },
								{ label: 'Assign Files for QC', slug: 'legacy/workflow/assign' },
								{ label: 'Review QC Files', slug: 'legacy/workflow/review' },
								{ label: 'Notify File Changes', slug: 'legacy/workflow/notify' },
								{ label: 'Approve QCed Files', slug: 'legacy/workflow/approve' },
							]
						},
						{
							label: 'Admin Guide',
							collapsed: true,
							items: [
								{ label: 'Ecosystem Architecture', slug: 'legacy/admin_guide/ecosystem_arch' },
								{ label: 'Configuration Repository', slug: 'legacy/admin_guide/configuration' },
							]
						}
					]
				}
			],
		}),
	],
});
