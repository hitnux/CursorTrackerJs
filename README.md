# CursorTracker
 

## Options

| Title  | Type  | Description  |
|---|---|---|
| id  | String  | The id of the tracker element  |
| container  | String  | Target container classes  |
| selector  | String  | Target content class  |

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
