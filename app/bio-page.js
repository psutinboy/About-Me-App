import { createViewModel } from './main-view-model';
const frameModule = require('@nativescript/core/ui/frame');
import { Frame } from '@nativescript/core';

export function goBackToHome(args) {
  const page = args.object.page;
  frameModule.Frame.topmost().navigate('main-page');
}

export function navigateToNext(args) {
  const page = args.object.page;
  frameModule.Frame.topmost().navigate('skills-page');
}

export function goBack(args) {
  frameModule.Frame.topmost().goBack();
}
