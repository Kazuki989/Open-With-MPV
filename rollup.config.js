import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: './node_modules/franc/index.js',
    output: {
        file: './data/franc/franc.js',
        format: 'cjs'
    },
    plugins: [
        nodeResolve()
    ]
};