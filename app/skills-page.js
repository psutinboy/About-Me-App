import { createViewModel } from './main-view-model';
const frameModule = require('@nativescript/core/ui/frame');
import { Frame } from '@nativescript/core';
import { Observable } from '@nativescript/core/data/observable';
const ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;

exports.pageLoaded = function(args) {
  const page = args.object;
  const listView = page.getViewById("myListView");

  const itemList = new ObservableArray([
    { name: 'CompTIA A+', description: 'Description for Skill 1' },
        { name: 'CompTIA Network+', description: 'Description for Skill 1' },
        { name: 'CompTIA Server', description: 'Description for Skill 1' },
        { name: 'CompTIA Security+', description: 'Description for Skill 1' },
        { name: 'Web Developement', description: 'Description for Skill 1' },
        { name: 'Mobile App Development', description: 'Description for Skill 1' },
        { name: 'Programming', description: 'Description for Skill 1' },

    // ...
  ]);
  listView.items = itemList;
};

exports.onItemTap = function(args) {
  const listView = args.object;
  const index = args.index;
  const tappedItem = listView.items.getItem(index);

  frameModule.Frame.topmost().navigate({
    moduleName: "skill-details-page",
    context: tappedItem,
    animated: true
  });
};


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
