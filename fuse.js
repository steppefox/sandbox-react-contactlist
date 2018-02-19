const {
    FuseBox,
    CSSPlugin,
    ImageBase64Plugin,
    WebIndexPlugin,
    JSONPlugin,
    QuantumPlugin,
    EnvPlugin
} = require("fuse-box");

const IS_DEV = process.env.NODE_ENV !== 'production';
const IS_PRODUCTION = !IS_DEV;

const fuse = FuseBox.init({
    homeDir: "src",
    target: 'browser@es6',
    output: "dist/$name.js",
    useTypescriptCompiler: true,
    sourceMaps: IS_DEV,
    log: true,
    debug: IS_DEV,
    plugins: [
        IS_PRODUCTION && EnvPlugin({
            NODE_ENV: "production"
        }),
        CSSPlugin(),
        ImageBase64Plugin({
            useDefault: true
        }),
        WebIndexPlugin({
            template: "src/index.html",
            title: "React Contacts List example",
            path: './'
        }),
        JSONPlugin(),
        IS_PRODUCTION && QuantumPlugin({
            removeExportsInterop: false,
            uglify: true
        })
    ]
});

if (IS_DEV) {
    fuse.dev({
        port: 4445
    });
}

const app = fuse.bundle("app").instructions(" > index.tsx");

if (IS_DEV) {
    app.hmr().watch();
}

fuse.run();
