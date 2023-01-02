
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
 - [Usage](#usage)
 - [Versioning](#versioning)
 - [Creator](#creator)
 - [Ask Me](#ask_me)
 - [Credits](#credits)
	 -  [License](#license)
## <a name="browser_support"></a> Browser support
| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) Opera |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| lastest| lastest| lastest| lastest| lastest |
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
## <a name="usage"></a> Usage
**GWDatePicker** is only a wrapper around the Angular Material Datepicker, so just wrap your Angular Material Datepicker inside the \<gaewynn-datepicker\> and give your formats options,

1. Update your AppModule (import "MatDatepickermodule, MatFormModule, MatInputModule and GWDatePickerModule) and add some providers
```typescript
import { NgModule } from  '@angular/core';
import { BrowserModule } from  '@angular/platform-browser';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { ReactiveFormsModule } from  '@angular/forms';
        
import { MatFormFieldModule } from  '@angular/material/form-field';
import { MatInputModule } from  '@angular/material/input';
import { MatDatepickerModule } from  '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from  '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from  '@angular/material-moment-adapter';
        
import { GWDatePickerModule } from  'GWDatePicker';
        
import { AppComponent } from  './app.component';
        
@NgModule({      
	imports: [
		//...     
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
        
		MatDatepickerModule,
		MatFormFieldModule,
		MatInputModule,
				
		GWDatePickerModule
	],
	providers: [
		MomentDateAdapter,
		{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
		{ provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
	]
})
export class AppModule { }
```
2. Add the component in your template

```html
<div [formGroup]="gwDatePickerForm">
	<gaewynn-datepicker [options]="gwDatePickerOptions">
		<mat-form-field appearance="fill">
			<mat-label>{{ hint }}</mat-label>
			<input  matInput [formControl]="getCustomDateFormControl()" [matDatepicker]="picker">
			<mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
			<mat-datepicker #picker></mat-datepicker>
		</mat-form-field>
	</gaewynn-datepicker>

	<button mat-button (click)="updateGWDatePickerDateFormats()">Update formats</button>
</div>
```
3. Set your options
```typescript
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements  AfterViewInit {

	public gwDatePickerForm: FormGroup = this._formBuilder.group({ customDate: [''] });
	public gwDatePickerOptions: Subject<IGWDatePickerOptions> = new Subject<IGWDatePickerOptions>();
	public hint = '';
	
	private _currentLocale = "fr";
	
	constructor(private  readonly  _formBuilder: FormBuilder) {
		const options = this._getGWDatepickerOptions(this._currentLocale);
		this.hint = options.momentDateFormats.display.dateInput;
	}

	public  ngAfterViewInit(): void {

		//	Initialize our picker with initial options
		this.gwDatePickerOptions.next(this._getGWDatepickerOptions(this._currentLocale));
	}

	public  getCustomDateFormControl(): FormControl {
		return  this.gwDatePickerForm.controls['customDate'] as  FormControl;
	}
	
	public  updateGWDatePickerDateFormats2(): void {
		this._currentLocale = this._currentLocale === "fr" ? "en" : "fr";
		const  options = this._getGWDatepickerOptions(this._currentLocale);
		this.gwDatePickerOptions.next(options);
	}

	private  _getGWDatepickerOptions(language: string): IGWDatePickerOptions {

		//	Use your custom logic to switch among your date formats
		return {
			locale: language,
			momentDateFormats: {
				parse: {
					dateInput: language === "en" ? "YYYY-MM-DD" : "DD.MM.YYYY",
				},
				display: {
					dateInput: language === "en" ? "YYYY-MM-DD" : "DD.MM.YYYY",
					monthYearLabel: language === "en" ? "MMMM YY" : "MMM YYYY",
					dateA11yLabel: language === "en" ? "YYYY-MM-DD" : "DD.MM.YYYY",
					monthYearA11yLabel: language === "en" ? "MMMM YY" : "MMM YYYY",
				}
			}
		};
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

