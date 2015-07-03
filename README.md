# CustomEase plugin for [Greensock](http://greensock.com)

GSAP plugin for custom eases building.

## Usage

1. Connect plugin: ```<script src="customease.js"></script>```
2. Use:

```js
CustomEase.create('test', [{s:0,cp:-0.014,e:0.232},{s:0.232,cp:0.478,e:0.984},{s:0.984,cp:1.49,e:0.996},{s:0.996,cp:0.502,e:1}]);
TweenMax.to(document.getElementById('divy'), 2, { x: 400, ease: CustomEase.byName('test') });
```

## What is the strange awkward second argument?
That is ease data. You can get it visiting [Greensock`s custom eases builder fo ActionScript](http://greensock.com/customease) and copying array as shown on the screenshot below.

![instruction](//frux.github.io/gsap-customease/image.png "")

Also you can use [helper](http://frux.github.io/gsap-customease).