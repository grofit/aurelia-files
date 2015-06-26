import {inject, customAttribute, bindable } from 'aurelia-framework';
import { FileHandler } from "../handlers/file-handler.js";

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
    if(typeof(onLoaded) != "function") { throw new Error("You must specify an onLoaded callback at minimum"); }

    var fileHandler = new FileHandler(onLoaded, onProgress, onError, fileFilter, maxFileSize, readAs, hoverClass);
    
    this.element.addEventListener('change', fileHandler.handleFileSelected, false);

    if(allowDrop) {
      this.element.addEventListener('dragover', fileHandler.handleFileDrag, false);
      this.element.addEventListener('dragleave', fileHandler.handleFileDrag, false);
      this.element.addEventListener('drop', fileHandler.handleDrop, false);
    }
  }
}
