export function configure(aurelia)
{
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('../dist/system/index');

    aurelia.start().then(a => a.setRoot());
}