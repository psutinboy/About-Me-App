import { Observable } from '@nativescript/core/data/observable';
import { createViewModel } from './main-view-model';
const frameModule = require('@nativescript/core/ui/frame');
import { Frame } from '@nativescript/core';

export function onNavigatedTo(args) {
    const page = args.object;
    const navigationContext = page.navigationContext;
    const viewModel = new Observable();
    
    viewModel.set('skillDescription', navigationContext.description);
    
    page.bindingContext = viewModel;
}

export function goBackToSkills(args) {
    const page = args.object.page;
    page.frame.goBack();
}
