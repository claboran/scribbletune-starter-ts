import * as program from 'commander';
import * as chalk from 'chalk';
import { midi} from 'scribbletune';
import {createArpTestClip} from "./src/clip-generator";

program.version('1.0.0')
    .option('-o, --outfile <outfile>', 'Output File')
    .parse(process.argv);

console.log(chalk.blue(`Outfile: ${program.outfile}`));

midi(createArpTestClip(), program.outfile);
