export class FileReaderHelper
{
    static createReader(file, onLoaded, onProgress, onError) {
        var reader = new FileReader();
        reader.onload = function(fileLoadedEvent) {
            onLoaded(file, fileLoadedEvent.target.result);
        };

        if(typeof(onProgress) == "function")
        {
            reader.onprogress = function(fileProgressEvent) {
                onProgress(file, fileProgressEvent.loaded, fileProgressEvent.total);
            };
        }

        if(typeof(onError) == "function")
        {
            reader.onerror = function(fileErrorEvent) {
                onError(file, fileErrorEvent.target.error);
            };
        }

        return reader;
    }
}