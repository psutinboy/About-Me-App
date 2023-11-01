const frameModule = require('@nativescript/core/ui/frame');
const Observable = require("@nativescript/core/data/observable").Observable;

export function pageLoaded(args) {
    const page = args.object;
    const navigationContext = page.navigationContext;
    const skill = navigationContext.skill;

    // Log the skill and binding context for debugging
    console.log("Skill:", skill);

    // Explicitly set the skill object as the binding context
    page.bindingContext = skill;
}

export function goBack(args) {
    frameModule.Frame.topmost().goBack();
}
