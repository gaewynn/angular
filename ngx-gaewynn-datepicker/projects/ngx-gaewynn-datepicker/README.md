

An Angular Material Component wrapping the Angular Material Datepicker and allowing 
* to update the date formats **at runtime and instantly** (see [this issue](https://github.com/angular/components/issues/8355))
* to use different formats for each DatePicker
<h1 align="center">NgxGaewynnDatePicker</h1>

[![Support - Angular 15+ (Reactive Forms)](https://img.shields.io/badge/Support-Angular_15%2B_(Reactive_Forms)-007EC6)](https://www.npmjs.com/package/gw-date-picker)
 [![Request - on github](https://img.shields.io/badge/Request-on_github-2ea44f)](https://github.com/gaewynn/angular)
## Disclaimer
*This component relies on a hack consisting of the modification of a private field within the Angular Material DatePicker component. **Be aware** that a breaking change could happen on any future update from the Angular Material team*

## Table of contents

 - [Browser support](#browser_support)
 - [Features](#features)
    - [Now](#features_now)
    - [What's next?](#features_whatsnext)
 - [Demo](#demo)
 - [Installation](#installation)
 - [What's in?](#whatsin)
 - [Usage](#usage)
    - [DatePicker](#usage_datepicker)
    - [DateRangePicker](#usage_daterangepicker)
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
 - Support DateRangePicker
### <a name="features_whatsnext"></a> What's next?
* If you find it useful, [just ask](https://github.com/gaewynn/angular/issues) ;)
## <a name="demo"></a> Demo
[NgxGaewynnDatePicker demo](https://stackblitz.com/edit/ngx-geawynn-datepicker)
## <a name="installation"></a> Installation
ngx-gaewynn-datepicker is available via **npm** and **yarn**

Using npm:

    $ npm install ngx-gaewynn-datepicker --save
Using yarn:

    $ yarn add ngx-gaewynn-datepicker
Using angular-cli:

    $ ng add ngx-gaewynn-datepicker

## <a name="whatsin"></a> What's in?
|Member|Description|
|--|--|
|NgxGaewynnDatePickerModule|The module handling DatePickers. To import in each module using the component|
|NgxGaewynnDateRangePickerModule|The module handling DateRangePickers. To import in each module using the component|
|NgxGaewynnDatePickerService|A service allowing to update the date pickers formats|
|NGX_GAEWYNN_DATEPICKER_CONFIGURATION|A token providing your formats configuration|

NGX_GAEWYNN_DATEPICKER_CONFIGURATION consists of two properties:

 - **initials**: represents a collection of links between a datepicker (or date range picker) and the locale it will use
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
	// Formats that will be used for the "fr" locale
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
	// Formats that will be used for the "en" locale
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
export  const  GaewynnDatePickerConfiguration: NgxGaewynnDatePickerConfiguration= {
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
**NgxGaewynnDatePicker** is only a wrapper around the Angular Material Datepicker, so just wrap your Angular Material Datepicker inside the \<ngx-gaewynn-datepicker\> or the \<ngx-gaewynn-date-range-picker\>.

**It relies on ReactiveForms, so needs to be included in a FormGroup**

1. Inject the NgxGaewynnDatePickerModule (and/or the NgxGaewynnDateRangePickerModule) in each modules using the component and define a configuration for your datepickers (see [What's in?](#whatsin)). This configuration will be provided using the  **NGX_GAEWYNN_DATEPICKER_CONFIGURATION** token in your AppModule
```typescript
// ...  
import { NgxGaewynnDatePickerModule, NgxGaewynnDateRangePickerModule, NGX_GAEWYNN_DATEPICKER_CONFIGURATION } from  'NgxGaewynnDatePicker';
        
@NgModule({      
	imports: [
		// ...     		
		NgxGaewynnDatePickerModule,
		NgxGaewynnDateRangePickerModule
	],
	providers: [
		// ...
		// GaewynnDatePickerConfiguration is the configuration as described
		// You can use "useFactory" or "useClass" to provide the configuration
		{ provide: NGX_GAEWYNN_DATEPICKER_CONFIGURATION, useValue: GaewynnDatePickerConfiguration}
	]
})
export class AppModule { }
```
2. Add the  \<ngx-gaewynn-datepicker> and/or the \<ngx-gaewynn-date-range-picker> to your template
```html
<div [formGroup]="ngxGaewynnDatePickerForm">
	<!-- the [group] binding indicate which format will be used for this datepicker (see "What's in?" -->
	<ngx-gaewynn-datepicker [group]="'group1'">
		<mat-form-field appearance="fill">
			<mat-label>{{ Your hint }}</mat-label>
			<input  matInput [formControl]="customDateFormControl" [matDatepicker]="picker">
			<mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
			<mat-datepicker #picker></mat-datepicker>
		</mat-form-field>
	</ngx-gaewynn-datepicker>

	<!-- For a DateRangePicker -->
	<ngx-gaewynn-date-range-picker  [group]="'group1'">
		<mat-form-field  appearance="fill">
			<mat-label>{{ mockService.getRangePlaceholder(1) }}</mat-label>
			<mat-date-range-input  [rangePicker]="rangePicker1">
				<input  matStartDate  [formControl]="customRangeDateFromFormControl1"  placeholder="Start date">
				<input  matEndDate  [formControl]="customRangeDateToFormControl1"  placeholder="End date">
			</mat-date-range-input>
			<mat-hint>{{ mockService.hintGroup1 }} – {{ mockService.hintGroup1 }}</mat-hint>
			<mat-datepicker-toggle  matIconSuffix  [for]="rangePicker1"></mat-datepicker-toggle>
			<mat-date-range-picker  #rangePicker1></mat-date-range-picker>
		</mat-form-field>
	</ngx-gaewynn-date-range-picker>
</div>
```

3. Inject the **NgxGaewynnDatePickerService** in each component using the \<ngx-gaewynn-datepicker> (or the \<ngx-gaewynn-date-range-picker>) component and call the function "init()" to initialize all datepickers with their initials formats
```typescript
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

	constructor(private readonly _ngxGaewynnDatePickerService: NgxGaewynnDatePickerService) { }

	public ngOnInit(): void {
		this._ngxGaewynnDatePickerService.init();
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

	constructor(private readonly _ngxGaewynnDatePickerService: NgxGaewynnDatePickerService) { }

	public ngOnInit(): void {
		this._ngxGaewynnDatePickerService.init();
	}

	public updateFormats(): void {

		// This will use the formats linked to the "en" locale in your 
		// NGX_GAEWYNN_DATEPICKER_CONFIGURATION on all datepickers binded to "group1"
		this._ngxGaewynnDatePickerService.updateFormats("group1", "en");
	}
}
```

## <a name="creator"></a> Versioning
ngx-gaewynn-datepicker will be maintained under the Semantic Versioning guidelines. Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

For more information on SemVer, please visit  [http://semver.org](http://semver.org/).
## <a name="demo"></a> Creator
<span style="color: red">**Arnaud Fischer**</span>
 - [@GitHub](https://github.com/gaewynn)
 - [@LinkedIn](https://www.linkedin.com/in/arnaud-fischer-6a629951)

## <a name="credits"></a> Credits
* Inspired by [marcgrabow](https://github.com/marcgrabow) for his "[dirty hack](https://github.com/angular/components/issues/8355#issuecomment-376783293) to change the display dateInput dateformat", but that works for now :smile:
* Inspired by [mohamedelshorbagy](https://github.com/mohamedelshorbagy) on usage of zonejs in his [comment](https://github.com/angular/components/issues/8355#issuecomment-671993601)

### <a name="license"></a> License
ngx-gaewynn-datepicker is **MIT licensed**.
