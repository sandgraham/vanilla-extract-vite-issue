## Start

```
> npm i
> npm run dev
```

## Issues

Before replicating issues, start the dev server and confirm there is a pretty indigo button on the page.

### Issue 1: Removing declarations

Comment out any declaration in the `pretty` CSS object in `./src/styles.css.ts` (the generated class is attached to our button already).

Save the file and wait for HMR to complete. The original declaration will still remain.

Refreshing the page will "reset" this behavior.

### Issue 2: Theme values don't update if set to "original" value

Change the `brand` property to any other color in the theme declaration in `./src/theme.css.ts`. Save the file and confirm HMR worked.

Now change the value back to `"mediumslateblue"`. The button element will not update this time.

Refreshing the page will "reset" this behavior.
