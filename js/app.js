angular.module('portfolio', ['ngRoute', 'portfolioControllers'])
    .config(function($routeProvider) {
        'use strict';

        $routeProvider.when('/', {
            controller: 'HomeCtrl',
            templateUrl: 'templates/home.html'
        }).when('/work', {
            controller: 'WorkCtrl',
            templateUrl: 'templates/work.html'
        }).when('/work/:skill', {
            controller: 'WorkCtrl',
            templateUrl: 'templates/work.html'
        }).when('/contact', {
            templateUrl: 'templates/contact.html'
        }).otherwise({
            redirectTo: '/'
        });

    }).constant('skills', [
        {
            key: 'javascript',
            name: 'JavaScript'
        },
        {
            key: 'backbone',
            name: 'Backbone'
        },
        {
            key: 'marionette',
            name: 'Marionette'
        },
        {
            key: 'angular',
            name: 'Angular'
        },
        {
            key: 'jasmine',
            name: 'Jasmine'
        },
        {
            key: 'requirejs',
            name: 'RequireJS'
        },
        {
            key: 'sass',
            name: 'SASS'
        },
        {
            key: 'css3',
            name: 'CSS3'
        },
        {
            key: 'html5',
            name: 'HTML5'
        }
    ]).constant('projects', [
        {
            companyName: 'PeerIndex',
            projectName: 'PiQ',
            position: 'Lead Front End Developer (Contract)',
            projectLink: 'http://piq.peerindex.com',
            description: [
                "Architected and developed a new single page web application built using Marionette, working with the team to consume REST API's and implement OAuth authentication.",
                "Took architectual decisions based on upcoming product vision, ease of maintaining and readability. Spread knowledge of Backbone/ Marionette to other interested team members, which resulted in additional features being delivered with minimal reviewing necessary.",
                "Integrated with Jenkins for continuous integration, automatic linting, running unit tests through Karma/ Jasmine/ PhantomJS and building a minified deployable with RequireJS."
            ],
            dates: '2014',
            skills: ['javascript', 'backbone', 'marionette', 'jasmine', 'requirejs', 'sass']
        },
        {
            companyName: 'Hogarth',
            projectName: 'FIDO',
            position: 'Senior Front End Developer',
            projectLink: 'http://vimeo.com/89291675',
            description: [
                "Working on a highly configurable digital asset workflow management platform for corporate clients. Utilising a Backbone front-end to complement the configurable nature of the platform, with some smart server/client side rendering techniques to ensure performance and experience is optimal.",
                "Refactored the front-end build system to include JSHint and QUnit tests/ coverage. Advised an offshore team as to the architecture that should be used going forward and which parts of the codebase were in most need of refactoring to support maintainability and readibility moving forward."
            ],
            dates: '2014',
            skills: ['javascript', 'backbone', 'requirejs', 'sass']
        },
        {
            companyName: 'Gamesys',
            projectName: 'Virgin Poker',
            position: 'Senior Front End Developer',
            projectLink: 'https://apps.facebook.com/virginpoker/',
            description: [
                "Working on the lobby of Virgin Poker (currently live as a freemium product on Facebook), using a TDD approach with Backbone/ RequireJS/ Grunt/ SASS in a fast paced agile environment, where performance and efficiency of code across multi-device is essential.",
                "The poker platform UI has been developed in a way where different builds (using strategies) contain slightly different functionality (without polluting the deployed codebase) for different ventures (e.g. Cash and iOS)",
                "Mentored junior developers with coding standards and performing code reviews to ensure level of code quality is kept to an acceptable standard."
            ],
            dates: '2012 - 2014',
            skills: ['javascript', 'backbone', 'jasmine', 'requirejs', 'sass', 'css3', 'html5']
        },
        {
            companyName: 'Gamesys',
            projectName: 'E-Learning Lesson Viewer',
            position: 'Senior Front End Developer',
            projectLink: 'https://apps.facebook.com/virginpoker/',
            description: [
                "Co-created a Backbone/ Marionette e-learning lesson viewer, which is used as part of the Virgin Poker Academy. This contained an extensible plugin system (which includes a video player and drag and drop functionality) and simple to use build functionality that would package a lesson into a self- contained SCORM compatible package."
            ],
            dates: '2012 - 2014',
            skills: ['javascript', 'backbone', 'marionette', 'requirejs', 'sass', 'css3', 'html5']
        },
        {
            companyName: 'Detica',
            projectName: 'Sony Playstation',
            position: 'Senior Consultant',
            projectLink: 'http://uk.playstation.com/',
            description: [
                "Front end team lead in creating a prototype (and has now become the scaffolding of) a new CMS driven portal, using various CSS3 and responsive design techniques."
            ],
            dates: '2012',
            skills: ['sass', 'css3', 'html5']
        },
        {
            companyName: 'Detica',
            projectName: 'TFL',
            position: 'Senior Consultant',
            projectLink: 'http://londonist.com/2012/01/get-ahead-of-the-games-new-transport-website-launched.php',
            description: [
                "Front end team lead and architect to create a solution which would display to residents the proposed restrictions on London roads during the Olympics. Large datasets were provided for the restrictions which are active across a variety of dates. These datasets were pre-processed into either KML or GeoJSON (dependent on size) and pulled into a Google Maps solution. An accessible version using purely text data was also created."
            ],
            dates: '2011 - 2012',
            skills: ['javascript']
        },
        {
            companyName: 'Detica',
            projectName: 'Three.co.uk',
            position: 'Senior Consultant',
            projectLink: 'http://www.three.co.uk/',
            description: [
                "This project involved combining a large redesign (much of which still remains) with developing new pieces of functionality (e.g. internal search) integrating with a CMS (FatWire) which allowed Three content editors to manage and develop new pages with ease. Given the commercial nature of this site, SEO and Web Analytics were of high importance - the analytics tags for Adobe Omniture, Adobe SiteSearch and Open Graph metadata tags are automatically generated based off certain criteria set in the CMS."
            ],
            dates: '2008 - 2011',
            skills: ['javascript', 'css3', 'html5']
        },
        {
            companyName: 'NHS Hack Day',
            projectName: 'Procedure Consent Library',
            position: 'Front End Developer',
            projectLink: 'http://www.procl.org',
            description: [
                "A 2 day hack day which involved designing and developing a solution that assists doctors with gathering information to populate on patient procedure consent forms",
                "Angular was used in conjunction with a REST set of endpoints for the final product which achieved first prize."
            ],
            dates: '2014',
            skills: ['javascript', 'angular', 'css3', 'html5']
        }
    ]);