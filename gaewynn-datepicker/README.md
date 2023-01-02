

An Angular Material Component wrapping the Angular Material Datepicker and allowing to update the date formats at runtime (see https://github.com/angular/components/issues/8355)
<h1 align="center">GWDatePicker</h1>

[![Support - Angular 15+ (Reactive Forms)](https://img.shields.io/badge/Support-Angular_15%2B_(Reactive_Forms)-007EC6)](https://www.npmjs.com/package/gw-date-picker)
 [![Request - on github](https://img.shields.io/badge/Request-on_github-2ea44f)](https://github.com/gaewynn/angular)
## Table of contents

 - [Browser support](#browser_support)
 - [Features](#features)
    - [Now](#features_now)
    - [What's next?](#features_whatsnext)
 - [Demo](#demo)
 - [Installation](#installation)
 - [What's in?](#whatsin)
 - [Usage](#usage)
 - [Versioning](#versioning)
 - [Creator](#creator)
 - [Ask Me](#ask_me)
 - [Credits](#credits)
	 -  [License](#license)
## <a name="browser_support"></a> Browser support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) IE / Edge|[<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) Firefox| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) Chrome |[<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) Safari| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) Opera|
|--|--|--|--|--|
|IE11, Edge|latest|latest|latest|latest|

## <a name="features"></a> Features
### <a name="features_now"></a> Now:
 - **Angular 15** Support
 - All features from the native [Angular Material DatePicker](https://material.angular.io/components/datepicker/overview).....**and one more**
 - Update your DatePicker date formats at runtime (**including the calendar popup labels**)
 - Support **only MomentDateAdapter**
### <a name="features_whatsnext"></a> What's next?
* If you find it useful, [just ask](https://github.com/gaewynn/angular/issues) ;)
## <a name="demo"></a> Demo
...in progress...
## <a name="installation"></a> Installation
gw-date-picker is available via **npm** and **yarn**

Using npm:

    $ npm install gw-date-picker --save
Using yarn:

    $ yarn add gw-date-picker
Using angular-cli:

    $ ng add gw-date-picker

## <a name="whatsin"></a> What's in?
|Member|Description|
|--|--|
|GWDatePickerModule|The module itself. To import in each module using the component|
|GWDatePickerService|A service allowing to update the date pickers formats|
|GW_DATE_PICKER_CONFIGURATION|A token providing your formats configuration|

GW_DATE_PICKER_CONFIGURATION consists of two properties:

 - **initials**: represents a collection of links between a datepicker and the locale it will use
```typescript
[
	// All components with a group binding set to "group1" will be initialized using the "fr" format define in the "momentDateFormats" properties
	{ group: "group1", locale: "fr" },

	// All components with a group binding set to "group2" will be initialized using the "en" format define in the "momentDateFormats" properties
	{ group: "group2", locale: "en" }
]
```
 - **formats**: represents the formats to use for each locale of your application
```typescript
[
	//	Formats that will be used for the "fr" locale
	{
		locale:  "fr",
		momentDateFormats: {
			parse: {
				dateInput:  "DD.MM.YYYY",
			},
			display: {
				dateInput:  "DD.MM.YYYY",
				monthYearLabel:  "MMM.YYYY",
				dateA11yLabel:  "DD.MM.YYYY",
				monthYearA11yLabel:  "MMM.YYYY",
			}
		}
	}, 
	//	Formats that will be used for the "en" locale
	{
		locale:  "en",
		momentDateFormats: {
			parse: {
				dateInput:  "YYYY-MM-DD",
			},
			display: {
				dateInput:  "YYYY-MM-DD",
				monthYearLabel:  "MMM/YYYY",
				dateA11yLabel:  "YYYY-MM-DD",
				monthYearA11yLabel:  "MMM/YYYY",
			}
		}
	}
]
```

An example of a whole configuration will then be as follow:
```typescript
export  const  GWDatePickersConfiguration: GWDatePickerConfiguration = {
	initials: [{ group:  "group1", locale:  "fr" }, { group:  "group2", locale:  "en" }],
	formats: [{
		locale:  "fr",
		momentDateFormats: {
			parse: {
				dateInput:  "DD.MM.YYYY",
			},
			display: {
				dateInput:  "DD.MM.YYYY",
				monthYearLabel:  "MMM.YYYY",
				dateA11yLabel:  "DD.MM.YYYY",
				monthYearA11yLabel:  "MMM.YYYY",
			}
		}
	}, {
		locale:  "en",
		momentDateFormats: {
			parse: {
				dateInput:  "YYYY-MM-DD",
			},
			display: {
				dateInput:  "YYYY-MM-DD",
				monthYearLabel:  "MMM/YYYY",
				dateA11yLabel:  "YYYY-MM-DD",
				monthYearA11yLabel:  "MMM/YYYY",
			}
		}
	}]
};
```

## <a name="usage"></a> Usage
**GWDatePicker** is only a wrapper around the Angular Material Datepicker, so just wrap your Angular Material Datepicker inside the \<gaewynn-datepicker\>.

**It relies on ReactiveForms, so needs to be included in a FormGroup**

1. Inject the GWDatePickerModule in each modules using the component and define a configuration for your datepickers (see [What's in?](#whatsin)). This configuration will be provided using the  **GW_DATE_PICKER_CONFIGURATION** token in your AppModule
```typescript
//...  
import { GWDatePickerModule, GW_DATE_PICKER_CONFIGURATION } from  'GWDatePicker';
        
@NgModule({      
	imports: [
		//...     		
		GWDatePickerModule
	],
	providers: [
		// ...
		//	GWDatePickersConfiguration is the configuration as described
		//	You can use "useFactory" or "useClass" to provide the configuration
		{ provide: GW_DATE_PICKER_CONFIGURATION, useValue: GWDatePickersConfiguration }
	]
})
export class AppModule { }
```
2. Add the  \<gaewynn-datepicker> to your template
```html
<div [formGroup]="gwDatePickerForm">
	<!-- the [group] binding indicate which format will be used for this datepicker (see "What's in?" -->
	<gaewynn-datepicker [group]="'group1'">
		<mat-form-field appearance="fill">
			<mat-label>{{ Your hint }}</mat-label>
			<input  matInput [formControl]="customDateFormControl" [matDatepicker]="picker">
			<mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
			<mat-datepicker #picker></mat-datepicker>
		</mat-form-field>
	</gaewynn-datepicker>
</div>
```

3. Inject the **GWDatePickerService** in each component using the \<gaewynn-datepicker> component and call the function "init()" to initialize all datepickers with their initials formats
```typescript
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

	constructor(private readonly _gwDatePickerService: GWDatePickerService) { }

	public ngOnInit(): void {
		this._gwDatePickerService.init();
	}
}
```
4. Trigger the update of your format whenever you want
```typescript
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

	constructor(private readonly _gwDatePickerService: GWDatePickerService) { }

	public ngOnInit(): void {
		this._gwDatePickerService.init();
	}

	public updateFormats(): void {

		// This will use the formats linked to the "en" locale in your 
		// GW_DATE_PICKER_CONFIGURATION on all datepickers binded to "group1"
		this._gwDatePickerService.updateFormats("group1", "en");
	}
}
```

## <a name="creator"></a> Versioning
gw-date-picker will be maintained under the Semantic Versioning guidelines. Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

For more information on SemVer, please visit  [http://semver.org](http://semver.org/).
## <a name="demo"></a> Creator
<span style="color: red">**Arnaud Fischer**</span>
 - [@GitHub](https://github.com/gaewynn)
 - [@LinkedIn](https://www.linkedin.com/in/arnaud-fischer-6a629951)

## <a name="credits"></a> Credits
* Inspired by [mohamedelshorbagy](https://github.com/mohamedelshorbagy) on [github](https://github.com/angular/components/issues/8355)
### <a name="license"></a> License
gw-date-picker is **MIT licensed**.

