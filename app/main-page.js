import { createViewModel } from './main-view-model';
const frameModule = require('@nativescript/core/ui/frame');

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = createViewModel();
}

export function navigateToBio(args) {
  const page = args.object.page;
  frameModule.Frame.topmost().navigate('bio-page');
}

export function navigateToSkills(args) {
  const page = args.object.page;
  frameModule.Frame.topmost().navigate('skills-page');
}

export function navigateToContactMe(args) {
  const page = args.object.page;
  frameModule.Frame.topmost().navigate('contact-page');
}
