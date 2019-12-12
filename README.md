TypeScript React Jest Mock Inner Component Demo
=============================================

1. 使用`jest.mock`来mock一个component，返回一个`jest.fn()`用来验证
2. `jest.mock`会被提升到最前面，以保证`import Inner ...`语句拿到的是mock之后的component
3. 可以对`Inner`这个mock进行`toHaveBeenCalledWith`等方式验证传入的数据

```
npm install
npm run test
```
