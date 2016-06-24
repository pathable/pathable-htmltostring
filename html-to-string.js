function HtmlToString () {}

Plugin.registerCompiler({
  extensions: ['html'],
}, () => new HtmlToStringCompiler());

export class HtmlToStringCompiler {
  processFilesForTarget (files) {
    files.forEach(function (file) {
      let output = `module.exports = ${file.getContentsAsString()}`;
      file.addJavaScript({ data: output, path: file.getPathInPackage() + '.js' });
    });
  }
}
