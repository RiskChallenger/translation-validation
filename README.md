# Translation validation

[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)]()
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
[![ngneat](https://img.shields.io/badge/@-ngneat-383636?style=flat-square&labelColor=8f68d4)](https://github.com/ngneat/)
[![spectator](https://img.shields.io/badge/tested%20with-spectator-2196F3.svg?style=flat-square)]()

> Automatic validation messages for Angular forms in any language

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda atque blanditiis cum delectus eligendi ipsam iste iure, maxime modi molestiae nihil obcaecati odit officiis pariatur quibusdam suscipit temporibus unde.
Accusantium aliquid corporis cupiditate dolores eum exercitationem illo iure laborum minus nihil numquam odit officiis possimus quas quasi quos similique, temporibus veritatis? Exercitationem, iure magni nulla quo sapiente soluta. Esse?

## Features

✅ Custom error component  
✅ Show validation message on change, blur or submit     
✅ Translates using [Transloco](https://ngneat.github.io/transloco/)    
⚠️ WIP: translates using [ngx-translate](https://github.com/ngx-translate/core)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [FAQ](#faq)

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


This command will import the `NgxTvModule.forRoot()` in your `AppModule`:

```ts
import { NgxTvModule } from 'ngx-translation-validation';

@NgModule({
  declarations: [AppComponent],
  imports: [NgxTvModule.forRoot()],
  bootstrap: [AppComponent]
})
export class AppModule {}
``` 

## Usage
To get started simply import the `NgxTvModule` in the module of the component you want to have validation messages.
```ts
import { NgxTvModule } from 'ngx-translation-validation';

@NgModule({
  declarations: [UserComponent],
  imports: [NgxTvModule],
  bootstrap: [UserComponent]
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
scope.scipe.controlName.error
```
* `scope` - Scope of the validation messages. Useful for specifying a directory for the validation messages (default: validation)
* `scipe` - Group several validation messages to a specific form (default: general)
* `controlName` - Name of the control on which the validation error occurs
* `error` - The name of the validation error that occurs

Examples
```ts
validation.general.name.required
validation.general.email.email

validation.organizationForm.name.required
```

### Configuration
To customize the behavior of the plugin you can pass an object the the `forRoot()` method.
```ts
import { NgxTvModule } from 'ngx-translation-validation';

@NgModule({
  declarations: [AppComponent],
  imports: [NgxTvModule.forRoot({
      scope: 'validation', 
      invalidClass: 'invalid-input', 
      submittedClass: 'form-submitted',
      errorsComponent: SomeErrorContainerComponent
  })],
  bootstrap: [AppComponent]
})
export class AppModule {}
``` 
* `scope` - Scope of the validation messages. Useful for specifying a directory for the validation messages (default: validation)
* `invalidClass` - Class that is added to a formControl element when the control is invalid. Can be used for custom styling when you do not want to use `ng-invalid` (default: undefined)
* `submittedClass` - Class that is added to the formGroup element when it is submitted. Can be used in combination with ng-invalid to style elements when invalid and the form is submitted (default: 'ng-submitted')
* `errorsComponent` - Component in which the error message is rendered. If you want to use a custom component, please sure to extend the default (default: `NgxTvContainerComponent`)

#### Configure scope
To specify to what scipe validation messages belong you can use the `ngxTvScope` directive.

### Styling
By default the ngx-tv-container-component gets injected right after the formControl element. So you html would look something like this:
```html
<input type="text">
<ngx-tv-container-component></ngx-tv-container-component>
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
## FAQ

### How to ...

Nothing has been asked yet. Will update when the time is right.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

<div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
