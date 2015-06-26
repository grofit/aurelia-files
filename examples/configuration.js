export function configure(aurelia)
{
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-files');

    aurelia.start().then(a => a.setRoot());
}