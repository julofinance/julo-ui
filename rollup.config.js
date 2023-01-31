import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import dts from "rollup-plugin-dts";

import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import packageJson from './package.json';

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ 
                compilerOptions: {
                    noEmit: false,
                    declarationDir: "types",
                    emitDeclarationOnly: true
                },
                tsconfig: "./tsconfig.json" 
            }),
            terser(),
            url(),
            svgr({ icon: true })
        ],
    },
    {
        input: "dist/esm/types/components/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm"}],
        plugins: [dts()]
    }
];