import typescript from "@rollup/plugin-typescript";
import copy from './rollup.copy.plugin'

// Rename this variable to whichever name you want.
const FILENAME = "my-onetap-plugin";

export default {
  filename: FILENAME,
  input: 'src/index.ts',
  output: {
    file: `dist/${FILENAME}.js`,
    format: 'cjs'
  },
  plugins: [
    typescript(), 
    copy(
      `dist/${FILENAME}.js`,
      `C:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Global Offensive/ot/scripts/${FILENAME}.js`
    )
  ]
};