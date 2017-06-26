const {FuseBox, CSSPlugin, CSSResourcePlugin, SassPlugin, JSONPlugin, HTMLPlugin, TypeScriptHelpers,
WebIndexPlugin} = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src/",
  output: "www/$name.js",
  sourceMaps: true,
  plugins: [
    WebIndexPlugin({
        title: 'Ionic App',
        template: 'src/index.html',
    }), [
      SassPlugin({outputStyle: "compressed"}),
      CSSPlugin()
    ],
    [
      CSSResourcePlugin({
        inline: true
      }), CSSPlugin()
    ],
    TypeScriptHelpers(),
    JSONPlugin(),
    HTMLPlugin({useDefault: false})
  ],
  standalone : true
});

fuse.dev({port: 8100});

fuse.bundle('vendor').instructions(' ~ main.ts');
fuse.bundle('app')
    .instructions(' !> [main.ts]')
    .watch()
    .hmr();

fuse.run();
