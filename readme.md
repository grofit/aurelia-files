# Aurelia-Files

A simple aurelia attribute to allow you to load files into the browser, using the HTML5 FileReader functionality, also supports drag and drop.

## Installing

with jspm

`jspm install github:grofit/aurelia-files`

then

`aurelia.use.plugin("grofit/aurelia-files");`

## Example

### Live Example
[View Example](https://rawgit.com/grofit/aurelia-files/master/examples/index.html)

You can see the code and everything in the examples folder!

### Textual Examples

A simple example of allowing a user to load a file and then callback with the (file, data) arguments:
```
<input type="file" id="some-file-element" files="on-loaded.bind: SomeFileLoadedCallback" /> 

// some VM
export class SomeVM
{
	SomeFileLoadedCallback(file, data) {
		// Do something with file (js file) and data (content of the file)
	}
	
	// Remember if you need to access the *this* scope use
	// SomeFileLoadedCallback = (file, data) => { ... }
}

```

A more complicated example with custom settings:
```
<input id="some-files-element" files="on-loaded.bind: SomeLoadedCallback; on-progress.bind: SomeProgressCallback; on-error.bind: SomeErrorCallback, file-filter.bind: 'image.*', read-as.bind: 'binary' }" />
```

As shown above you can hook into any of the file loading events and get access to the data to display things like progress bars, and custom file filters, which although the accepts attribute should enforce this for you but does not currently work in all browsers. So in this case you can constrain loaded files and just ignore ones that dont match the pattern. Finally it is loading the data as a binary string in the above example, however this can be converted to use other supported types.

The available options for this binding are:

* **on-loaded** - The main callback for when the file has been loaded, returns file object and file data
* **on-progress** - The progress callback which is fired at intervals while loading, returns file object, amountLoaded and totalAmount
* **on-error** - The callback for when things didnt go how you expected...
* **file-filter** - The regex pattern to match the mime types against, e.g (image.*, application.*|text.*), if a file does not meet the filter it will raise an error
* **max-file-size** - The maximum file size for loaded files in bytes, if a file exceeds the file size it will raise an error
* **read-as** - to indicate how you want to read the file, options are (text, image, binary, array), the default behaviour is image
* **allow-drop** - to indicate you want to enable drag and drop functionality for files on this element
* **hover-class** - the class to apply when you are hovering a file over the drag and drop compatible dropzone
