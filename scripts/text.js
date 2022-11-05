const { resolve } = require('path');
const fs = require('fs');
const SrcPath = resolve('src');
const Typography = require(SrcPath + '/configs/TypographyConfig.json');

let TextContents =
  'import React from "react";\n' +
  'import {TextProps} from "app-studio";\n' +
  'import {Text} from "app-studio";\n' +
  'import Typography from "../configs/TypographyConfig.json";\n\n';

TextContents += Object.keys(Typography).reduce((contents, tag) => {
  return `${contents} export const ${tag} = (props: TextProps) => (<Text {...Typography.${tag}} {...props}/>);\n`;
}, '');

fs.writeFile(`${SrcPath}/components/Text.tsx`, TextContents, 'utf8', (error) => {
  if (error) {
    throw error;
  }
  console.log('src/components/Text.tsx created');
});
