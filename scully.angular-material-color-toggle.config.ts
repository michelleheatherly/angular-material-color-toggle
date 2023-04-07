import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
    projectRoot: './src',
    projectName: 'angular-material-color-toggle',
    distFolder: './dist/angular-material-color-toggle', // output directory of your Angular build artifacts
    outDir: './dist/static', // directory for scully build artifacts
    defaultPostRenderers: [],
    routes: {},
};