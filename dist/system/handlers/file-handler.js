System.register(["../helpers/file-reader-helper"], function (_export) {
    "use strict";

    var FileReaderHelper, FileHandler;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_helpersFileReaderHelper) {
            FileReaderHelper = _helpersFileReaderHelper.FileReaderHelper;
        }],
        execute: function () {
            FileHandler = (function () {
                function FileHandler(onLoaded, onProgress, onError, fileFilter, maxFileSize, readAs, hoverClass) {
                    _classCallCheck(this, FileHandler);

                    this.onLoaded = onLoaded;
                    this.onProgress = onProgress;
                    this.onError = onError;
                    this.fileFilter = fileFilter;
                    this.maxFileSize = maxFileSize;
                    this.readAs = readAs;
                    this.hoverClass = hoverClass || "file-hover";
                }

                _createClass(FileHandler, [{
                    key: "readFile",
                    value: function readFile(file) {
                        var reader = FileReaderHelper.createReader(file, this.onLoaded, this.onProgress, this.onError);

                        if (this.readAs == "text") {
                            reader.readAsText(file);
                        } else if (this.readAs == "array") {
                            reader.readAsArrayBuffer(file);
                        } else if (this.readAs == "binary") {
                            reader.readAsBinaryString(file);
                        } else {
                            reader.readAsDataURL(file);
                        }
                    }
                }, {
                    key: "handleFileDrag",
                    value: function handleFileDrag(fileDragEvent) {
                        fileDragEvent.stopPropagation();
                        fileDragEvent.preventDefault();

                        if (fileDragEvent.type == "dragover") {
                            fileDragEvent.target.classList.add(this.hoverClass);
                        } else {
                            fileDragEvent.target.classList.remove(this.hoverClass);
                        }
                    }
                }, {
                    key: "handleDrop",
                    value: function handleDrop(fileDropEvent) {
                        handleFileDrag(fileDropEvent);
                        handleFileSelected(fileDropEvent);
                    }
                }, {
                    key: "handleFileSelected",
                    value: function handleFileSelected(fileSelectionEvent) {
                        var files = fileSelectionEvent.target.files || fileSelectionEvent.dataTransfer.files;
                        for (var i = 0, f; f = files[i]; i++) {
                            if (this.fileFilter && !f.type.match(this.fileFilter)) {
                                if (this.errorCallback) {
                                    this.errorCallback(f, "File type does not match filter");
                                }
                                continue;
                            }

                            if (maxFileSize && f.size >= this.maxFileSize) {
                                if (errorCallback) {
                                    this.errorCallback(f, "File exceeds file size limit");
                                }
                                continue;
                            }

                            readFile(f);
                        }
                    }
                }]);

                return FileHandler;
            })();

            _export("FileHandler", FileHandler);
        }
    };
});