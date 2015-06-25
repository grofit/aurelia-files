import {TemplateGenerator} from "./generators/template-generator"
import {DefaultTemplateGenerator} from "./generators/default-template-generator"

export function configure(aurelia) {
    aurelia.container.registerInstance(TemplateGenerator, new DefaultTemplateGenerator());
    aurelia.globalizeResources("./elements/generate-element");
    console.log("PLUGIN GENERATE ACCEPTED 2");
}