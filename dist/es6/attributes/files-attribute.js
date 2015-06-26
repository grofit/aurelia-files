import {inject, customAttribute, bindable } from 'aurelia-framework';
import { FileHandler } from "../handlers/file-handler";

@customAttribute('files')
@inject(Element)
export class FilesAttribute {
  @bindable onLoaded;
  @bindable onProgress;
  @bindable onError;
  @bindable fileFilter;
  @bindable maxFileSize;
  @bindable readAs;
  @bindable allowDrop;
  @bindable hoverClass;

  constructor(element) {
    this.element = element;
  }

  bind() {
    if(!this.onLoaded) { throw new Error("You must specify an onLoaded callback at minimum"); }

    var fileHandler = new FileHandler(this.onLoaded, this.onProgress, this.onError,
        this.fileFilter, this.maxFileSize, this.readAs, this.hoverClass);
    
    this.element.addEventListener('change', fileHandler.handleFileSelected, false);

    if(this.allowDrop) {
      this.element.addEventListener('dragover', fileHandler.handleFileDrag, false);
      this.element.addEventListener('dragleave', fileHandler.handleFileDrag, false);
      this.element.addEventListener('drop', fileHandler.handleDrop, false);
    }
  }
}
