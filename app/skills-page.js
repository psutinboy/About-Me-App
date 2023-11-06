import { Observable } from '@nativescript/core/data/observable';
const frameModule = require('@nativescript/core/ui/frame');

const skillsData = [
  { name: 'CompTIA A+', description: 'I have my Certification for A+.' },
  { name: 'CompTIA Network+', description: 'I have not gotten my certification for Network+ yet but I have all of the knowledge.' },
  { name: 'CompTIA Server', description: 'I have not gotten my certification for Server yet but I have all of the knowledge.' },
  { name: 'CompTIA Security+', description: 'I have not gotten my certification for Security+ yet but I have all of the knowledge.' },
  { name: 'Web Development', description: 'I have basic skills in HTML, CSS, and JavaScript.' },
  { name: 'Mobile App Development', description: 'I have skills in NaiveScript, Tailwind, XML, JavaScript, and CSS.' },
  { name: 'Programming', description: 'I have skills in multiple programming languages including Python, JavaScript, HTML, CSS, XML, and Java.' },
];

const viewModel = new Observable({
    skills: skillsData,
});

export function pageLoaded(args) {
  const page = args.object;
  viewModel.set('skills', skillsData); // Set the skills array directly
  page.bindingContext = viewModel;
}

export function goBackToHome(args) {
    const page = args.object.page;
    frameModule.Frame.topmost().navigate('main-page');
}

export function navigateToNext(args) {
    const page = args.object.page;
    frameModule.Frame.topmost().navigate('contact-page');
}

export function goBack(args) {
    frameModule.Frame.topmost().goBack();
}

export function onSkillTap(args) {
    const skill = viewModel.get('skills')[args.index];
    const navigationOptions = {
        moduleName: 'skill-details-page',
        context: { skill },
    };
    frameModule.Frame.topmost().navigate(navigationOptions);
}
