import { createViewModel } from './main-view-model';
const frameModule = require('@nativescript/core/ui/frame');
import { Frame } from '@nativescript/core';
import { Observable } from '@nativescript/core/data/observable';

export function onLoaded(args) {
    const page = args.object;
    const viewModel = new Observable();
    
    viewModel.set('skills', [
        { name: 'CompTIA A+', description: 'Description for Skill 1' },
        { name: 'CompTIA Network+', description: 'Description for Skill 1' },
        { name: 'CompTIA Server', description: 'Description for Skill 1' },
        { name: 'CompTIA Security+', description: 'Description for Skill 1' },
        { name: 'Web Developement', description: 'Description for Skill 1' },
        { name: 'Mobile App Development', description: 'Description for Skill 1' },
        { name: 'Programming', description: 'Description for Skill 1' },
    ]);

    page.bindingContext = viewModel;
}

export function onSkillTapped(args) {
  const itemIndex = args.index;
  const page = args.object.page;
  const viewModel = page.bindingContext;
  const skill = viewModel.getItem(itemIndex);
  
  // Navigate to the skill details page, passing the skill description as a context parameter.
  page.frame.navigate({
      moduleName: 'skill-detail-page',
      context: {
          description: skill.description
      }
  });
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
