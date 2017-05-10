const {FuseBox, CSSPlugin, CSSResourcePlugin, SassPlugin, JSONPlugin, HTMLPlugin, TypeScriptHelpers} = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src",
  output: "www/$name.js",
  sourceMaps: true,
  plugins: [
    [
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
  ]
});

fuse.dev({port: 8100});

fuse.bundle("app")
  .watch("client/**") // watch only client related code
  .hmr()
  .instructions("> main.ts");

fuse.run();

//const fuseBox = fsbx.FuseBox.init({
//  cache: false,
//  homeDir: "src/",
//  sourceMap: {
//    bundleReference: "app.js.map",
//    outFile: "./www/app.js.map"
//  },
//  outFile: "./www/app.js",
//  plugins: [
//    [
//      fsbx.SassPlugin({outputStyle: "compressed"}),
//      fsbx.CSSPlugin()
//    ],
//    [
//      fsbx.CSSResourcePlugin({
//        inline: true
//      }), fsbx.CSSPlugin()
//    ],
//
//    fsbx.TypeScriptHelpers(),
//    fsbx.JSONPlugin(),
//    fsbx.HTMLPlugin({useDefault: false})
//  ]
//});
//
//fuseBox.devServer(">main.ts", {
//  port: 8100
//});
