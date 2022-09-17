# CursorTracker
 

## Options

| Title  | Type  | Description  | Default |
|---|---|---|---|
| id  | String  | The id of the tracker element  | "cursor-tracker" |
| container  | String  | Target container classes  | ".ct-container" |
| selector  | String  | Target content class  | ".ct-content" |
| top  | Number  | Top space of the Tracker  | 5 |
| left  | Number  | Left space of the Tracker  | 0 |
| active  | String  | The class that the active container will receive  | "active" |
| breakpoint  | String  | Minimum device width  | "1024px" |
| innerHtml  | String  | Html of tracker element  | "" |
| classes  | String  | The classes of the tracker element  | "" |

```javascript
const tracker = new CursorTracker({
    id: 'tracker',
    container: '.container .box',
    selector: '.content',
    top: 25,
    left: 15,
    active: 'active',
    breakpoint: '1024px',
    innerHtml: 'Cursor is here',
    classes: 'cursor-tracker'
});
```

## Functions

```javascript
const pause = document.getElementById('pause');
tracker.onTheElement({ target: pause, classes: 'hidden' });             
```
  
 ## Events

```javascript
document.querySelector('.container').addEventListener('activated', (e) => { console.log(e) })           
```
