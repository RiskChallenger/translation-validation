# Translation validation

> Automatic validation messages for Angular forms in any language

[![GitHub Release](https://img.shields.io/github/v/release/riskchallenger/translation-validation?style=flat-square)](https://github.com/RiskChallenger/translation-validation/releases)
[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)](https://github.com/RiskChallenger/translation-validation/blob/main/LICENSE)
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](https://commitizen.github.io/cz-cli/)
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/RiskChallenger/translation-validation/blob/main/CONTRIBUTING.md)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

We got tired of having to write code to display validation messages whenever a form control was invalid.
So instead we wrote a library that automatically injects a component displaying the error message.

## Features

✅ Custom error component  
✅ Show validation message on change, blur or submit  
✅ Translates using [Transloco](https://ngneat.github.io/transloco/)  
⚠️ WIP: translates using [ngx-translate](https://github.com/ngx-translate/core)

## Table of Contents

- [Blog posts](#blog-posts)
- [Installation](#installation)
- [Usage](#usage)
- [Versioning](#versioning)
- [FAQ](#faq)

# Blog posts

- [Translation validation for Angular - automatic validation messages translated](https://dev.to/langstra/translation-validation-automatic-validation-messages-translated-17ng)

# Installation

From your project folder, run:

```shell
yarn add ngx-translation-validation
```

or

```shell
npm install --save ngx-translation-validation
```

Also add transloco to your project if you haven't done so yet. [Add transloco to your project](https://ngneat.github.io/transloco/docs/installation)

After this, you will need to register the providers using `provideNgxTv()`

This command will import the `NgxTvModule.forRoot()` in your `AppModule`:

```ts
import { provideNgxTv } from 'ngx-translation-validation';

bootstrapApplication(AppComponent, {
  providers: [provideNgxTv(/* Optionally you can provide a config here **/)],
});
```

## Usage

To get started simply import the `NgxTvModule` in the module of the component you want to have validation messages.

```ts
import { NgxTvModule } from 'ngx-translation-validation';

@NgModule({
  declarations: [UserComponent],
  imports: [NgxTvModule],
  bootstrap: [UserComponent],
})
export class UserModule {}
```

And then every [formControlName] or [formControl] element will automatically show validation messages when it is invalid.

```angular2html

<form [formGroup]="form">
  <div class="form-group">
    <label for="name">Name</label>
    <input formControlName="name" id="name" type="text">
  </div>
</form>
```

### Internationalization

To show the validation in the current language of the application we use [Transloco](https://ngneat.github.io/transloco/) by default. It translates a key to a string in the current language of the app. The keys for the validation generates by this packages have the following form:

```ts
type.scope.controlName.error;
```

- `type` - Name of the validation messages type. Useful for specifying a directory for the validation messages (default: validation)
- `scope` - Group several validation messages to a specific form/group (default: general)
- `controlName` - Name of the control on which the validation error occurs
- `error` - The name of the validation error that occurs

> [!NOTE]  
> If the parent of the control is a FormArray, the control name will be set to the name of the parent of the FormArray.

<details>
  <summary>More on resolving control names</summary>

```js
formBuilder.group({
  name: ['', Validators.required], // When the control is in a group, use the key of the group, controlName -> name
  company: formBuilder.group({
    address: ['', Validators.required], // Nesting of groups is ignored, only direct parent is considered, controlName -> address
  }),
  cars: formBuilder.array([
    formBuilder.group({
      model: ['', Validators.required], // Group nested in array, only direct parent is considered, controlName -> model
    }),
  ]),
  colorPreferences: formBuilder.array([
    ['', Validators.required], // Control nested in array, controlName is name of array, controlName -> colorPreferences
  ]),
});
```

If the name of a control cannot be found, a `ControlNameNotFoundError` will be thrown, **no validation error will be shown!**

</details>

Examples

```ts
validation.general.name.required;
validation.general.email.email;

validation.organizationForm.name.required;
```

### Configuration

To customize the behavior of the plugin you can pass an object to the `forRoot()` method.

```ts
import { provideNgxTv } from 'ngx-translation-validation';

bootstrapApplication(AppComponent, {
  providers: [
    provideNgxTv({
      type: 'validation', // default 'validation'
      defaultScope: 'general', // default 'general'
      invalidClass: 'invalid-input', // default undefined
      submittedClass: 'form-submitted', // default 'ng-submitted'
      errorsComponent: SomeErrorContainerComponent, // default NgxTvContainerComponent
    }),
  ],
});
```

- `invalidClass` - Class that is added to a formControl element when the control is invalid. Can be used for custom styling when you do not want to use `ng-invalid` (default: undefined)
- `submittedClass` - Class that is added to the formGroup element when it is submitted. Can be used in combination with ng-invalid to style elements when invalid and the form is submitted (default: 'ng-submitted')
- `errorsComponent` - Component in which the error message is rendered. If you want to use a custom component, please sure to extend the default (default: `NgxTvContainerComponent`)

#### Configure scope

To specify to what scope validation messages belong you can use the `ngxTvScope` directive.

### Styling

By default, the ngx-tv-container-component gets injected right after the formControl element. So you html would look something like this:

```html
<input type="text" /> <ngx-tv-container-component></ngx-tv-container-component>
```

But if you'd like the container to appear in a parent of the controlForm you could specify the location of the container with the `ngxTvContainer` directive.

```angular2html

<form [formGroup]="form" ngxTvContainer>
  <div class="form-group">
    <label for="name">Name</label>
    <input formControlName="name" id="name" type="text">
  </div>
  <button type="submit">Submit</button>
</form>
<ngx-tv-container-component></ngx-tv-container-component> // container component will be rendered here
```

## Contribute

We welcome you to contribute. This can be done by reporting issues or feature requests. Even better is to not only report issues or feature requests, but then also to pick those issues up yourself.

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on the process for submitting pull requests to us.

## Versioning

| Library version | Angular version |
| :-------------: | :-------------: |
|      14.x       |       >16       |
|      13.x       |    >=13 <16     |
|       1.x       |      12.x       |

<div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
