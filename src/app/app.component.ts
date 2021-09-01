import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ck-editor-five';
  myForm: FormGroup;

  public Editor = ClassicEditor;
  public editorConfig = {
    toolbar: {
      items: [
        'heading',
        '|',
        'alignment',                                                 // <--- ADDED
        'bold',
        'italic',
        'link',
        'bulletedList',
        'blockQuote',
        'undo',
        'redo',
      ]
    },
    link: {
      decorators: {
          toggleDownloadable: {
              mode: 'manual',
              label: 'Downloadable',
              attributes: {
                  download: 'file'
              }
          },
          openInNewTab: {
              mode: 'manual',
              label: 'Open in a new tab',
              defaultValue: true,			// This option will be selected by default.
              attributes: {
                  target: '_blank',
                  rel: 'noopener noreferrer'
              }
          }
      }
    }
  }
  htmlValue: any;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      sport_description: ['', [Validators.required,]],
    });
  }

  submit(): void {

    this.htmlValue = this.myForm.value.sport_description;
    console.log(this.myForm.value.sport_description)
  }
}
