# tiny-snack
Dead simple super small snackbar.

This is a very simple, very light weight snackbar implementation with no dependencies. To use, just link to tiny-snack.js and call TinySnack().

## Example

```
TinySnack("This is the text that will show up in the snackbar.", "LINK TEXT", function() { 
    alert("This will appear when you click 'LINK TEXT.'"); 
});

//OR

TinySnack({
  "text": "This is the text that will show up in the snackbar.",
  "link": "LINK TEXT",
  "onclick": function() { alert("This will appear when you click 'LINK TEXT.'"); }
});
```
