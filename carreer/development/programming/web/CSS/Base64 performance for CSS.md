https://csswizardry.com/2017/02/base64-encoding-and-performance/

Given that [[CSS]] is the [[Assets that block page rendering]], we need to optimize their delivery. For that we **cannot** use [[Base64]]:

- Base64 [[encoding]] increases filesize (more text for include the encoding) in ways that we can’t effectively mitigate (e.g. Gzip). This increase in filesize delays rendering, because it’s happening to a render-blocking resource.
- Base64 encoding forces all asset bytes to be downloaded, even if they’ll never be used. This is a waste of resources and, again, it’s happening on our critical path.
- Base64 encoding also forces non-critical assets onto the critical path. (e.g images, fonts) This means that—in this particular case—instead of needing to download 68K of CSS before we can begin rendering the page, we need to download over 3.4× that amount. We’re just keeping the user waiting for assets that they originally would have never needed to wait for!
- Base64 encoding restricts our ability to [[Cache]] assets individually; our images and fonts are now bound to the same caching rules as our styles, and vice versa.
