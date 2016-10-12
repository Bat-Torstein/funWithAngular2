import typescript from 'rollup-plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    entry: "app/vendor.ts",
    dest: "dist/vendor.es2015.js",
    format: "iife",
    moduleName: "vendor",
    plugins: [
        typescript(),
        commonjs({
            include: [
                "node_modules/rxjs/**",
            ]}),
        nodeResolve({ jsnext: true,
            main: true,
            browser: true })
       ]
}