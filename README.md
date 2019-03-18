# 👀 Vue WatchResize

[![code style: airbnb](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat)](https://github.com/airbnb/javascript)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

> A Vue component that watches for size changes on its child nodes and emits an event.

## 💁🏼‍♂️ Introduction

`WatchResize` is a Vue component that wraps child nodes in a `<div>` and watches them for size changes. It uses [`watch-resize`](https://github.com/smithki/watch-resize) and [RxJS](https://github.com/ReactiveX/rxjs) observables under the hood to achieve this.

## 🔗 Installation

Install via `yarn` (recommended):

```sh
yarn add vue-watch-resize
```

Install via `npm`:

```sh
npm install vue-watch-resize
```

## 🛠️ Usage

### Importing

In TypeScript or ES6+:

```ts
import { WatchResize } from 'vue-watch-resize';
```

In UMD (using `WatchResize` via a `<script>` tag):

```js
const WatchResize = VueWatchResize.WatchResize;
Vue.Component('watch-resize', WatchResize);
```

### Events

| Name | Event Type | Description |
| --- | --- | --- |
| `resize` | `UIEvent` | Fires each time the component child nodes change size. |

### Vue template example

```html
<watch-resize @resize="myHandleResizeMethod($event)">
  <!-- Child nodes that change size go here -->
</watch-resize>
```
