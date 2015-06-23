import {inject, customElement, noView, bindable, ViewSlot, ResourceRegistry, ViewResources, ViewCompiler} from 'aurelia-framework';
import {DefaultTemplateGenerator} from "./default-template-generator"

@customElement('generate')
@noView
@inject(Element, ViewSlot, ViewCompiler, ResourceRegistry)
export class GenerateElement {
  @bindable usingModel;

  constructor(element, viewSlot, viewCompiler, resourceRegistry) {
    this.element = element;
    this.viewSlot = viewSlot;
    this.viewCompiler = viewCompiler;
    this.resourceRegistry = resourceRegistry;
  }

  attached() {
    var options = {
      usingModel: this.usingModel
    };

    var generatedElements = new DefaultTemplateGenerator().generateTemplate(options);
    var documentFragment = document.createDocumentFragment();
    generatedElements.forEach((generatedElement) => {
      documentFragment.appendChild(generatedElement);
    });

    var resources = new ViewResources(this.resourceRegistry);
    var viewFactory = this.viewCompiler.compile(documentFragment, resources);
    var view = viewFactory.create(this.element, this.usingModel);
    this.viewSlot.add(view);
  }
}
