# canvas-objects

## Instalation
```shell script
yarn add canvas-object

or

npm i -S canvas-object
```

## Usage
```typescript
import FastVector from 'fast-vector';
import { graphics } from 'canvas-object';

const circle = new graphics.Circle({ position: new FastVector(0, 0,), radius: 10 });
circle.render(context);
```
