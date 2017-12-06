const { FuseBox, CSSPlugin, CSSResourcePlugin, SassPlugin, JSONPlugin, HTMLPlugin, TypeScriptHelpers, WebIndexPlugin, RawPlugin } = require("fuse-box");

const { Ng2TemplatePlugin } = require('ng2-fused');

const fuse = FuseBox.init({
  homeDir: "src/",
  output: "www/$name.js",
  sourceMaps: true,
  plugins: [
    Ng2TemplatePlugin(),
    ['*.html', RawPlugin()],
    WebIndexPlugin({
      title: 'Ionic App',
      template: 'src/index.html',
    }), [
      SassPlugin({ outputStyle: "compressed" }),
      CSSPlugin()
    ],
    [
      CSSResourcePlugin({
        inline: true
      }), CSSPlugin()
    ],
    TypeScriptHelpers(),
    JSONPlugin(),
    HTMLPlugin({ useDefault: false })
  ]
});

fuse.dev({ port: 8100 });

fuse.bundle('vendor').instructions(' ~ main.ts');
fuse.bundle('app')
  .instructions(' !> [main.ts]')
  .hmr()
  .watch();

fuse.run();
