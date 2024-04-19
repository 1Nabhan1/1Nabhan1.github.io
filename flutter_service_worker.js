'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1bd341722e3b32e9ed402a114f97b3bc",
".git/config": "4e304a0428fa2fa90ff020a66df652fe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "03fab26d85416e145d6547dcce90dc17",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4cdecf2837d5109ba70fd95ab73350e9",
".git/logs/refs/heads/main": "38bdb6c76ee2a200c1e0ae2d01035273",
".git/logs/refs/remotes/origin/main": "017bb845778ecb4d63ff8563e678f0f5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/caef9ed8040640212842350c37fa09578140fd": "c3a5ed125be79c9b8c62c4743d8fa43e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/1923ee8120eaebba12a1bcdec139e13e889ae6": "d784dd426a25f0c0fa30cddaa8e25150",
".git/objects/25/0d675c7ec574f0086f88a8361c027f26767c3f": "f68a532076998f092f474e64f6a6b740",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2f/b3f86a75e7dcbbe6e0fd499b11a8149e9df9ce": "e1f3dbedcfb8663a066a34a76420f544",
".git/objects/3e/ae0e5429807aa5fc13e52a00101b84c377d36d": "ffbfc770a4c1e25ec55c9bcbc224ce79",
".git/objects/41/8b60b7b540b013fd0f0fde8bde7a94ccca50c1": "1ce0a922def7df575e4e7083d7921441",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/a2b34c0d2eefed52a026e57092ef48e9a329ed": "237fe06956bd4cc2cdf12d58b71720aa",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/ca6f7eb9e54ca07ad1975610b9ddae1ac2c6c3": "ef42a3773cc636d1325bbc2bd6fe57fb",
".git/objects/53/796f89b98b7acc9a7c37b80b7eb304acf447c0": "ad4277dfea3d69ecf8f0ef34c1396359",
".git/objects/53/fd49c2cd90b3dd416a45da8c44d1f65a5e7e0e": "39deb4475ec1eca7a80b3b75383837d6",
".git/objects/57/a8221ab9cf9b7cb58493c23ea27faa57598e7f": "a7596f9211dc201892d9fce8425ad3b4",
".git/objects/5f/6d3d2ebd85860c1c42544f1716d51dfd3f8ec7": "9a01ce4d5aac25d0eaf3216885fa05f3",
".git/objects/6e/b9bb2ce32ec7d812592d2541645b271b8604ed": "270acabcf7bf9e466d8e511174a8a1b9",
".git/objects/75/b833370b60945436cd12691596ce832ec59633": "5860baaab22ceb7784cef3e499c84759",
".git/objects/76/d988e6d6249f2d9bca7f6c083e0827901661a4": "b73de04bbd1dfdb288e2ca4865954961",
".git/objects/80/9d26041fbdcae1d1a5f72e221b1d2588918582": "2895010c8df8c9c69d0fc06172398605",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/e201666e07defa2a6dc721778ab8f661457de9": "07859b245d9515e2f7f793f1fc2a1465",
".git/objects/8a/07879de983f8f36973cac78b08e73f4b3d2630": "38377ded5ce7816a98c64d0af8837f56",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/4fcba918caf0313ddaa35ab89fd4b4ebfb5984": "59e6766062fabf64ee9ebd0e3139ecac",
".git/objects/8d/de45714ee36d1023b207be837d6b02ae8ab751": "9d2f5574cac95f48fce77c42f792470a",
".git/objects/92/5c0d31c200c693e027c1a6eff288654757c22b": "3fce32075e625e5c9309f489871b7886",
".git/objects/b0/9d5f55289ad14abacc7eef8d703a2757778522": "7c88a3fc4287cb2f570eddf6a1436103",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/7418e98f96019eb7d8b4bbabffd13df3491982": "9aa410ac2873f098348a8a73b69d8047",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/d360745725b5c6548e58b296d4474e528e085d": "42cf17262b81173c7c564e3ad4494325",
".git/objects/c0/9a4f3edd86bf49324a861132224e171f103615": "3256fca6a7be00ffb41d372a81d3536a",
".git/objects/cd/975ad2427719cc100d8894430b49ad9c030088": "c39d6e85d2dfc7d051c672c279260e78",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/d071ca5ef80e2104f528b6b8726dc6a30cc4a1": "c3fee7b16debd62f1f85336573cb073d",
".git/objects/e2/3fc7d0274be7444bf5a56d238bf661a7266469": "1ccdde58364df3be8764b9c18749d099",
".git/objects/e9/02e9ecc2837884003cda20df18a4dc25b193a9": "86939f21420f54531300d5403639ea9f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/6d9d12470b976854246c95dadde0dd2f99f7bc": "80b76d3c35df28b0ed1288d8025df201",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/a413d62624be60d620e88d4e1f32da83d1ba9d": "d8db05e585a60bcb053f5f55ad0de9b1",
".git/objects/fb/875a7c8559cf371c91dcc07879e260420bf0b6": "7b6e7905e336f52558d5c3eb92081a77",
".git/objects/fc/6a294a7ce3abe7bc9304461a45a130dadf1904": "7f620240e95658eacb059de8ebbbe087",
".git/refs/heads/main": "2da3dc5fa9e0b39f4a8c0215d687e954",
".git/refs/remotes/origin/main": "2da3dc5fa9e0b39f4a8c0215d687e954",
"assets/AssetManifest.bin": "e5fd0c831f0aa7e7645029fd0b8f4812",
"assets/AssetManifest.bin.json": "cd299be8952867d49c79fe907482a895",
"assets/AssetManifest.json": "88c90e78bd97d9120d7791d93d8ffa5d",
"assets/assets/Splash.gif": "0c9fa7ab8530a41b3fe9c3f9ab20685e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "bbe8fc91475daf9e88a3349b58921f53",
"assets/NOTICES": "409e1336b1bd7380f159d1845adf5b59",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "ebec2180c8fd2244c0b887fe4abd79a5",
"canvaskit/canvaskit.wasm": "b730404c3182c77feae53f97aeab7247",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "85af9a3ce602e02632c701fa742320cb",
"canvaskit/chromium/canvaskit.wasm": "e85c2054a44abc8e393f58b32c1a4a8e",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "4ff83c62a0243119b7245316356685e7",
"canvaskit/skwasm.wasm": "0a5c4a5d97a16304b3e4d1a4c4a24b9c",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b0f14e7487e88a43a5897d831cca6896",
"/": "b0f14e7487e88a43a5897d831cca6896",
"main.dart.js": "61cd190e76fc82853515f2061d3c6deb",
"manifest.json": "77ebb176e5cacfc34eeda41e474f4541",
"version.json": "c3080e9ebba9317322752ac4a41296e1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
