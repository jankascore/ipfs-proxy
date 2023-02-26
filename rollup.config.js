import merge from 'deepmerge';
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'


export default {
	input: './src/index.ts',
	output: {
		file: './dist/ipfs-proxy.js'
	},
	plugins: [commonjs({
		defaultIsModuleExports: true
	}), json(), typescript()]
}