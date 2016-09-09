function HtmlToString () {}

Plugin.registerCompiler({
  extensions: ['html', 'xml'],
}, () => new HtmlToStringCompiler());

export class HtmlToStringCompiler {
  processFilesForTarget (files) {
    files.forEach(function (file) {
      /**
       * FIXME: This parser is modifying the structure of the original file, it shouldn't
       */
      let modifiedString = '';
      file.getContentsAsString()
        .replace(/\'/g, '\\\'')
        .split('\n')
        .forEach((line) => {
          modifiedString += `'${line}' + `;
        });
      modifiedString += `''`;

      let output = `module.exports = ${modifiedString};`;

      file.addJavaScript({ data: output, path: file.getPathInPackage() + '.js' });
    });
  }
}
