import { Component } from '@angular/core';

@Component({
  selector: 'app-order-load-controls',
  templateUrl: './load-controls.component.html',
  styleUrls: ['./load-controls.component.scss'],
})
export class LoadControlsComponent {
  async handleFileInput(files: FileList) {
    const file = files.item(0);
    if (file) {
    }
  }
}
