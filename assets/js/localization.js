/**
 * BimEnough.com Localization System
 * Handles multi-language support for English and Italian
 */

(function() {
    'use strict';

    const Localization = {
        // Configuration
        config: {
            defaultLanguage: 'en',
            supportedLanguages: ['en', 'it'],
            storageKey: 'bimenough_language',
            attribute: 'data-i18n'
        },

        // Current language state
        currentLanguage: 'en',

        // Translation strings
        translations: {
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.features': 'Features',
                'nav.tools': 'Tools',
                'nav.download': 'Download',
                'nav.support': 'Support',
                'nav.about': 'About',
                'nav.downloadFree': 'Download Free',
                'nav.parameterTools': 'Parameter Tools',
                'nav.ifcTools': 'IFC Tools',
                'nav.utilityTools': 'Utility Tools',
                'nav.elementTools': 'Element Tools',
                'nav.idTools': 'ID Tools',
                'nav.viewsheetTools': 'ViewSheet Tools',

                // Cookie Consent
                'cookie.message': 'We use essential cookies to ensure our website works properly.',
                'cookie.accept': 'Accept',
                'cookie.settings': 'Settings',

                // Parameter Tools Page
                'parameterTools.title': 'Parameter Tools',
                'parameterTools.subtitle': 'Take control of your Revit parameters like never before',
                'parameterTools.description': 'Tired of wrestling with shared parameters and project parameters in Revit? Our Parameter Tools make it easy to create, manage, and organize all your parameters in one place. Plus, with Excel integration, you can finally work the way you want to work.',
                'parameterTools.getToolsFree': 'Get Parameter Tools Free',
                'parameterTools.seeWhatItCanDo': 'See What It Can Do',

                // Parameter Tools Features
                'parameterTools.whyLove': 'Why You\'ll Love Parameter Tools',
                'parameterTools.whyLoveSubtitle': 'Stop fighting with Revit\'s parameter system. Start enjoying it.',
                
                'parameterTools.feature1.title': 'Shared Parameters Made Simple',
                'parameterTools.feature1.description': 'Create, edit, and organize shared parameters without the headache. Visual interface, drag-and-drop organization, and instant validation. Finally, shared parameters that make sense!',
                
                'parameterTools.feature2.title': 'Project Parameter Control',
                'parameterTools.feature2.description': 'See all your project parameters in one place. Add new ones, modify existing ones, and manage categories like a pro. No more hunting through dialog boxes!',
                
                'parameterTools.feature3.title': 'Excel Integration That Actually Works',
                'parameterTools.feature3.description': 'Export your parameters to Excel, make changes, and import them back. Perfect for bulk editing, client reviews, or working with consultants. It\'s like magic, but better!',
                
                'parameterTools.feature4.title': 'Schedule Import/Export',
                'parameterTools.feature4.description': 'Export schedules to Excel for client reviews or external analysis. Import updated data back to Revit seamlessly. Perfect for quantity surveys and coordination.',
                
                'parameterTools.feature5.title': 'Validation & Error Checking',
                'parameterTools.feature5.description': 'Catch parameter conflicts and errors before they become problems. Smart validation ensures your parameters are set up correctly every time.',
                
                'parameterTools.feature6.title': 'Batch Operations',
                'parameterTools.feature6.description': 'Need to update 50 parameters at once? No problem! Bulk operations let you make changes across multiple parameters in seconds, not hours.',

                // How It Works
                'howItWorks.title': 'See It In Action',
                'howItWorks.subtitle': 'From chaos to organized in minutes',
                'howItWorks.step1.title': 'Open Parameter Tools',
                'howItWorks.step1.description': 'Launch from the BimE Tools ribbon. See all your parameters organized in one clean interface.',
                'howItWorks.step2.title': 'Edit & Organize',
                'howItWorks.step2.description': 'Create new parameters, organize them into groups, and set up categories. Visual drag-and-drop makes it intuitive.',
                'howItWorks.step3.title': 'Export to Excel',
                'howItWorks.step3.description': 'Need to share with your team or make bulk changes? Export to Excel with one click.',
                'howItWorks.step4.title': 'Import Back',
                'howItWorks.step4.description': 'Made changes in Excel? Import them back to Revit seamlessly. Perfect for collaboration!',

                // CTA
                'cta.readyToMaster': 'Ready to Master Your Parameters?',
                'cta.joinThousands': 'Join thousands of Revit users who\'ve discovered the joy of organized parameters',
                'cta.downloadBimEToolsFree': 'Download BimE Tools Free',
                'cta.getSupport': 'Get Support',
                'cta.features': '✓ Free forever ✓ No signup required ✓ Works with Revit 2024+',

                // IFC Tools
                'ifcTools.title': 'IFC Tools',
                'ifcTools.subtitle': 'Master IFC PropertySets like a pro',
                'ifcTools.description': 'IFC exports giving you headaches? Custom PropertySets seem impossible? Our IFC Tools give you complete control over your IFC data. Create custom PropertySets, map Revit parameters to IFC properties, and ensure your models export exactly the data you need.',
                'ifcTools.getToolsFree': 'Get IFC Tools Free',
                'ifcTools.learnMore': 'Learn More',
                'ifcTools.whyLove': 'Why IFC Tools Will Change Your Life',
                'ifcTools.whyLoveSubtitle': 'Finally, IFC exports that actually work the way you want them to',
                'ifcTools.feature1.title': 'Custom PropertySet Manager',
                'ifcTools.feature1.description': 'Create your own PropertySets from scratch! Need custom properties for your specific workflow? Build them visually with our intuitive interface. No more editing XML files or fighting with complex schemas.',
                'ifcTools.feature2.title': 'Smart Parameter Mapping',
                'ifcTools.feature2.description': 'Map your Revit parameters to IFC properties with zero confusion. See exactly which parameter goes where, with live validation to catch conflicts before export.',
                'ifcTools.feature3.title': 'Multi-Schema Support',
                'ifcTools.feature3.description': 'Whether you\'re working with IFC 2x3, IFC 4, or even IFC 4.3, we\'ve got you covered. Switch between schemas effortlessly and ensure your PropertySets are always compliant.',
                'ifcTools.feature4.title': 'IDS Manager (Coming Soon)',
                'ifcTools.feature4.description': 'Information Delivery Specification support is on the way! Soon you\'ll be able to manage IDS requirements and ensure your models meet project specifications automatically.',
                'ifcTools.feature5.title': 'Live Preview & Validation',
                'ifcTools.feature5.description': 'See your PropertySets in action before export. Live preview shows exactly what data will be included, and smart validation catches errors before they reach your final IFC file.',
                'ifcTools.feature6.title': 'Import/Export Configurations',
                'ifcTools.feature6.description': 'Save your PropertySet configurations and share them with your team. Perfect for maintaining consistency across projects or working with specific client requirements.',
                'ifcTools.useCases.title': 'Perfect For Every BIM Workflow',
                'ifcTools.useCases.subtitle': 'From architects to engineers, everyone loves organized IFC data',
                'ifcTools.useCase1.title': 'Construction Teams',
                'ifcTools.useCase1.description': 'Export detailed construction information including fire ratings, thermal properties, and structural data that contractors actually need.',
                'ifcTools.useCase2.title': 'MEP Engineers',
                'ifcTools.useCase2.description': 'Include electrical, mechanical, and plumbing specifications in your IFC exports. Custom PropertySets for equipment specifications and performance data.',
                'ifcTools.useCase3.title': 'Facility Managers',
                'ifcTools.useCase3.description': 'Prepare models for handover with maintenance data, warranty information, and asset management properties that make sense.',
                'ifcTools.useCase4.title': 'Sustainability Consultants',
                'ifcTools.useCase4.description': 'Export environmental data, material properties, and energy performance information for analysis and certification processes.',
                'ifcTools.howItWorks.title': 'From Chaos to Organized IFC Data',
                'ifcTools.howItWorks.subtitle': 'Three steps to PropertySet perfection',
                'ifcTools.step1.title': 'Choose Your Schema & Entity',
                'ifcTools.step1.description': 'Select your IFC schema version and target entity type. Whether it\'s walls, doors, spaces, or custom elements, we support them all.',
                'ifcTools.step2.title': 'Create or Map PropertySets',
                'ifcTools.step2.description': 'Build custom PropertySets from scratch or map existing Revit parameters to standard IFC properties. Visual interface makes it intuitive.',
                'ifcTools.step3.title': 'Export with Confidence',
                'ifcTools.step3.description': 'Generate your IFC with perfectly organized PropertySets. Your data is exactly where it should be, every time.',
                'ifcTools.cta.title': 'Ready to Master IFC PropertySets?',
                'ifcTools.cta.subtitle': 'Join the professionals who\'ve discovered the power of organized IFC data',

                // Utility Tools
                'utilityTools.title': 'Utility Tools',
                'utilityTools.subtitle': 'Supercharge your Revit workflow with smart automation',
                'utilityTools.description': 'Tired of manually selecting elements and copying parameters one by one? Our Utility Tools bring powerful automation to your everyday tasks. Power Selection finds exactly what you need, and Copy/Concatenate Parameters makes bulk parameter operations a breeze.',
                'utilityTools.getToolsFree': 'Get Utility Tools Free',
                'utilityTools.seeTheMagic': 'See the Magic',
                'utilityTools.whyLove': 'Automation That Just Makes Sense',
                'utilityTools.whyLoveSubtitle': 'Stop clicking one element at a time. Start working smart.',
                'utilityTools.feature1.title': 'Power Selection',
                'utilityTools.feature1.description': 'Find elements like a search engine! Combine filters for category, family, type, parameters, and more. Save your favorite filters and apply them instantly. It\'s like having a superpower for selection.',
                'utilityTools.feature2.title': 'Copy & Concatenate Parameters',
                'utilityTools.feature2.description': 'Copy parameter values between elements or create new parameters by combining existing ones. Perfect for creating room codes, element tags, or any custom parameter combinations.',
                'utilityTools.feature3.title': 'Advanced Filtering Logic',
                'utilityTools.feature3.description': 'Use AND/OR logic to create complex selection criteria. Filter by multiple parameters, worksets, phases, or any combination you can think of. The possibilities are endless!',
                'utilityTools.feature4.title': 'Batch Operations',
                'utilityTools.feature4.description': 'Apply changes to hundreds of elements at once. Update parameters, copy values, or perform complex operations across your entire project in seconds.',
                'utilityTools.feature5.title': 'Real-Time Preview',
                'utilityTools.feature5.description': 'See exactly what elements will be selected or affected before you apply changes. No surprises, no undo nightmares - just predictable, reliable results.',
                'utilityTools.feature6.title': 'Save & Share Configurations',
                'utilityTools.feature6.description': 'Save your filter configurations and parameter operations for reuse. Share them with your team to ensure consistent workflows across projects.',
                'utilityTools.useCases.title': 'Real-World Magic',
                'utilityTools.useCases.subtitle': 'See how professionals use Utility Tools to save hours every week',
                'utilityTools.useCase1.title': 'Room Numbering Revolution',
                'utilityTools.useCase1.description': 'Automatically create room numbers by concatenating floor level + zone + sequence. No more manual typing, no more mistakes!',
                'utilityTools.useCase2.title': 'Fire Rating Updates',
                'utilityTools.useCase2.description': 'Select all walls by fire rating parameter and update them in bulk. What used to take hours now takes minutes.',
                'utilityTools.useCase3.title': 'MEP Coordination Tags',
                'utilityTools.useCase3.description': 'Copy mechanical equipment data to create custom tags for coordination drawings. Combine manufacturer + model + size automatically.',
                'utilityTools.useCase4.title': 'Material Take-Offs',
                'utilityTools.useCase4.description': 'Select elements by material type and copy cost data for quantity surveying. Perfect for preliminary estimates and cost tracking.',
                'utilityTools.howItWorks.title': 'From Manual Pain to Automated Bliss',
                'utilityTools.howItWorks.subtitle': 'Three steps to workflow automation',
                'utilityTools.step1.title': 'Set Up Your Filters',
                'utilityTools.step1.description': 'Choose your selection criteria - category, family, parameters, or any combination. The smart interface guides you through building complex filters easily.',
                'utilityTools.step2.title': 'Preview & Refine',
                'utilityTools.step2.description': 'See exactly what elements match your criteria. Adjust filters if needed until you have the perfect selection. No guesswork!',
                'utilityTools.step3.title': 'Apply & Automate',
                'utilityTools.step3.description': 'Execute your selection, copy parameters, or apply changes. Save the configuration for next time. Automation at its finest!',
                'utilityTools.cta.title': 'Ready to Automate Your Workflow?',
                'utilityTools.cta.subtitle': 'Join thousands who\'ve discovered the power of smart selection and automation',

                // Element Tools
                'elementTools.title': 'Element Tools',
                'elementTools.subtitle': 'Take control of materials, families, and elements like a pro',
                'elementTools.description': 'Managing hundreds of materials and families driving you crazy? Element Tools bring order to the chaos. Organize materials, manage family properties, and keep your project elements perfectly organized. Plus, Excel integration makes bulk updates a breeze!',
                'elementTools.getToolsFree': 'Get Element Tools Free',
                'elementTools.seeFeatures': 'See the Features',
                'elementTools.whyLove': 'Why Element Tools Will Save Your Sanity',
                'elementTools.whyLoveSubtitle': 'Because life\'s too short to manage elements one by one',
                'elementTools.feature1.title': 'Material Manager',
                'elementTools.feature1.description': 'See all your project materials in one organized view. Update properties, costs, manufacturer data, and descriptions in bulk. No more hunting through endless material dialogs!',
                'elementTools.feature2.title': 'Loaded Family Manager',
                'elementTools.feature2.description': 'Manage all loaded families and their types in one place. Rename, organize, and update family properties efficiently. Perfect for maintaining project standards!',
                'elementTools.feature3.title': 'System Family Manager',
                'elementTools.feature3.description': 'Control system families like walls, floors, and roofs. Update type properties, manage naming conventions, and ensure consistency across your project.',
                'elementTools.feature4.title': 'Excel Integration',
                'elementTools.feature4.description': 'Export all element data to Excel for easy editing, cost analysis, or client reviews. Import changes back to Revit seamlessly. Perfect for project coordination!',
                'elementTools.feature5.title': 'Bulk Operations',
                'elementTools.feature5.description': 'Update hundreds of materials or families at once. Apply naming conventions, update properties, or reorganize entire libraries in minutes instead of hours.',
                'elementTools.feature6.title': 'Smart Filtering & Search',
                'elementTools.feature6.description': 'Find exactly what you need with powerful search and filtering options. Sort by category, manufacturer, cost, or any property you can think of.',
                'elementTools.useCases.title': 'Real Projects, Real Solutions',
                'elementTools.useCases.subtitle': 'See how professionals streamline their element management',
                'elementTools.useCase1.title': 'Cost Estimation Magic',
                'elementTools.useCase1.description': 'Export material data to Excel, add current pricing, and generate accurate cost estimates. Update costs across the entire project in one go!',
                'elementTools.useCase2.title': 'Spec Updates',
                'elementTools.useCase2.description': 'Client changed the brick supplier? Update manufacturer data across all brick materials instantly. No more manual searching and editing!',
                'elementTools.useCase3.title': 'Family Organization',
                'elementTools.useCase3.description': 'Standardize family naming across your office. Apply consistent naming conventions to hundreds of families with bulk rename operations.',
                'elementTools.useCase4.title': 'Quality Control',
                'elementTools.useCase4.description': 'Identify and fix incomplete material data. Find materials missing descriptions, costs, or manufacturer info and update them systematically.',
                'elementTools.howItWorks.title': 'From Chaos to Organization',
                'elementTools.howItWorks.subtitle': 'Three steps to element mastery',
                'elementTools.step1.title': 'View & Analyze',
                'elementTools.step1.description': 'See all your materials, families, or system families in one organized view. Filter, search, and identify what needs attention.',
                'elementTools.step2.title': 'Edit & Update',
                'elementTools.step2.description': 'Make changes directly in the interface or export to Excel for bulk editing. Update properties, costs, and descriptions efficiently.',
                'elementTools.step3.title': 'Apply & Organize',
                'elementTools.step3.description': 'Apply changes back to your project and enjoy perfectly organized elements. Your project is now clean, consistent, and professional.',
                'elementTools.cta.title': 'Ready to Organize Your Elements?',
                'elementTools.cta.subtitle': 'Join the professionals who\'ve discovered the power of organized project elements',

                // ID Tools
                'idTools.title': 'ID Tools',
                'idTools.subtitle': 'Master element identification like a detective',
                'idTools.description': 'Ever needed to find specific elements in a massive project? Track down elements by ID? Copy IDs to parameters for coordination? ID Tools make element identification and selection effortless. Whether you\'re debugging, coordinating, or organizing, these tools have your back.',
                'idTools.getToolsFree': 'Get ID Tools Free',
                'idTools.learnMore': 'Learn More',
                'idTools.whyLove': 'Why ID Tools Are Essential',
                'idTools.whyLoveSubtitle': 'Because finding elements shouldn\'t be like finding a needle in a haystack',
                'idTools.feature1.title': 'ID Viewer',
                'idTools.feature1.description': 'See element IDs and unique IDs for any selection instantly. Perfect for debugging, coordination, or understanding your model structure. Copy IDs to clipboard with one click!',
                'idTools.feature2.title': 'ID Copy',
                'idTools.feature2.description': 'Copy element IDs to parameters automatically. Perfect for creating unique element tags, coordination references, or linking to external databases. Works with any text parameter!',
                'idTools.feature3.title': 'Select by ID',
                'idTools.feature3.description': 'Paste a list of element IDs and select them all instantly. Perfect for troubleshooting, coordination workflows, or working with external data that references specific elements.',
                'idTools.feature4.title': 'Both ID Types',
                'idTools.feature4.description': 'Work with both Element IDs (numbers) and Unique IDs (GUIDs). Switch between them based on your needs. Unique IDs are perfect for external references and never change!',
                'idTools.feature5.title': 'Excel Integration',
                'idTools.feature5.description': 'Export element information with IDs to Excel for analysis or coordination. Perfect for creating element databases or sharing with consultants who need specific element references.',
                'idTools.feature6.title': 'Highlight & Navigate',
                'idTools.feature6.description': 'Highlight selected elements in the model and navigate to them instantly. No more hunting through views to find that one specific element!',
                'idTools.useCases.title': 'Real-World ID Magic',
                'idTools.useCases.subtitle': 'See how professionals use ID Tools to solve coordination challenges',
                'idTools.useCase1.title': 'Issue Tracking',
                'idTools.useCase1.description': 'Track design issues by element ID. When consultants report problems with specific elements, find them instantly and resolve issues faster.',
                'idTools.useCase2.title': 'Database Linking',
                'idTools.useCase2.description': 'Copy unique IDs to parameters for linking to external databases. Perfect for asset management, cost tracking, or maintenance systems.',
                'idTools.useCase3.title': 'Coordination Workflows',
                'idTools.useCase3.description': 'Share element lists with consultants using IDs. They can reference specific elements in their reports, and you can find them instantly.',
                'idTools.useCase4.title': 'Model Debugging',
                'idTools.useCase4.description': 'When Revit warnings reference element IDs, use Select by ID to find and fix problematic elements quickly. No more manual searching!',
                'idTools.howItWorks.title': 'From Lost to Found',
                'idTools.howItWorks.subtitle': 'Three simple steps to element mastery',
                'idTools.step1.title': 'Select & View',
                'idTools.step1.description': 'Select elements in your model and open ID Viewer to see their IDs instantly. Choose between Element IDs or Unique IDs based on your needs.',
                'idTools.step2.title': 'Copy or Search',
                'idTools.step2.description': 'Copy IDs to clipboard, export to Excel, or use them to populate parameters. Or paste IDs into Select by ID to find specific elements.',
                'idTools.step3.title': 'Coordinate & Track',
                'idTools.step3.description': 'Use IDs for coordination, issue tracking, or linking to external systems. Element identification is now effortless!',
                'idTools.cta.title': 'Ready to Master Element Identification?',
                'idTools.cta.subtitle': 'Join the professionals who never lose track of their elements',

                // ViewSheet Tools
                'viewsheetTools.title': 'ViewSheet Tools',
                'viewsheetTools.subtitle': 'Master sheet management and exports like a printing pro',
                'viewsheetTools.description': 'Struggling with sheet management and exports? Spending hours organizing drawings for delivery? ViewSheet Tools transform the chaos into organized bliss. Manage sheets efficiently, export to PDF/DWG with custom naming, and deliver professional drawing sets every time.',
                'viewsheetTools.getToolsFree': 'Get ViewSheet Tools Free',
                'viewsheetTools.seeFeatures': 'See Features',
                'viewsheetTools.whyLove': 'Why ViewSheet Tools Are Game-Changers',
                'viewsheetTools.whyLoveSubtitle': 'Because professional drawing delivery shouldn\'t be a nightmare',
                'viewsheetTools.feature1.title': 'Smart Sheet Manager',
                'viewsheetTools.feature1.description': 'See all your sheets in one organized view. Track revisions, manage sheet properties, and update title blocks efficiently. Excel integration makes bulk updates a breeze!',
                'viewsheetTools.feature2.title': 'Advanced Export Engine',
                'viewsheetTools.feature2.description': 'Export to PDF or DWG with custom naming schemes. Use parameters to create intelligent file names. Perfect for client deliveries and construction document sets!',
                'viewsheetTools.feature3.title': 'Batch Processing',
                'viewsheetTools.feature3.description': 'Process hundreds of sheets at once. Update properties, change title blocks, or export entire drawing sets with a few clicks. Save hours of manual work!',
                'viewsheetTools.feature4.title': 'Revision Management',
                'viewsheetTools.feature4.description': 'Track revisions across all sheets. Add new revisions, manage revision clouds, and ensure consistency across your drawing set. Never miss a revision again!',
                'viewsheetTools.feature5.title': 'Custom File Naming',
                'viewsheetTools.feature5.description': 'Create intelligent file names using sheet parameters. Combine sheet number, name, revision, and project info automatically. Perfect for organized deliveries!',
                'viewsheetTools.feature6.title': 'Export Configuration',
                'viewsheetTools.feature6.description': 'Save export settings and share them with your team. Consistent output formats, naming conventions, and quality settings across all projects and team members.',
                'viewsheetTools.useCases.title': 'Professional Delivery Made Easy',
                'viewsheetTools.useCases.subtitle': 'See how professionals streamline their drawing delivery process',
                'viewsheetTools.useCase1.title': 'Client Deliveries',
                'viewsheetTools.useCase1.description': 'Export PDFs with intelligent naming for client presentations. Include project name, phase, and revision automatically in filenames.',
                'viewsheetTools.useCase2.title': 'Construction Documents',
                'viewsheetTools.useCase2.description': 'Generate DWG sets for contractors with consistent naming and organization. Perfect for permit submissions and construction coordination.',
                'viewsheetTools.useCase3.title': 'Revision Tracking',
                'viewsheetTools.useCase3.description': 'Manage design revisions across the entire sheet set. Track which sheets need updates and ensure nothing is missed in issue cycles.',
                'viewsheetTools.useCase4.title': 'Team Coordination',
                'viewsheetTools.useCase4.description': 'Share sheet status with consultants and team members. Export sheet lists to Excel for coordination meetings and progress tracking.',
                'viewsheetTools.howItWorks.title': 'From Chaos to Professional Delivery',
                'viewsheetTools.howItWorks.subtitle': 'Three steps to organized sheet management',
                'viewsheetTools.step1.title': 'Organize & Review',
                'viewsheetTools.step1.description': 'View all sheets in one organized interface. Check sheet properties, track revisions, and identify any issues before export.',
                'viewsheetTools.step2.title': 'Configure Export',
                'viewsheetTools.step2.description': 'Set up export parameters, choose naming schemes, and select output formats. Save configurations for consistent team-wide deliveries.',
                'viewsheetTools.step3.title': 'Export & Deliver',
                'viewsheetTools.step3.description': 'Generate professional drawing sets with perfect organization and naming. Your clients and consultants will be impressed!',
                'viewsheetTools.cta.title': 'Ready for Professional Drawing Delivery?',
                'viewsheetTools.cta.subtitle': 'Join the professionals who deliver organized, beautiful drawing sets',

                // Support Page
                'support.title': 'Support & Resources',
                'support.subtitle': 'Get the help you need to master BimE Tools and supercharge your Revit workflow',
                'support.quickHelp.documentation.title': 'Documentation',
                'support.quickHelp.documentation.description': 'Comprehensive guides and tutorials for every BimE Tool',
                'support.quickHelp.documentation.cta': 'Read Docs',
                'support.quickHelp.contact.title': 'Get Help',
                'support.quickHelp.contact.description': 'Have questions? Need assistance? We\'re here to help!',
                'support.quickHelp.contact.cta': 'Contact Us',
                'support.quickHelp.contribute.title': 'Support Us',
                'support.quickHelp.contribute.description': 'Love our tools? Help us keep improving and developing new features!',
                'support.quickHelp.contribute.cta': 'Donate',
                'support.documentation.title': 'Documentation & Guides',
                'support.documentation.subtitle': 'Everything you need to become a BimE Tools expert',
                'support.documentation.gettingStarted.title': 'Getting Started',
                'support.documentation.gettingStarted.installation': 'Installation Guide',
                'support.documentation.gettingStarted.quickStart': 'Quick Start Tutorial',
                'support.documentation.gettingStarted.licensing': 'Licensing & Activation',
                'support.documentation.gettingStarted.systemRequirements': 'System Requirements',
                'support.documentation.toolGuides.title': 'Tool Guides',
                'support.documentation.advanced.title': 'Advanced Topics',
                'support.documentation.advanced.automation': 'Workflow Automation',
                'support.documentation.advanced.customization': 'Customization Options',
                'support.documentation.advanced.integration': 'Integration with Other Tools',
                'support.documentation.advanced.bestPractices': 'Best Practices',
                'support.documentation.troubleshooting.title': 'Troubleshooting',
                'support.documentation.troubleshooting.common': 'Common Issues',
                'support.documentation.troubleshooting.performance': 'Performance Optimization',
                'support.documentation.troubleshooting.compatibility': 'Revit Compatibility',
                'support.documentation.troubleshooting.logs': 'Error Logs & Diagnostics',
                'support.tutorials.title': 'Video Tutorials',
                'support.tutorials.subtitle': 'Learn by watching our step-by-step video guides',
                'support.tutorials.video1.title': 'Getting Started with BimE Tools',
                'support.tutorials.video1.description': 'Complete overview and installation walkthrough',
                'support.tutorials.video1.duration': '12 min',
                'support.tutorials.video2.title': 'Master Power Selection',
                'support.tutorials.video2.description': 'Advanced filtering and selection techniques',
                'support.tutorials.video2.duration': '8 min',
                'support.tutorials.video3.title': 'IFC PropertySet Magic',
                'support.tutorials.video3.description': 'Create custom PropertySets like a pro',
                'support.tutorials.video3.duration': '15 min',
                'support.tutorials.viewAll': 'View All Tutorials',
                'support.faq.title': 'Frequently Asked Questions',
                'support.faq.subtitle': 'Quick answers to common questions',
                'support.faq.general.title': 'General',
                'support.faq.general.q1.question': 'Are BimE Tools really free?',
                'support.faq.general.q1.answer': 'Yes! All BimE Tools are completely free to use. No trials, no limitations, no hidden costs. We believe great tools should be accessible to everyone in the BIM community.',
                'support.faq.general.q2.question': 'Which Revit versions are supported?',
                'support.faq.general.q2.answer': 'BimE Tools support Revit 2024 and later versions. We stay current with the latest Revit releases to ensure compatibility and take advantage of new features.',
                'support.faq.general.q3.question': 'Do I need administrator rights to install?',
                'support.faq.general.q3.answer': 'Yes, administrator rights are required for the initial installation. After that, the tools can be used by any user on the system.',
                'support.faq.technical.title': 'Technical',
                'support.faq.technical.q1.question': 'Why don\'t I see BimE Tools in my Revit ribbon?',
                'support.faq.technical.q1.answer': 'Make sure Revit is completely closed during installation. Check if the .addin file is in the correct folder (C:\\ProgramData\\Autodesk\\Revit\\Addins\\[Version]). Try running Revit as administrator.',
                'support.faq.technical.q2.question': 'Can I use BimE Tools on network licenses?',
                'support.faq.technical.q2.answer': 'Yes! BimE Tools work perfectly with both standalone and network licenses of Revit. The installation needs to be done on each workstation where you want to use the tools.',
                'support.faq.technical.q3.question': 'Are there any performance impacts?',
                'support.faq.technical.q3.answer': 'BimE Tools are designed to be lightweight and efficient. They only load when you use them and won\'t slow down your regular Revit workflow.',
                'support.contact.title': 'Get in Touch',
                'support.contact.subtitle': 'We\'re here to help you succeed with BimE Tools',
                'support.contact.bugs.title': 'Bug Reports',
                'support.contact.bugs.description': 'Found a bug? Help us improve BimE Tools by reporting issues you encounter.',
                'support.contact.bugs.email': 'bugs@bimenough.com',
                'support.contact.features.title': 'Feature Requests',
                'support.contact.features.description': 'Have an idea for a new feature? We\'d love to hear your suggestions!',
                'support.contact.features.email': 'features@bimenough.com',
                'support.contact.general.title': 'General Support',
                'support.contact.general.description': 'For general questions, support requests, or just to say hello, reach out to us:',
                'support.contact.general.email': 'support@bimenough.com',
                'support.donate.title': 'Support Our Work',
                'support.donate.subtitle': 'Help us keep improving BimE Tools and developing new features for the BIM community',
                'support.donate.reasons.title': 'Why Donate?',
                'support.donate.reasons.development.title': 'Faster Development',
                'support.donate.reasons.development.description': 'Your support helps us dedicate more time to developing new features and improvements.',
                'support.donate.reasons.maintenance.title': 'Better Maintenance',
                'support.donate.reasons.maintenance.description': 'Keep tools updated, fix bugs faster, and ensure compatibility with new Revit versions.',
                'support.donate.reasons.tools.title': 'More Tools',
                'support.donate.reasons.tools.description': 'Fund the development of new tools that the BIM community needs and wants.',
                'support.donate.message': 'Every contribution, no matter how small, makes a difference and is greatly appreciated!',
                'support.donate.paypal': 'Donate via PayPal',
                'support.donate.github': 'GitHub Sponsors',
                'support.donate.note': 'All donations are voluntary and help us maintain these free tools for the entire BIM community.',
                'support.community.title': 'Join Our Community',
                'support.community.subtitle': 'Connect with other BimE Tools users and stay updated',
                'support.community.linkedin.title': 'LinkedIn',
                'support.community.linkedin.description': 'Follow us for updates, tips, and BIM industry insights',
                'support.community.linkedin.cta': 'Follow Us',
                'support.community.github.title': 'GitHub',
                'support.community.github.description': 'Report issues, suggest features, and contribute to development',
                'support.community.github.cta': 'View Repository',
                'support.community.youtube.title': 'YouTube',
                'support.community.youtube.description': 'Watch tutorials, demos, and learn advanced techniques',
                'support.community.youtube.cta': 'Subscribe',

                // About Page
                'about.title': 'About BimEnough',
                'about.subtitle': 'Meet the small group of architects behind BimE Tools',
                'about.story.title': 'Our Story',
                'about.story.paragraph1': 'BimEnough started as a simple idea in a small architectural studio. We were a group of architects who were passionate about BIM and constantly frustrated by the repetitive, time-consuming tasks that interrupted our creative workflow. Hours spent on parameter management, IFC exports that never worked quite right, and endless manual selections that could easily be automated.',
                'about.story.paragraph2': 'So we did what architects do best – we designed a solution. We started developing our own tools to solve the problems we faced every day. What began as simple scripts for our own projects gradually evolved into a comprehensive suite of Revit plugins that transformed how we worked.',
                'about.story.paragraph3': 'The real magic happened when we realized these tools could help the entire BIM community. We\'ve all been there – working late nights trying to get parameters to behave, wrestling with IFC exports, or manually selecting hundreds of elements. Why should everyone suffer through the same problems when we had already solved them?',
                'about.story.paragraph4': 'That\'s when BimEnough was born. We decided to share our work with the community, making all our tools completely free because we believe great tools should be accessible to everyone, from small studios to large firms, from students to seasoned professionals.',
                'about.mission.title': 'Our Mission',
                'about.mission.subtitle': 'Why we do what we do',
                'about.mission.quality.title': 'Quality Tools for Everyone',
                'about.mission.quality.description': 'Create professional-grade tools that rival expensive commercial plugins, but keep them completely free for the entire BIM community.',
                'about.mission.simplicity.title': 'Simplicity in Complexity',
                'about.mission.simplicity.description': 'Take complex BIM processes and make them intuitive. If it takes more than a few clicks, we haven\'t done our job properly.',
                'about.mission.community.title': 'Community First',
                'about.mission.community.description': 'Listen to the community, solve real problems, and help architects and engineers focus on what they do best – designing amazing buildings.',
                'about.team.title': 'The Team Behind BimE Tools',
                'about.team.subtitle': 'Architects who understand your daily challenges',
                'about.team.description': 'We\'re a small but passionate group of architects and BIM specialists who have worked on projects ranging from residential homes to large commercial buildings. We understand the pressures of tight deadlines, complex coordination, and the need for efficient workflows because we live them every day.',
                'about.team.values.practical.title': 'Practical Experience',
                'about.team.values.practical.description': 'Every tool we create comes from real-world problems we\'ve encountered in our architectural practice. We don\'t just code – we use these tools daily.',
                'about.team.values.listening.title': 'Always Listening',
                'about.team.values.listening.description': 'The best ideas come from the community. We actively listen to feedback, feature requests, and problems that need solving.',
                'about.team.values.quality.title': 'Quality Over Quantity',
                'about.team.values.quality.description': 'We\'d rather create a few excellent tools than many mediocre ones. Each tool is crafted with care and tested thoroughly.',
                'about.team.values.free.title': 'Forever Free',
                'about.team.values.free.description': 'Our commitment to keeping BimE Tools free isn\'t just a marketing strategy – it\'s a core belief in democratizing access to great BIM tools.',
                'about.philosophy.title': 'Our Philosophy',
                'about.philosophy.paragraph1': 'We believe that good tools should feel invisible – they should make complex tasks simple and let you focus on design rather than software. When you\'re using a BimE Tool, you shouldn\'t think about the tool itself, just the result you want to achieve.',
                'about.philosophy.paragraph2': 'Technology should democratize capability, not create barriers. That\'s why every BimE Tool is free, well-documented, and designed to work the way architects and engineers naturally think. No complex licensing, no feature limitations, no expiration dates.',
                'about.philosophy.paragraph3': 'The BIM community is incredibly generous with knowledge sharing, and we want to contribute to that spirit. By sharing our tools freely, we hope to inspire others to share their solutions too, creating a cycle of innovation that benefits everyone.',
                'about.journey.title': 'The Journey Continues',
                'about.journey.subtitle': 'What\'s next for BimE Tools',
                'about.journey.present.title': 'Where We Are Today',
                'about.journey.present.description': 'BimE Tools are used by thousands of architects and engineers worldwide. Our six core modules solve the most common BIM workflow challenges, from parameter management to IFC exports to advanced element selection.',
                'about.journey.future.title': 'Looking Forward',
                'about.journey.future.description': 'We\'re constantly working on new tools and improvements. IDS support, enhanced automation features, and tools for emerging BIM standards are all in development. The roadmap is driven by community needs.',
                'about.journey.commitment.title': 'Our Commitment',
                'about.journey.commitment.description': 'As long as there are architects and engineers struggling with BIM workflows, we\'ll be here creating tools to help. BimE Tools will always be free, always be community-driven, and always be designed by practitioners for practitioners.',
                'about.journey.commitment.download': 'Try BimE Tools Today',
                'about.journey.commitment.contact': 'Get in Touch',
                'about.thanks.title': 'Thank You',
                'about.thanks.message': 'To everyone who uses BimE Tools, provides feedback, reports bugs, suggests features, or simply spreads the word – thank you. This project exists because of the amazing BIM community, and we\'re honored to be a small part of it.',
                'about.thanks.signature': '– The BimEnough Team',
                'about.thanks.support': 'Support Our Work',
                'about.thanks.connect': 'Connect With Us',

                // Footer
                'footer.description': 'Professional Revit plugins for smart BIM workflows. Enhance your productivity with our comprehensive toolkit.',
                'footer.tools': 'Tools',
                'footer.resources': 'Resources',
                'footer.connect': 'Connect',
                'footer.legal': 'Legal',
                'footer.documentation': 'Documentation',
                'footer.videoTutorials': 'Video Tutorials',
                'footer.faq': 'FAQ',
                'footer.support': 'Support',
                'footer.privacyPolicy': 'Privacy Policy',
                'footer.termsOfService': 'Terms of Service',
                'footer.cookiePolicy': 'Cookie Policy',
                'footer.copyright': '© 2024 BimEnough. All rights reserved.',
                'footer.madeWith': 'Made with ❤️ for the BIM community'
            },

            it: {
                // Navigation
                'nav.home': 'Home',
                'nav.features': 'Caratteristiche',
                'nav.tools': 'Strumenti',
                'nav.download': 'Download',
                'nav.support': 'Supporto',
                'nav.about': 'Chi Siamo',
                'nav.downloadFree': 'Download Gratuito',
                'nav.parameterTools': 'Strumenti Parametri',
                'nav.ifcTools': 'Strumenti IFC',
                'nav.utilityTools': 'Strumenti Utilità',
                'nav.elementTools': 'Strumenti Elementi',
                'nav.idTools': 'Strumenti ID',
                'nav.viewsheetTools': 'Strumenti Tavole e Viste',

                // Cookie Consent
                'cookie.message': 'Utilizziamo cookie essenziali per assicurare il corretto funzionamento del nostro sito web.',
                'cookie.accept': 'Accetta',
                'cookie.settings': 'Impostazioni',

                // Parameter Tools Page
                'parameterTools.title': 'Strumenti Parametri',
                'parameterTools.subtitle': 'Prendi il controllo dei tuoi parametri Revit come mai prima',
                'parameterTools.description': 'Stanco di lottare con i parametri condivisi e i parametri di progetto in Revit? I nostri Strumenti Parametri rendono facile creare, gestire e organizzare tutti i tuoi parametri in un unico posto. Inoltre, con l\'integrazione Excel, puoi finalmente lavorare come vuoi tu.',
                'parameterTools.getToolsFree': 'Ottieni Strumenti Parametri Gratis',
                'parameterTools.seeWhatItCanDo': 'Scopri Cosa Può Fare',

                // Parameter Tools Features
                'parameterTools.whyLove': 'Perché Amerai gli Strumenti Parametri',
                'parameterTools.whyLoveSubtitle': 'Smetti di combattere con il sistema parametri di Revit. Inizia a divertirti.',
                
                'parameterTools.feature1.title': 'Parametri Condivisi Semplificati',
                'parameterTools.feature1.description': 'Crea, modifica e organizza parametri condivisi senza mal di testa. Interfaccia visuale, organizzazione drag-and-drop e validazione istantanea. Finalmente, parametri condivisi che hanno senso!',
                
                'parameterTools.feature2.title': 'Controllo Parametri di Progetto',
                'parameterTools.feature2.description': 'Vedi tutti i tuoi parametri di progetto in un unico posto. Aggiungi nuovi, modifica quelli esistenti e gestisci le categorie come un professionista. Basta cercare tra le finestre di dialogo!',
                
                'parameterTools.feature3.title': 'Integrazione Excel che Funziona Davvero',
                'parameterTools.feature3.description': 'Esporta i tuoi parametri in Excel, apporta modifiche e importali di nuovo. Perfetto per modifiche di massa, revisioni clienti o lavoro con consulenti. È come la magia, ma meglio!',
                
                'parameterTools.feature4.title': 'Import/Export Abachi',
                'parameterTools.feature4.description': 'Esporta abachi in Excel per revisioni clienti o analisi esterne. Importa dati aggiornati di nuovo in Revit senza problemi. Perfetto per computi metrici e coordinamento.',
                
                'parameterTools.feature5.title': 'Validazione e Controllo Errori',
                'parameterTools.feature5.description': 'Intercetta conflitti di parametri ed errori prima che diventino problemi. La validazione intelligente assicura che i tuoi parametri siano configurati correttamente ogni volta.',
                
                'parameterTools.feature6.title': 'Operazioni in Batch',
                'parameterTools.feature6.description': 'Devi aggiornare 50 parametri contemporaneamente? Nessun problema! Le operazioni in blocco ti permettono di apportare modifiche su più parametri in secondi, non ore.',

                // How It Works
                'howItWorks.title': 'Guarda in Azione',
                'howItWorks.subtitle': 'Dal caos all\'organizzazione in pochi minuti',
                'howItWorks.step1.title': 'Apri Strumenti Parametri',
                'howItWorks.step1.description': 'Avvia dalla barra multifunzione BimE Tools. Vedi tutti i tuoi parametri organizzati in un\'interfaccia pulita.',
                'howItWorks.step2.title': 'Modifica e Organizza',
                'howItWorks.step2.description': 'Crea nuovi parametri, organizzali in gruppi e configura le categorie. Il drag-and-drop visuale lo rende intuitivo.',
                'howItWorks.step3.title': 'Esporta in Excel',
                'howItWorks.step3.description': 'Devi condividere con il tuo team o fare modifiche di massa? Esporta in Excel con un clic.',
                'howItWorks.step4.title': 'Importa di Nuovo',
                'howItWorks.step4.description': 'Hai fatto modifiche in Excel? Importale di nuovo in Revit senza problemi. Perfetto per la collaborazione!',

                // CTA
                'cta.readyToMaster': 'Pronto a Padroneggiare i Tuoi Parametri?',
                'cta.joinThousands': 'Unisciti a migliaia di utenti Revit che hanno scoperto la gioia dei parametri organizzati',
                'cta.downloadBimEToolsFree': 'Scarica BimE Tools Gratis',
                'cta.getSupport': 'Ottieni Supporto',
                'cta.features': '✓ Gratis per sempre ✓ Nessuna registrazione richiesta ✓ Funziona con Revit 2024+',

                // Support Page
                'support.title': 'Supporto e Risorse',
                'support.subtitle': 'Ottieni l\'aiuto di cui hai bisogno per padroneggiare BimE Tools e potenziare il tuo flusso di lavoro Revit',
                'support.quickHelp.documentation.title': 'Documentazione',
                'support.quickHelp.documentation.description': 'Guide complete e tutorial per ogni strumento BimE',
                'support.quickHelp.documentation.cta': 'Leggi la Documentazione',
                'support.quickHelp.contact.title': 'Ricevi Aiuto',
                'support.quickHelp.contact.description': 'Hai domande? Hai bisogno di assistenza? Siamo qui per aiutarti!',
                'support.quickHelp.contact.cta': 'Contattaci',
                'support.quickHelp.contribute.title': 'Supportaci',
                'support.quickHelp.contribute.description': 'Ti piacciono i nostri strumenti? Aiutaci a continuare a migliorarli e sviluppare nuove funzionalità!',
                'support.quickHelp.contribute.cta': 'Dona',
                'support.documentation.title': 'Documentazione e Guide',
                'support.documentation.subtitle': 'Tutto quello che ti serve per diventare un esperto di BimE Tools',
                'support.documentation.gettingStarted.title': 'Primi Passi',
                'support.documentation.gettingStarted.installation': 'Guida all\'Installazione',
                'support.documentation.gettingStarted.quickStart': 'Tutorial di Avvio Rapido',
                'support.documentation.gettingStarted.licensing': 'Licenze e Attivazione',
                'support.documentation.gettingStarted.systemRequirements': 'Requisiti di Sistema',
                'support.documentation.toolGuides.title': 'Guide agli Strumenti',
                'support.documentation.advanced.title': 'Argomenti Avanzati',
                'support.documentation.advanced.automation': 'Automazione del Flusso di Lavoro',
                'support.documentation.advanced.customization': 'Opzioni di Personalizzazione',
                'support.documentation.advanced.integration': 'Integrazione con Altri Strumenti',
                'support.documentation.advanced.bestPractices': 'Migliori Pratiche',
                'support.documentation.troubleshooting.title': 'Risoluzione Problemi',
                'support.documentation.troubleshooting.common': 'Problemi Comuni',
                'support.documentation.troubleshooting.performance': 'Ottimizzazione delle Prestazioni',
                'support.documentation.troubleshooting.compatibility': 'Compatibilità Revit',
                'support.documentation.troubleshooting.logs': 'Log di Errore e Diagnostica',
                'support.tutorials.title': 'Video Tutorial',
                'support.tutorials.subtitle': 'Impara guardando le nostre guide video passo dopo passo',
                'support.tutorials.video1.title': 'Iniziare con BimE Tools',
                'support.tutorials.video1.description': 'Panoramica completa e guida all\'installazione',
                'support.tutorials.video1.duration': '12 min',
                'support.tutorials.video2.title': 'Padroneggiare Power Selection',
                'support.tutorials.video2.description': 'Tecniche avanzate di filtro e selezione',
                'support.tutorials.video2.duration': '8 min',
                'support.tutorials.video3.title': 'Magia dei PropertySet IFC',
                'support.tutorials.video3.description': 'Crea PropertySet personalizzati come un professionista',
                'support.tutorials.video3.duration': '15 min',
                'support.tutorials.viewAll': 'Visualizza Tutti i Tutorial',
                'support.faq.title': 'Domande Frequenti',
                'support.faq.subtitle': 'Risposte rapide alle domande più comuni',
                'support.faq.general.title': 'Generale',
                'support.faq.general.q1.question': 'BimE Tools sono davvero gratuiti?',
                'support.faq.general.q1.answer': 'Sì! Tutti i BimE Tools sono completamente gratuiti. Nessuna prova, nessuna limitazione, nessun costo nascosto. Crediamo che strumenti eccellenti debbano essere accessibili a tutti nella comunità BIM.',
                'support.faq.general.q2.question': 'Quali versioni di Revit sono supportate?',
                'support.faq.general.q2.answer': 'BimE Tools supportano Revit 2024 e versioni successive. Rimaniamo aggiornati con le ultime versioni di Revit per garantire compatibilità e sfruttare le nuove funzionalità.',
                'support.faq.general.q3.question': 'Servono diritti di amministratore per l\'installazione?',
                'support.faq.general.q3.answer': 'Sì, i diritti di amministratore sono necessari per l\'installazione iniziale. Dopo di che, gli strumenti possono essere utilizzati da qualsiasi utente del sistema.',
                'support.faq.technical.title': 'Tecnico',
                'support.faq.technical.q1.question': 'Perché non vedo BimE Tools nella mia barra multifunzione di Revit?',
                'support.faq.technical.q1.answer': 'Assicurati che Revit sia completamente chiuso durante l\'installazione. Verifica che il file .addin sia nella cartella corretta (C:\\ProgramData\\Autodesk\\Revit\\Addins\\[Versione]). Prova ad avviare Revit come amministratore.',
                'support.faq.technical.q2.question': 'Posso usare BimE Tools con licenze di rete?',
                'support.faq.technical.q2.answer': 'Sì! BimE Tools funzionano perfettamente sia con licenze standalone che di rete di Revit. L\'installazione deve essere fatta su ogni workstation dove vuoi usare gli strumenti.',
                'support.faq.technical.q3.question': 'Ci sono impatti sulle prestazioni?',
                'support.faq.technical.q3.answer': 'BimE Tools sono progettati per essere leggeri ed efficienti. Si caricano solo quando li usi e non rallenteranno il tuo normale flusso di lavoro Revit.',
                'support.contact.title': 'Mettiti in Contatto',
                'support.contact.subtitle': 'Siamo qui per aiutarti a riuscire con BimE Tools',
                'support.contact.bugs.title': 'Segnalazioni Bug',
                'support.contact.bugs.description': 'Hai trovato un bug? Aiutaci a migliorare BimE Tools segnalando i problemi che incontri.',
                'support.contact.bugs.email': 'bugs@bimenough.com',
                'support.contact.features.title': 'Richieste Funzionalità',
                'support.contact.features.description': 'Hai un\'idea per una nuova funzionalità? Ci piacerebbe sentire i tuoi suggerimenti!',
                'support.contact.features.email': 'features@bimenough.com',
                'support.contact.general.title': 'Supporto Generale',
                'support.contact.general.description': 'Per domande generali, richieste di supporto, o semplicemente per salutare, scrivici:',
                'support.contact.general.email': 'support@bimenough.com',
                'support.donate.title': 'Supporta il Nostro Lavoro',
                'support.donate.subtitle': 'Aiutaci a continuare a migliorare BimE Tools e sviluppare nuove funzionalità per la comunità BIM',
                'support.donate.reasons.title': 'Perché Donare?',
                'support.donate.reasons.development.title': 'Sviluppo Più Veloce',
                'support.donate.reasons.development.description': 'Il tuo supporto ci aiuta a dedicare più tempo allo sviluppo di nuove funzionalità e miglioramenti.',
                'support.donate.reasons.maintenance.title': 'Manutenzione Migliore',
                'support.donate.reasons.maintenance.description': 'Mantieni gli strumenti aggiornati, correggi bug più velocemente e assicura compatibilità con nuove versioni di Revit.',
                'support.donate.reasons.tools.title': 'Più Strumenti',
                'support.donate.reasons.tools.description': 'Finanzia lo sviluppo di nuovi strumenti di cui la comunità BIM ha bisogno e desidera.',
                'support.donate.message': 'Ogni contributo, non importa quanto piccolo, fa la differenza ed è molto apprezzato!',
                'support.donate.paypal': 'Dona tramite PayPal',
                'support.donate.github': 'GitHub Sponsors',
                'support.donate.note': 'Tutte le donazioni sono volontarie e ci aiutano a mantenere questi strumenti gratuiti per tutta la comunità BIM.',
                'support.community.title': 'Unisciti alla Nostra Comunità',
                'support.community.subtitle': 'Connettiti con altri utenti di BimE Tools e rimani aggiornato',
                'support.community.linkedin.title': 'LinkedIn',
                'support.community.linkedin.description': 'Seguici per aggiornamenti, consigli e approfondimenti del settore BIM',
                'support.community.linkedin.cta': 'Seguici',
                'support.community.github.title': 'GitHub',
                'support.community.github.description': 'Segnala problemi, suggerisci funzionalità e contribuisci allo sviluppo',
                'support.community.github.cta': 'Visualizza Repository',
                'support.community.youtube.title': 'YouTube',
                'support.community.youtube.description': 'Guarda tutorial, demo e impara tecniche avanzate',
                'support.community.youtube.cta': 'Iscriviti',

                // About Page
                'about.title': 'Chi è BimEnough',
                'about.subtitle': 'Incontra il piccolo gruppo di architetti dietro BimE Tools',
                'about.story.title': 'La Nostra Storia',
                'about.story.paragraph1': 'BimEnough è iniziato come una semplice idea in un piccolo studio di architettura. Eravamo un gruppo di architetti appassionati di BIM e costantemente frustrati dai compiti ripetitivi e dispendiosi di tempo che interrompevano il nostro flusso di lavoro creativo. Ore spese nella gestione dei parametri, esportazioni IFC che non funzionavano mai correttamente, e infinite selezioni manuali che potevano essere facilmente automatizzate.',
                'about.story.paragraph2': 'Così abbiamo fatto quello che gli architetti sanno fare meglio – abbiamo progettato una soluzione. Abbiamo iniziato a sviluppare i nostri strumenti per risolvere i problemi che affrontavamo ogni giorno. Quello che iniziò come semplici script per i nostri progetti si trasformò gradualmente in una suite completa di plugin per Revit che trasformò il nostro modo di lavorare.',
                'about.story.paragraph3': 'La vera magia è accaduta quando ci siamo resi conto che questi strumenti potevano aiutare l\'intera comunità BIM. Ci siamo passati tutti – lavorare fino a tardi cercando di far comportare i parametri, lottare con le esportazioni IFC, o selezionare manualmente centinaia di elementi. Perché tutti dovrebbero soffrire gli stessi problemi quando li avevamo già risolti?',
                'about.story.paragraph4': 'È così che è nato BimEnough. Abbiamo deciso di condividere il nostro lavoro con la comunità, rendendo tutti i nostri strumenti completamente gratuiti perché crediamo che strumenti eccellenti debbano essere accessibili a tutti, dai piccoli studi alle grandi aziende, dagli studenti ai professionisti esperti.',
                'about.mission.title': 'La Nostra Missione',
                'about.mission.subtitle': 'Perché facciamo quello che facciamo',
                'about.mission.quality.title': 'Strumenti di Qualità per Tutti',
                'about.mission.quality.description': 'Creare strumenti di livello professionale che competono con plugin commerciali costosi, ma mantenerli completamente gratuiti per tutta la comunità BIM.',
                'about.mission.simplicity.title': 'Semplicità nella Complessità',
                'about.mission.simplicity.description': 'Prendere processi BIM complessi e renderli intuitivi. Se ci vogliono più di qualche clic, non abbiamo fatto bene il nostro lavoro.',
                'about.mission.community.title': 'La Comunità Prima di Tutto',
                'about.mission.community.description': 'Ascoltare la comunità, risolvere problemi reali, e aiutare architetti e ingegneri a concentrarsi su quello che sanno fare meglio – progettare edifici straordinari.',
                'about.team.title': 'Il Team Dietro BimE Tools',
                'about.team.subtitle': 'Architetti che capiscono le tue sfide quotidiane',
                'about.team.description': 'Siamo un piccolo ma appassionato gruppo di architetti e specialisti BIM che hanno lavorato su progetti che vanno dalle case residenziali ai grandi edifici commerciali. Capiamo le pressioni delle scadenze strette, il coordinamento complesso, e il bisogno di flussi di lavoro efficienti perché li viviamo ogni giorno.',
                'about.team.values.practical.title': 'Esperienza Pratica',
                'about.team.values.practical.description': 'Ogni strumento che creiamo deriva da problemi del mondo reale che abbiamo incontrato nella nostra pratica architettonica. Non scriviamo solo codice – usiamo questi strumenti quotidianamente.',
                'about.team.values.listening.title': 'Sempre in Ascolto',
                'about.team.values.listening.description': 'Le migliori idee vengono dalla comunità. Ascoltiamo attivamente feedback, richieste di funzionalità e problemi che hanno bisogno di essere risolti.',
                'about.team.values.quality.title': 'Qualità Oltre Quantità',
                'about.team.values.quality.description': 'Preferiamo creare pochi strumenti eccellenti piuttosto che molti mediocri. Ogni strumento è realizzato con cura e testato accuratamente.',
                'about.team.values.free.title': 'Gratuito per Sempre',
                'about.team.values.free.description': 'Il nostro impegno a mantenere BimE Tools gratuiti non è solo una strategia di marketing – è una convinzione fondamentale nel democratizzare l\'accesso a strumenti BIM eccellenti.',
                'about.philosophy.title': 'La Nostra Filosofia',
                'about.philosophy.paragraph1': 'Crediamo che i buoni strumenti debbano sembrare invisibili – dovrebbero rendere semplici i compiti complessi e permetterti di concentrarti sul design piuttosto che sul software. Quando usi un BimE Tool, non dovresti pensare allo strumento stesso, solo al risultato che vuoi ottenere.',
                'about.philosophy.paragraph2': 'La tecnologia dovrebbe democratizzare le capacità, non creare barriere. Ecco perché ogni BimE Tool è gratuito, ben documentato, e progettato per funzionare nel modo in cui architetti e ingegneri pensano naturalmente. Nessuna licenza complessa, nessuna limitazione di funzionalità, nessuna data di scadenza.',
                'about.philosophy.paragraph3': 'La comunità BIM è incredibilmente generosa nella condivisione della conoscenza, e vogliamo contribuire a quello spirito. Condividendo liberamente i nostri strumenti, speriamo di ispirare altri a condividere le loro soluzioni, creando un ciclo di innovazione che beneficia tutti.',
                'about.journey.title': 'Il Viaggio Continua',
                'about.journey.subtitle': 'Cosa c\'è nel futuro per BimE Tools',
                'about.journey.present.title': 'Dove Siamo Oggi',
                'about.journey.present.description': 'BimE Tools sono usati da migliaia di architetti e ingegneri in tutto il mondo. I nostri sei moduli principali risolvono le sfide più comuni del flusso di lavoro BIM, dalla gestione dei parametri alle esportazioni IFC alla selezione avanzata di elementi.',
                'about.journey.future.title': 'Guardando Avanti',
                'about.journey.future.description': 'Lavoriamo costantemente su nuovi strumenti e miglioramenti. Il supporto IDS, funzionalità di automazione migliorate, e strumenti per standard BIM emergenti sono tutti in sviluppo. La roadmap è guidata dalle esigenze della comunità.',
                'about.journey.commitment.title': 'Il Nostro Impegno',
                'about.journey.commitment.description': 'Finché ci saranno architetti e ingegneri che lottano con i flussi di lavoro BIM, saremo qui a creare strumenti per aiutare. BimE Tools saranno sempre gratuiti, sempre guidati dalla comunità, e sempre progettati da professionisti per professionisti.',
                'about.journey.commitment.download': 'Prova BimE Tools Oggi',
                'about.journey.commitment.contact': 'Mettiti in Contatto',
                'about.thanks.title': 'Grazie',
                'about.thanks.message': 'A tutti quelli che usano BimE Tools, forniscono feedback, segnalano bug, suggeriscono funzionalità, o semplicemente diffondono la parola – grazie. Questo progetto esiste grazie all\'incredibile comunità BIM, e siamo onorati di esserne una piccola parte.',
                'about.thanks.signature': '– Il Team BimEnough',
                'about.thanks.support': 'Supporta il Nostro Lavoro',
                'about.thanks.connect': 'Connettiti con Noi',

                // Footer
                'footer.description': 'Plugin professionali per Revit per flussi di lavoro BIM intelligenti. Migliora la tua produttività con il nostro toolkit completo.',
                'footer.tools': 'Strumenti',
                'footer.resources': 'Risorse',
                'footer.connect': 'Connettiti',
                'footer.legal': 'Legale',
                'footer.documentation': 'Documentazione',
                'footer.videoTutorials': 'Video Tutorial',
                'footer.faq': 'FAQ',
                'footer.support': 'Supporto',
                'footer.privacyPolicy': 'Privacy Policy',
                'footer.termsOfService': 'Termini di Servizio',
                'footer.cookiePolicy': 'Cookie Policy',
                'footer.copyright': '© 2024 BimEnough. Tutti i diritti riservati.',
                'footer.madeWith': 'Realizzato con ❤️ per la comunità BIM'
            }
        },

        // Initialize localization
        init() {
            this.loadSavedLanguage();
            this.bindEvents();
            this.updateLanguageToggle();
            this.translatePage();
        },

        // Load saved language from localStorage
        loadSavedLanguage() {
            try {
                const saved = localStorage.getItem(this.config.storageKey);
                if (saved && this.config.supportedLanguages.includes(saved)) {
                    this.currentLanguage = saved;
                } else {
                    // Detect browser language
                    const browserLang = navigator.language.split('-')[0];
                    if (this.config.supportedLanguages.includes(browserLang)) {
                        this.currentLanguage = browserLang;
                    }
                }
            } catch (error) {
                console.warn('Error loading saved language:', error);
            }
        },

        // Save language to localStorage
        saveLanguage() {
            try {
                localStorage.setItem(this.config.storageKey, this.currentLanguage);
            } catch (error) {
                console.warn('Error saving language:', error);
            }
        },

        // Bind event listeners
        bindEvents() {
            const langToggle = document.getElementById('lang-toggle');
            if (langToggle) {
                langToggle.addEventListener('click', this.toggleLanguage.bind(this));
            }
        },

        // Toggle between languages
        toggleLanguage() {
            this.currentLanguage = this.currentLanguage === 'en' ? 'it' : 'en';
            this.saveLanguage();
            this.updateLanguageToggle();
            this.translatePage();
            
            // Dispatch language change event
            document.dispatchEvent(new CustomEvent('languageChange', {
                detail: { language: this.currentLanguage }
            }));
        },

        // Update language toggle button
        updateLanguageToggle() {
            const langToggle = document.getElementById('lang-toggle');
            if (langToggle) {
                if (this.currentLanguage === 'en') {
                    langToggle.innerHTML = '🇬🇧 EN';
                    langToggle.setAttribute('title', 'Switch to Italian');
                } else {
                    langToggle.innerHTML = '🇮🇹 IT';
                    langToggle.setAttribute('title', 'Passa all\'inglese');
                }
            }
        },

        // Translate the entire page
        translatePage() {
            // Update document language
            document.documentElement.lang = this.currentLanguage;

            // Translate elements with data-i18n attribute
            const elements = document.querySelectorAll(`[${this.config.attribute}]`);
            elements.forEach(element => {
                const key = element.getAttribute(this.config.attribute);
                const translation = this.getTranslation(key);
                
                if (translation) {
                    if (element.tagName === 'INPUT' && element.type === 'submit') {
                        element.value = translation;
                    } else if (element.hasAttribute('placeholder')) {
                        element.setAttribute('placeholder', translation);
                    } else if (element.hasAttribute('title')) {
                        element.setAttribute('title', translation);
                    } else {
                        element.textContent = translation;
                    }
                }
            });

            // Update page title if available
            const titleKey = document.querySelector('meta[name="title-key"]');
            if (titleKey) {
                const key = titleKey.getAttribute('content');
                const translation = this.getTranslation(key);
                if (translation) {
                    document.title = translation;
                }
            }

            // Update meta description if available
            const descKey = document.querySelector('meta[name="description-key"]');
            if (descKey) {
                const key = descKey.getAttribute('content');
                const translation = this.getTranslation(key);
                if (translation) {
                    const metaDesc = document.querySelector('meta[name="description"]');
                    if (metaDesc) {
                        metaDesc.setAttribute('content', translation);
                    }
                }
            }
        },

        // Get translation for a key
        getTranslation(key) {
            const translations = this.translations[this.currentLanguage];
            return translations && translations[key] ? translations[key] : null;
        },

        // Add translation
        addTranslation(language, key, value) {
            if (!this.translations[language]) {
                this.translations[language] = {};
            }
            this.translations[language][key] = value;
        },

        // Add multiple translations
        addTranslations(language, translations) {
            if (!this.translations[language]) {
                this.translations[language] = {};
            }
            Object.assign(this.translations[language], translations);
        },

        // Get current language
        getCurrentLanguage() {
            return this.currentLanguage;
        },

        // Set language
        setLanguage(language) {
            if (this.config.supportedLanguages.includes(language)) {
                this.currentLanguage = language;
                this.saveLanguage();
                this.updateLanguageToggle();
                this.translatePage();
                return true;
            }
            return false;
        },

        // Check if language is supported
        isLanguageSupported(language) {
            return this.config.supportedLanguages.includes(language);
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            Localization.init();
        });
    } else {
        Localization.init();
    }

    // Expose API to global scope
    window.Localization = {
        getCurrentLanguage: Localization.getCurrentLanguage.bind(Localization),
        setLanguage: Localization.setLanguage.bind(Localization),
        getTranslation: Localization.getTranslation.bind(Localization),
        addTranslation: Localization.addTranslation.bind(Localization),
        addTranslations: Localization.addTranslations.bind(Localization),
        isLanguageSupported: Localization.isLanguageSupported.bind(Localization),
        translatePage: Localization.translatePage.bind(Localization)
    };

})();