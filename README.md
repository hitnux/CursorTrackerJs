# CursorTracker
 

## Options

| Title  | Type  | Description  | Default | Multi |
|---|---|---|---|---|
| id  | String  | The id of the tracker element  | "cursor-tracker" | False |
| container  | String  | Target container classes  | ".ct-container" | True (".container .box") |
| selector  | String  | Target content class  | ".ct-content" | False |
| top  | Number  | Top space of the Tracker  | 5 | False |
| left  | Number  | Left space of the Tracker  | 0 | False |
| active  | String  | The class that the active container will receive  | "active" | False |
| breakpoint  | String  | Minimum device width  | "1024px" | False |
| innerHtml  | String  | Html of tracker element  | "" | False |
| classes  | String  | The classes of the tracker element  | "" | False |

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

| Title  | Description |
|---|---|
| onTheElement | Tracking a custom item |

```javascript
const pause = document.getElementById('pause');
tracker.onTheElement({ target: pause, classes: 'hidden' });             
```
  
 ## Events
 
 | Title  | Description |
|---|---|
| activated | Event to run when container is active |
| deactivated | Event to run when the container is deactivated |
| moving | Event to run while tracker is moving |

```javascript
document.querySelector('.container').addEventListener('activated', (e) => { console.log(e) })           
```
