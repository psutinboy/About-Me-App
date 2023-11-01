import { Observable } from '@nativescript/core/data/observable';
import { createViewModel } from './main-view-model';
const frameModule = require('@nativescript/core/ui/frame');
import { Frame } from '@nativescript/core';

exports.onNavigatingTo = function(args) {
    const page = args.object;
    const context = page.navigationContext;
  
    const detailLabel = page.getViewById("detail");
    detailLabel.text = context.name;
}

export function goBackToSkills(args) {
    const page = args.object.page;
    page.frame.goBack();
}
