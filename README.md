# Second Assignment - Rodrigo Samayoa

## Optimizations Part

- Add Vite
- Add bundle visualizer
- Add lazy and eager to images
- Optimize images using webp instead of png or jpp
- Optimize Video
- Remove unnecessary CSS
- Resize images and set default size
- Deploy to Netlify

### [Try it here](https://bucolic-smakager-fab46c.netlify.app)

## PWA Part

- Ask for location and show latitude and longitude
- Cache some files with a Service Worker
- Show banner if user offline
  - It disappears when user comes online
- Show notification after 15 seconds
  - It can be closed
- Add basic SSL with vite plugin

#### Script for running Google Chrome

```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir=/tmp/foo --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=https://localhost:5173
```
