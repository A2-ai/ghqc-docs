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
			components: {
				SiteTitle: "./src/components/VersionSelect.astro",
				Sidebar: "./src/components/VersionedSidebar.astro",
			},
			sidebar: [
				{ 
					label: 'Introduction',
					items: [
						{ label: 'Installation', slug: 'intro/installation' },
						{ label: 'Workflow', slug: 'intro/workflow' },
						{ 
							label: 'First ghqc project', 
							collapsed: true,
							items: [
								{ label: 'Introduction', slug: 'intro/getting-started' },
								{ label: 'Create', slug: 'intro/getting-started/create' },
								{ label: 'Status', slug: 'intro/getting-started/status' },
								{ label: 'Review', slug: 'intro/getting-started/review' },
								{ label: 'Findings', slug: 'intro/getting-started/findings' },
								{ label: 'Approve', slug: 'intro/getting-started/approve' },
							] 
						}
					]
				},
				{
					label: 'Features',
					collapsed: true,
					items: [
						{ label: 'Introduction', slug: 'features'},
						{ label: 'Create', slug: 'features/create' },
						{ label: 'QC Status', slug: 'features/qc_status'},
						{ label: 'Comments', slug: 'features/comments' },
						{ label: 'Record', slug: 'features/record' },
						{ label: 'Archive', slug: 'features/archive' },
						{ label: 'Configuration', slug: 'features/configuration' },
						{ label: 'Git Status', slug: 'features/git_status'},
					]
				},
				{
					label: 'CLI',
					collapsed: true,
					items: [
						{ label: 'Introduction', slug: 'cli' },
						{
							label: 'Auth',
							collapsed: true,
							items: [
								{ label: 'Introduction', slug: 'cli/auth' },
								{ label: 'Login', slug: 'cli/auth/login' },
								{ label: 'Logout', slug: 'cli/auth/logout' },
								{ label: 'Status', slug: 'cli/auth/status' },
								{ label: 'Token', slug: 'cli/auth/token' },
							]
						},
						{
							label: 'Issue',
							collapsed: true,
							items: [
								{ label: 'Create', slug: 'cli/issue/create' },
								{ label: 'Comment', slug: 'cli/issue/comment' },
								{ label: 'Review', slug: 'cli/issue/review' },
								{ label: 'Approve', slug: 'cli/issue/approve' },
								{ label: 'Unapprove', slug: 'cli/issue/unapprove' },
								{ label: 'Status', slug: 'cli/issue/status' },
							]
						},
						{
							label: 'Milestone',
							collapsed: true,
							items: [
								{ label: 'Status', slug: 'cli/milestone/status' },
								{ label: 'Record', slug: 'cli/milestone/record' },
								{ label: 'Archive', slug: 'cli/milestone/archive' },
							]
						},
						{
							label: 'Configuration',
							collapsed: true,
							items: [
								{ label: 'Setup', slug: 'cli/configuration/setup' },
								{ label: 'Status', slug: 'cli/configuration/status' },
							]
						},
						{ label: 'Situation Report', slug: 'cli/sitrep' },
						{ label: 'UI', slug: 'cli/ui' },
						{ label: 'Serve', slug: 'cli/serve' },
					]
				},
				{
					label: 'R Package',
					collapsed: true,
					items: [
						{ label: 'Introduction', slug: 'rpkg'},
						{ label: 'ghqc', slug: 'rpkg/ghqc' },
						{ label: 'Install', slug: 'rpkg/install' },
						{ label: 'Server Management', slug: 'rpkg/management' },
						{ label: 'Logging', slug: 'rpkg/log' },
						{ label: 'Situation Report', slug: 'rpkg/sitrep' },
						{ label: 'Version', slug: 'rpkg/version' },
					]
				},
				{
					label: 'Concepts',
					collapsed: true,
					items: [
						{ label: 'Introduction', slug: 'concepts' },
						{ 
							label: 'Configuration', 
							collapsed: true,
							items: [
								{ label: 'Introduction', slug: 'concepts/configuration' },
								{ label: 'Content and Defaults', slug: 'concepts/configuration/content' },
								{ label: 'Authoring', slug: 'concepts/configuration/authoring' },
							]
						},
						{ label: 'Relevant Files and Issues', slug: 'concepts/relevant-files' },
						{ label: 'QC Record', slug: 'concepts/record' },
						{ label: 'Authentication', slug: 'concepts/authentication' },
						{ label: 'QC Status', slug: 'concepts/qc-status' },
						{ label: 'Unapproval Impact', slug: 'concepts/unapproval-impact' },
					]
				},
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
