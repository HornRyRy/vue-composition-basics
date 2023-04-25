//directives
//needs to start with v

// this is a global directive that we can use anywhere in the app,
// ..as long as we have exports/imports set up properly

export const vAutofocus = {
    mounted: (el) =>{
      el.focus()
    }
  }