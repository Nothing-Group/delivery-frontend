import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-order-load-controls',
  templateUrl: './load-controls.component.html',
  styleUrls: ['./load-controls.component.scss'],
})
export class LoadControlsComponent {
  @Output()
  fileSelected = new EventEmitter<File>();

  async handleFileInput(files: FileList) {
    const file = files.item(0);
    if (file) {
      this.fileSelected.emit(file);
    }
  }
}
