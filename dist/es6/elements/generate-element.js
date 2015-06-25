import {inject, customElement, noView, bindable, ViewSlot, ResourceRegistry, ViewResources, ViewCompiler} from 'aurelia-framework';
import {TemplateGenerator} from "../generators/template-generator"

@customElement('generate')
@noView
@inject(Element, ViewSlot, ViewCompiler, ResourceRegistry, TemplateGenerator)
export class GenerateElement {
  @bindable usingModel;

  constructor(element, viewSlot, viewCompiler, resourceRegistry, templateGenerator) {
    this.element = element;
    this.viewSlot = viewSlot;
    this.viewCompiler = viewCompiler;
    this.resourceRegistry = resourceRegistry;
    this.templateGenerator = templateGenerator;
  }

  attached() {
    var options = {
      usingModel: this.usingModel
    };

    var generatedElements = this.templateGenerator.generateTemplate(options);
    var documentFragment = document.createDocumentFragment();
    generatedElements.forEach((generatedElement) => {
      documentFragment.appendChild(generatedElement);
    });

    console.log("Generated " + generatedElements.length + " Elements");
    var resources = new ViewResources(this.resourceRegistry);
    var viewFactory = this.viewCompiler.compile(documentFragment, resources);
    var view = viewFactory.create(this.element, this.usingModel);
    this.viewSlot.add(view);
  }
}
