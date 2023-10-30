import { createViewModel } from './main-view-model';
const frameModule = require('@nativescript/core/ui/frame');
import { Frame, topmost } from '@nativescript/core';
import { EventData } from '@nativescript/core/data/observable';
import { alert } from '@nativescript/core/ui/dialogs';

export function goBackToHome(args) {
  const page = args.object.page;
  frameModule.Frame.topmost().navigate('main-page');
}

export function submitForm(args) {
  const page = args.object.page;
  const nameField = page.getViewById('nameField');
  const emailField = page.getViewById('emailField');
  const numberField = page.getViewById('numberField');
  const reasonField = page.getViewById('reasonField');
  const messageField = page.getViewById('messageField');

  const name = nameField.text;
  const email = emailField.text;
  const phoneNumber = numberField.text;
  const reason = reasonField.text;
  const message = messageField.text;

  if (!name || !email || !reason || !message) {
    alert('Please fill in all the required fields.'); // Display an error message
    return; // Prevent form submission
  }

  // Clear the form fields
  if (nameField && emailField && numberField && reasonField && messageField) {
    nameField.text = '';
    emailField.text = '';
    numberField.text = '';
    reasonField.text = '';
    messageField.text = '';
  }

  // Log the name, email, phone number, and reason to the console
  console.log(
    `Name: ${name}, Email: ${email}, Phone Number: ${phoneNumber}, Reason for contact: ${reason}, Message: ${message}`
  );

  // Show a "Thank you" alert
  alert({
    title: 'Thank you',
    message: 'Your form has been submitted.',
    okButtonText: 'OK',
  }).then(() => {
    // Use the Frame module to navigate to the main page
    const frame = Frame.topmost();
    frame.navigate({
      moduleName: 'main-page',
      clearHistory: true, // This will clear the navigation history
    });
  });
}
