import {FileReaderHelper} from "../helpers/file-reader-helper"

export class FileHandler
{
    constructor(onLoaded, onProgress, onError, fileFilter, maxFileSize, readAs, hoverClass)
    {
        this.onLoaded = onLoaded;
        this.onProgress = onProgress;
        this.onError = onError;
        this.fileFilter = fileFilter;
        this.maxFileSize = maxFileSize;
        this.readAs = readAs;
        this.hoverClass = hoverClass || "file-hover";
    }

    readFile(file) {
        var reader = FileReaderHelper.createReader(file, this.onLoaded, this.onProgress, this.onError);

        if(this.readAs == "text")
        { reader.readAsText(file); }
        else if(this.readAs == "array")
        { reader.readAsArrayBuffer(file); }
        else if(this.readAs == "binary")
        { reader.readAsBinaryString(file); }
        else
        { reader.readAsDataURL(file); }
    };

    handleFileDrag(fileDragEvent)
    {
        fileDragEvent.stopPropagation();
        fileDragEvent.preventDefault();

        if(fileDragEvent.type == "dragover")
        { fileDragEvent.target.classList.add(this.hoverClass); }
        else
        { fileDragEvent.target.classList.remove(this.hoverClass); }
    };

    handleDrop(fileDropEvent)
    {
        handleFileDrag(fileDropEvent);
        handleFileSelected(fileDropEvent);
    };

    handleFileSelected(fileSelectionEvent)
    {
        var files = fileSelectionEvent.target.files || fileSelectionEvent.dataTransfer.files;
        for (var i = 0, f; f = files[i]; i++) {
            if (this.fileFilter && !f.type.match(this.fileFilter))
            {
                if(this.errorCallback)
                { this.errorCallback(f, "File type does not match filter"); }
                continue;
            }

            if(maxFileSize && f.size >= this.maxFileSize)
            {
                if(errorCallback)
                { this.errorCallback(f, "File exceeds file size limit"); }
                continue;
            }

            readFile(f);
        }
    };
}