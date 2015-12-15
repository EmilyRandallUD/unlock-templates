# Snippets

For useful widgets and beautiful styling only some additional html does the trick. Below, there are custom snippets ready-to-use in your EN template. Just copy a snippet of your choice, select "HTML" in the EN editor and paste it there. Once you've pasted the snippet you may change back to "normal" to continue editing. Save and see the magic happen!

## a word about page building in EN

In the "design" editor, make sure there are no spaces between the elements of each column. Start placing elements at the top and leave no empty fields between them, as this would cause EN to insert extra space elements or even divide the columns into several columns which could produce some really weird effects.

Also, when copying text from a word processor (e.g. Word or Pages) to an EN copy box, be careful not to copy any formatting and styling as they would override the template. Always use the "Paste as plain text" button in the EN text editor or prepare your texts in plain text format before pasting them to EN (e.g. by pasting them to Notepad first and copying them from there).


## big background image

```html
<div class="background-image">
  your background image
</div>
```

Just upload your image to a copy box and place this wrapper around it.

## background info

In the left column:

```html
<a class="info-toggle">More info</a>
```

In the right column:

```html
<div id="background-info">
  <h2>Background info</h2>
  <p>more more more info</p>
</div>
```

The `info-toggle` element enables the "show more info" logic. A click on the toggle shows the element with the id `background-info` on the right.

## videos

```html
<div class="video">
  Paste the embed code from youtube, vimeo, … here
</div>
```

This makes your videos responsive, so they will always fit on the screen (even on tiny mobile screens).

## progress bar

```html
<div class="pgbar-thermometer" data-target="250" data-start="0">
  <div class="t_body">
    <div class="t_level">
      <span class="t_current">0</span>
    </div>
  </div>
  <div class="scale">
    <span class="min-count">0</span>
    <span class="max-count">250</span>
  </div>
</div>
```

Change the value of data-target according to your needs. Change data-start to add an initial value for the progress bar, e.g. offline supporters. If the data-attributes are missing, the default values shown above will be used instead.

Unfortunately, this is a little tricky because the EN editor keeps deleting all data-tags. To save them, you'll have to disable the editor first by clicking the top left x-button. Feel very welcome to complain to Engaging Networks about it!

## thank you page

### share links

These are social share buttons for Facebook, Twitter and email sharing:

```html
<ul class="share-links">

  <li class="facebook">
    <a class="button" href="https://www.facebook.com/sharer.php?u={{urlencoded url}}" title="Share this via Facebook!" target="_blank" data-share="facebook">
      <i></i><span>Facebook</span>
    </a>
  </li>

  <li class="twitter">
    <a class="button" href="http://twitter.com/share?text={{urlencoded share text}}&amp;url={{urlencoded url}}" title="Share this via Twitter!" target="_blank" data-share="twitter">
      <i></i><span>Twitter</span>
    </a>
  </li>

  <li class="email">
    <a class="button" href="{{EN email share url}}" title="Share this via E-Mail!" target="_blank" data-share="email">
      <i></i><span>E-Mail</span>
    </a>
  </li>

</ul>
```

Make sure to replace the `{{placeholder parts}}` with the real urls and share texts! The name between `<span>name</span>` is what's displayed on the button itself, the `title` pops up when hovering over the button. (`<i></i>` makes space for the icon, which will be inserted automatically.)

### submission tracking

Place this snippet on the thank you page to track submissions (it's hidden so it doesn't matter if it is inside a wrapper or not):

```html
  <input type="hidden" name="track-submission" value="1">
```