var simulateSleep = function(milliseconds) {
    var date = new Date();
    var currentDate = null;
    do { currentDate = new Date(); }
    while(currentDate-date < milliseconds);
}

export class App
{
    multipleImageFilesLoadedCallback(file, data) {
        var span = document.createElement('span');
        span.innerHTML = ['<img class="thumbnail" src="', data, '" title="', escape(file.name), '"/>'].join('');
        document.getElementById('loaded_images_files').insertBefore(span, null);
    };

    textFileLoadedCallback(file, data) {
        document.getElementById('loaded_text_file').innerHTML = data;
    };

    slowFileLoadedCallback(file, data) {
        document.getElementById('loaded_slow_file').innerHTML = "Loaded File";
        document.getElementById('progress_slow_file')
            .setAttribute("style","width:100%");
    };

    slowFileProgressCallback(file, amountLoaded, totalAmount) {
        var percentLoaded = Math.round((amountLoaded/totalAmount)*100);
        document.getElementById('progress_slow_file')
            .setAttribute("style","width:" + percentLoaded + "%");
        simulateSleep(250);
    }

    avatarLoadedCallback(file, data) {
        document.getElementById('fake-avatar-container')
            .setAttribute("style","background-image: url(" + data + ")");
    }

    fileSizeCallback(file, data) {
        document.getElementById('error-output').innerHTML = "File passed the criteria";
    }

    fileSizeErrorCallback(file, error) {
        document.getElementById('error-output').innerHTML = error;
    }

    dragAndDropCallback(file, data) {
        var dndElement = document.getElementById('drag_and_drop_file');
        dndElement.style.background = 'url(' + data + ') no-repeat center';
    }
}