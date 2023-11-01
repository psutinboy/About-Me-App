import { Observable } from '@nativescript/core/data/observable';
const frameModule = require('@nativescript/core/ui/frame');

const skillsData = [
  { name: 'CompTIA A+', description: 'Description for Skill 1' },
  { name: 'CompTIA Network+', description: 'Description for Skill 2' },
  { name: 'CompTIA Server', description: 'Description for Skill 3' },
  { name: 'CompTIA Security+', description: 'Description for Skill 4' },
  { name: 'Web Development', description: 'Description for Skill 5' },
  { name: 'Mobile App Development', description: 'Description for Skill 6' },
  { name: 'Programming', description: 'Description for Skill 7' },
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
