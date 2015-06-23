System.register(['aurelia-framework', './default-template-generator'], function (_export) {
  'use strict';

  var inject, customElement, noView, bindable, ViewSlot, ResourceRegistry, ViewResources, ViewCompiler, DefaultTemplateGenerator, GenerateElement;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customElement = _aureliaFramework.customElement;
      noView = _aureliaFramework.noView;
      bindable = _aureliaFramework.bindable;
      ViewSlot = _aureliaFramework.ViewSlot;
      ResourceRegistry = _aureliaFramework.ResourceRegistry;
      ViewResources = _aureliaFramework.ViewResources;
      ViewCompiler = _aureliaFramework.ViewCompiler;
    }, function (_defaultTemplateGenerator) {
      DefaultTemplateGenerator = _defaultTemplateGenerator.DefaultTemplateGenerator;
    }],
    execute: function () {
      GenerateElement = (function () {
        var _instanceInitializers = {};

        function GenerateElement(element, viewSlot, viewCompiler, resourceRegistry) {
          _classCallCheck(this, _GenerateElement);

          _defineDecoratedPropertyDescriptor(this, 'usingModel', _instanceInitializers);

          this.element = element;
          this.viewSlot = viewSlot;
          this.viewCompiler = viewCompiler;
          this.resourceRegistry = resourceRegistry;
        }

        var _GenerateElement = GenerateElement;

        _createDecoratedClass(_GenerateElement, [{
          key: 'attached',
          value: function attached() {
            var options = {
              usingModel: this.usingModel
            };

            var generatedElements = new DefaultTemplateGenerator().generateTemplate(options);
            var documentFragment = document.createDocumentFragment();
            generatedElements.forEach(function (generatedElement) {
              documentFragment.appendChild(generatedElement);
            });

            var resources = new ViewResources(this.resourceRegistry);
            var viewFactory = this.viewCompiler.compile(documentFragment, resources);
            var view = viewFactory.create(this.element, this.usingModel);
            this.viewSlot.add(view);
          }
        }, {
          key: 'usingModel',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        GenerateElement = inject(Element, ViewSlot, ViewCompiler, ResourceRegistry)(GenerateElement) || GenerateElement;
        GenerateElement = noView(GenerateElement) || GenerateElement;
        GenerateElement = customElement('generate')(GenerateElement) || GenerateElement;
        return GenerateElement;
      })();

      _export('GenerateElement', GenerateElement);
    }
  };
});