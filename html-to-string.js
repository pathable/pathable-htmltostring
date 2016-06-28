function HtmlToString () {}

Plugin.registerCompiler({
  extensions: ['html'],
}, () => new HtmlToStringCompiler());

export class HtmlToStringCompiler {
  processFilesForTarget (files) {
    files.forEach(function (file) {
      /**
       * FIXME: This parser is modifying the structure of the original file, it shouldn't
       */
      const modifiedString = file.getContentsAsString().replace(/\n/g, '');
      let output = `module.exports = '${modifiedString}';`;
      file.addJavaScript({ data: output, path: file.getPathInPackage() + '.js' });
    });
  }
}
