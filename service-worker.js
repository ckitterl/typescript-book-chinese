/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e1fc8933dc9702eb4ee3c471a676e470"
  },
  {
    "url": "assets/css/0.styles.f45e872f.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b635c98c.js",
    "revision": "484368cc1f8538ce33bd5b2825f1b0a4"
  },
  {
    "url": "assets/js/11.f9a9cf45.js",
    "revision": "3cf123e9757b8ed7dfaf3776dedb39d0"
  },
  {
    "url": "assets/js/12.4fca7fe7.js",
    "revision": "1d18a48ebae2b7b1527a793dedbb042c"
  },
  {
    "url": "assets/js/13.8a5c49b9.js",
    "revision": "0f4a0c610fa679e0d4e095788198e5ea"
  },
  {
    "url": "assets/js/14.6a825e40.js",
    "revision": "a6856904b864f0ccc861a871ac812d56"
  },
  {
    "url": "assets/js/15.0d97a3f1.js",
    "revision": "86553b71e95a24abbb0842a78daaa0a2"
  },
  {
    "url": "assets/js/16.551625ee.js",
    "revision": "1ec04db975e81e77265b45457810eb4e"
  },
  {
    "url": "assets/js/17.939ebf01.js",
    "revision": "731ab24b1641f24979e41171b99dcccb"
  },
  {
    "url": "assets/js/18.f867e830.js",
    "revision": "efe9576e6c46419073613304968067e6"
  },
  {
    "url": "assets/js/19.4e156a7a.js",
    "revision": "272070dbb6c5ac935c54080d7384b104"
  },
  {
    "url": "assets/js/2.2a274f30.js",
    "revision": "8c020448baae9acd1c366afd506966dd"
  },
  {
    "url": "assets/js/20.e935096e.js",
    "revision": "053e1c28911d9674f3456384a09d7310"
  },
  {
    "url": "assets/js/21.d8f66771.js",
    "revision": "66e715e21f645e4807b683fc2c467473"
  },
  {
    "url": "assets/js/22.3bc3e10b.js",
    "revision": "e56354d0da87cfac7bd552997ecfbd8d"
  },
  {
    "url": "assets/js/23.680099e7.js",
    "revision": "6b42f2f8357016e5964d3a94bebb5ad9"
  },
  {
    "url": "assets/js/24.340c13c5.js",
    "revision": "077c0176427b4cf5657e473c471b127b"
  },
  {
    "url": "assets/js/25.730c5e9c.js",
    "revision": "b37b1d80121ef221b207827a3fc19f88"
  },
  {
    "url": "assets/js/26.be1b030d.js",
    "revision": "7353d2131e7eddc5905790644a914711"
  },
  {
    "url": "assets/js/27.bc26b064.js",
    "revision": "5c83e9b37af187944748bbf7a5a3a7dd"
  },
  {
    "url": "assets/js/28.beed3881.js",
    "revision": "03c5f7597f36f14642648426734043f0"
  },
  {
    "url": "assets/js/29.d682758e.js",
    "revision": "73c9e1e5a08484e6c7066856039f8e2a"
  },
  {
    "url": "assets/js/3.0b6855f4.js",
    "revision": "6005a10f1a81d256ac1c96f8866a0a5a"
  },
  {
    "url": "assets/js/30.3ccab3ee.js",
    "revision": "ec3d869db9412a954b6f2f450f0c976a"
  },
  {
    "url": "assets/js/31.230d8296.js",
    "revision": "bc86f857737bff66db2c56a00447100f"
  },
  {
    "url": "assets/js/32.c7d67a02.js",
    "revision": "86eef9d94673f46f281ea7cfb4baa328"
  },
  {
    "url": "assets/js/33.70b37c1e.js",
    "revision": "aa9d2287f0ab27ca501aaa1265964780"
  },
  {
    "url": "assets/js/34.94afe1a6.js",
    "revision": "737d930aab89e20478b85e01516f3443"
  },
  {
    "url": "assets/js/35.d011b2cf.js",
    "revision": "97f40b440154c0ca0fc11b31e1f8c2b6"
  },
  {
    "url": "assets/js/36.3a3beb79.js",
    "revision": "11bb32c24fbb776164cff1f52768e5bc"
  },
  {
    "url": "assets/js/37.78f01aa5.js",
    "revision": "d60892cd572ce39259d63d297f35f8b8"
  },
  {
    "url": "assets/js/38.47997e7e.js",
    "revision": "519173056c7802fcda63d7096ae3e8d3"
  },
  {
    "url": "assets/js/39.9ac13a95.js",
    "revision": "ce6549416b6959d0bdd42817c8a8a42e"
  },
  {
    "url": "assets/js/4.f7fc35f8.js",
    "revision": "3e147c93f683a033d6006e7e59949cdd"
  },
  {
    "url": "assets/js/40.08fe56d7.js",
    "revision": "9e749394e0f0e2123e95ab84e6697bf9"
  },
  {
    "url": "assets/js/41.c19000ad.js",
    "revision": "a33c753e075c1445cdd9b110cc320cf4"
  },
  {
    "url": "assets/js/42.6b8e90d0.js",
    "revision": "09060804ef3c9a51b48e8e889a6e5ce7"
  },
  {
    "url": "assets/js/43.c8b5f2aa.js",
    "revision": "9053946a4dcbea7a37ea4a051f788870"
  },
  {
    "url": "assets/js/44.f11c8659.js",
    "revision": "7eac8b651bc6cafe458b6ba5e6650648"
  },
  {
    "url": "assets/js/45.8667874b.js",
    "revision": "269d33d1fd6b437f5bc080ea299d3fbd"
  },
  {
    "url": "assets/js/46.6ccfdccf.js",
    "revision": "4911ecb952361a1e73863e1b291002f0"
  },
  {
    "url": "assets/js/47.f0d29edb.js",
    "revision": "ba7dfd8ae665958253faf063bedbe809"
  },
  {
    "url": "assets/js/48.cdc3eb41.js",
    "revision": "3b2a258583e65de0b4ea05b29952826d"
  },
  {
    "url": "assets/js/49.53b82d7e.js",
    "revision": "35d7146f973dc092afb47cec7dc53e40"
  },
  {
    "url": "assets/js/5.81bc92c4.js",
    "revision": "a81b964f4278dae1aaf06c13a7c57641"
  },
  {
    "url": "assets/js/50.a81b6689.js",
    "revision": "4889a431802dcbc0f85e2dbbc3b6cab9"
  },
  {
    "url": "assets/js/51.67368652.js",
    "revision": "d90e118830d23d62316c9116816d9b19"
  },
  {
    "url": "assets/js/52.7ae36bf1.js",
    "revision": "8effee194f5c07c1adc9032f782ea701"
  },
  {
    "url": "assets/js/53.97d22fb3.js",
    "revision": "7e7e23c93c39efd4f2192e281faf30ac"
  },
  {
    "url": "assets/js/54.3bf68bad.js",
    "revision": "b4ecbdff41fb18ed265f082271265e9b"
  },
  {
    "url": "assets/js/55.d47c3aa1.js",
    "revision": "a2adc0ef1136fbf847527e8400fdb705"
  },
  {
    "url": "assets/js/56.e2fd0397.js",
    "revision": "77d1274a31255e75e2cf1ea3c79e5a3f"
  },
  {
    "url": "assets/js/57.0bf24da0.js",
    "revision": "9f7d1ef9ec579b1d0166191a968f7b1c"
  },
  {
    "url": "assets/js/58.3db691bb.js",
    "revision": "db9c94f5af124705ae84635aa7985458"
  },
  {
    "url": "assets/js/59.f4e51174.js",
    "revision": "cc0716018c054eaa88ccae04d1ab1c5e"
  },
  {
    "url": "assets/js/6.6fde3483.js",
    "revision": "baa738afd6a7d334a3e48d1f70c610ff"
  },
  {
    "url": "assets/js/60.aed132d6.js",
    "revision": "15c0afda02575a39730bfa1c6fcf26e0"
  },
  {
    "url": "assets/js/61.72ee30a9.js",
    "revision": "a29c2d75cf350e6490bea4e5cbc46d2d"
  },
  {
    "url": "assets/js/62.2367de97.js",
    "revision": "8a8487c80ecaad1d873c5fc56afa0d55"
  },
  {
    "url": "assets/js/63.f1fff279.js",
    "revision": "ddabeba307f9a16e4d2a389692099d1c"
  },
  {
    "url": "assets/js/64.42b7ae63.js",
    "revision": "b4726b7a79c022c5b6f46e40d5e51f16"
  },
  {
    "url": "assets/js/65.a408e868.js",
    "revision": "4a56793916cc9882dd5eb558062d4a16"
  },
  {
    "url": "assets/js/66.5d50174e.js",
    "revision": "c73cd359483605a92a40e3dc15dc2ae7"
  },
  {
    "url": "assets/js/67.dbe66622.js",
    "revision": "a2f27eebcd2cb3501e2ed80188ee4ae1"
  },
  {
    "url": "assets/js/68.772c174c.js",
    "revision": "dc13fa866b66872ec8603695060adbe8"
  },
  {
    "url": "assets/js/69.cae9dd45.js",
    "revision": "780152774700ecd218d75ac26fd39235"
  },
  {
    "url": "assets/js/7.574f184f.js",
    "revision": "165b18725b95fd05d69422e261120ed8"
  },
  {
    "url": "assets/js/70.6d787064.js",
    "revision": "853dcbdf6526be734afad38f763bbb7f"
  },
  {
    "url": "assets/js/71.1167de03.js",
    "revision": "1ee4f372c3ede5589c034c60b24c8daf"
  },
  {
    "url": "assets/js/72.c604d521.js",
    "revision": "0cb86ac04eaac1ecf0228906b9a6bfc5"
  },
  {
    "url": "assets/js/73.ac00011e.js",
    "revision": "1122bfc1380c75fd329926b87bba4664"
  },
  {
    "url": "assets/js/74.5a04f5bc.js",
    "revision": "6cfea4446dc285219c6737455291904b"
  },
  {
    "url": "assets/js/75.ebadf93a.js",
    "revision": "7a2d2f50a6415cb636cc856f5e92a372"
  },
  {
    "url": "assets/js/76.94258ffa.js",
    "revision": "0027e4a9611957e0e17778d1b093506e"
  },
  {
    "url": "assets/js/77.564d41ca.js",
    "revision": "b473858be2c40a659d490a4af32cc52f"
  },
  {
    "url": "assets/js/78.ef6e24db.js",
    "revision": "c85e40e020bb3e9b1b36861e5322777a"
  },
  {
    "url": "assets/js/79.9a981b39.js",
    "revision": "90dbac508e02a7eff3e31f8b661702b7"
  },
  {
    "url": "assets/js/8.8753058f.js",
    "revision": "e3cc9a0a99ccf342ae14ec993351e657"
  },
  {
    "url": "assets/js/80.5a051e5a.js",
    "revision": "4004c10a771a394d7e011bcecfe93d0c"
  },
  {
    "url": "assets/js/81.35410ad8.js",
    "revision": "fcfac08c21d41e6b7c0fef7b9b13197e"
  },
  {
    "url": "assets/js/82.f438d6f0.js",
    "revision": "029216db3c1b59e82f8205eecaae6ea3"
  },
  {
    "url": "assets/js/83.5f198f7a.js",
    "revision": "9ecb60f84664147c7eb65241bf455530"
  },
  {
    "url": "assets/js/84.7c88b6a5.js",
    "revision": "fc42d73c8866116a67fa65b5ff4bb95c"
  },
  {
    "url": "assets/js/85.99a8c19e.js",
    "revision": "fcded10a386de0d79ecba2b69871ea92"
  },
  {
    "url": "assets/js/86.c7139db8.js",
    "revision": "a71a2767972ed4b225ee79659c8c386c"
  },
  {
    "url": "assets/js/87.adee741f.js",
    "revision": "393f6e405769b16e66db2edd1635ca41"
  },
  {
    "url": "assets/js/9.3ed3aab3.js",
    "revision": "2651d3196ec07d48188c9e5168d3372e"
  },
  {
    "url": "assets/js/app.3c770812.js",
    "revision": "f6fcb9fef1a6771511dd85eb95e52c3a"
  },
  {
    "url": "compiler/ast.html",
    "revision": "1aa1bc28b09739dccfa9fd146cbe4c4c"
  },
  {
    "url": "compiler/binder.html",
    "revision": "07a6aa7a578d51df320f1cde11435460"
  },
  {
    "url": "compiler/checker.html",
    "revision": "c70ed0a18351b8f12e2f154c7478db04"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "702f6ecbadfc9a3419bb0ca04f1183d1"
  },
  {
    "url": "compiler/overview.html",
    "revision": "d17d91c5193cf7e54392e84b7dff643a"
  },
  {
    "url": "compiler/parser.html",
    "revision": "c8a4e818553ce7610db8b66dc0380b27"
  },
  {
    "url": "compiler/program.html",
    "revision": "7b2ed72e784c78075c4261b03db3d516"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "f097e033bbcab9ffec3a79425471625d"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "ffae65ad678462a247af502f5fb0bc6b"
  },
  {
    "url": "error/interpreting.html",
    "revision": "6125dc992e2d4f101b8e6e50949bfa42"
  },
  {
    "url": "faqs/class.html",
    "revision": "11a0b434d3bd4052c24d4c5ad559c9ca"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "e51a5f229715670d375edd5e05371b92"
  },
  {
    "url": "faqs/comments.html",
    "revision": "6e1f5e41ee42c51bcabd604c7961a0d3"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "4cfc3b6ac2d04f84dd0538a0bdb3248c"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "19c3c8c1b4ecd210c0ba5e0b26ac80f7"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "8a80ada10fc21a54f9b753f482c8459e"
  },
  {
    "url": "faqs/enums.html",
    "revision": "66756125b92a95549aa177038e2c5058"
  },
  {
    "url": "faqs/function.html",
    "revision": "157508f7753b7c838b03dfdca2b44a1e"
  },
  {
    "url": "faqs/generics.html",
    "revision": "9f6d32995f1cc0811e15779bb33a5d1f"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "0d07aca3741cd76d9342d103359475e4"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "cd9047ad8b26ad8dde73af14538442a0"
  },
  {
    "url": "faqs/modules.html",
    "revision": "213bc37fb0b293d7f07360c34207435d"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "3ff8f609ff10ddfdfd5c3f1281750f52"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "ed1e5512bb870acea9827db05982617b"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "ba797d4c7b8409cdd9df85a8ded8c808"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "f1e0b707e87927dc0bd22d79cce51b2f"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "7af4cbc27698e9d1f1e0a6c8d1fa6381"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "d96b5904ae7691cefb8e567833979153"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "a15d7ad2f3dd282086a815c3146b8f71"
  },
  {
    "url": "jsx/support.html",
    "revision": "a051ef93cac80f8f27044adff7ae7553"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "69d4294d85d36073b7270ed9d0dc3239"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "bf9c3793f228af9a6d336695fbc56225"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "a3f8ba892d8178c9ee2951a21f274344"
  },
  {
    "url": "project/modules.html",
    "revision": "fd9c1c39fb4775fe57fbb6b390ec7ab5"
  },
  {
    "url": "project/namespaces.html",
    "revision": "48993131604cc80864928fdbb6aae8d3"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "e863413c879333ce564f0e82f15fcb68"
  },
  {
    "url": "tips/barrel.html",
    "revision": "ee2368fc422e9cee7423b733fc55971f"
  },
  {
    "url": "tips/bind.html",
    "revision": "1cf7a5502540e08acc18560f31faafa5"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "cf42dbc38e13a488baa2a4a32ef984b6"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "15488358f2ca093912e8f67d41e5c857"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "9ccb7bd5bfc72c7c96204b1083e5c71d"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "f940fb8c0b7d3966e7ab97be637e5a93"
  },
  {
    "url": "tips/curry.html",
    "revision": "2e544fda8a3f81cd47a9b574a5120cf7"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "023e25896a24dbf3168475481677ca18"
  },
  {
    "url": "tips/infer.html",
    "revision": "1dea0f4275400830d476b28b36ce1c1d"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "3f49ce0049c1ad935ca7a14d52fcdd2c"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "a926d5526c4942742aaafe3de91aa912"
  },
  {
    "url": "tips/metadata.html",
    "revision": "f88f311870158c8bcb3a0228f7b8a46c"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "114e4e576344d4d3f178cb308cc69de9"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "39bf38c5a6d1d73ca311ed86f4098599"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "f1b2498e70554379f0abae7ce8a2a335"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "d6cc8cf54589717ae575601e80dd6316"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "7de4a134cd0cb3128f0d2083443314a3"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "1df28b0d53f3f84bdf29482154ca2bc9"
  },
  {
    "url": "tips/truthy.html",
    "revision": "b4bd59b04164ba07ffeac7ba0e1cf332"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "89109e529a1583deba7e4af2c0cf5b5c"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "f8878547dbf1b033c61b703370af22a4"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "19b073441e0b6299dbd9823215cf128c"
  },
  {
    "url": "typings/callable.html",
    "revision": "7502e1283e7e5fc66dac25c7dbd7f46b"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "0760a31fe7773f86a4ad652d0d526fbc"
  },
  {
    "url": "typings/enums.html",
    "revision": "3aab20e1fbca4a614f36be200e7482f5"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "6fc00736301ce824ab92a4b80153820c"
  },
  {
    "url": "typings/freshness.html",
    "revision": "3480ad0ab27375162d1dc7d6f1a2dd7a"
  },
  {
    "url": "typings/functions.html",
    "revision": "24312fded652b0f506663ea7a5621fe9"
  },
  {
    "url": "typings/generices.html",
    "revision": "277f5d3879335bd37587c092808d3c24"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "aa461f67c277fc193d2395cb9017741a"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "af3c57090b59eb24a823d888a427cd35"
  },
  {
    "url": "typings/lib.html",
    "revision": "82d2ac37788feeec8e7047e743346be0"
  },
  {
    "url": "typings/literals.html",
    "revision": "b78aed164cdc5cfbc3a1ddaf5191ca73"
  },
  {
    "url": "typings/migrating.html",
    "revision": "b4455445a9200e0273d893968ce62513"
  },
  {
    "url": "typings/mixins.html",
    "revision": "36db4fc5c6e7df770889e75cf34db1fe"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "6a9ecf3ae5bfc11027182f2bdc79beee"
  },
  {
    "url": "typings/neverType.html",
    "revision": "ac3b185b7db3332918bbab0206f9a831"
  },
  {
    "url": "typings/overview.html",
    "revision": "134520863c51d83334ebfafc5c184ff1"
  },
  {
    "url": "typings/readonly.html",
    "revision": "33d4b163a25473e8bf0a1d7fd7e005a8"
  },
  {
    "url": "typings/thisType.html",
    "revision": "ed30427f7d282ef6ab9f89e8958e626a"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "23582650152adc4275cb29eb1ec26bd0"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "673b8dcab90c93e2064dcb7fe7198ffc"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "1551fdd0a679e448c64ed2b1b9a92317"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "aa97531c7f623b55a7668371da6dfbe2"
  },
  {
    "url": "typings/types.html",
    "revision": "e25947456145a06275b8b9af0b5c0567"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
