# Adding content
There are two 'types' of content on this site: events, and videos.  You can add content of these types by creating new files in their respective folders.  Each file must also start with specific front matter, so the site knows how to generate the content.

Lastly, each file is a Markdown file, and requires a certain naming convention.  Each file must start with a date in the following format:
YYYY-MM-DD
**AND**
There can not be any spaces in the file name, use dashes instead
**AND**
each file must end with the file extension .md

For example, the following would be a valid file name:
2016-03-20-The-Chelsea-Symphony.md


## Adding Events
Events are placed in the _performance folder.  The way the files are named are arbitrary, so long as it follows the rules above.  For your own sanity, it might make sense to name the files with the performance dates so you can easily see the performances in order.

The front matter in each file is required, though the site won't return an error is theres an issue.  To maintain consistency, copy the front matter from a file that you know works.

The front matter should include the following:
```
---
performance_date: 2016-03-11
group: "The Chelsea Symphony"
group_link: "http://chelseasymphony.org/concert/threshold"
---
```

The 'performance_date' value corresponds to the date shown on the site.  The 'group' value corresponds to the group name shown.  The 'group_link' is the link that is added to the group name.  This value is optional.

## Adding Videos
Videos are placed in the _video folder.  The videos files need to follow the naming convention above.  The front matter should include the following:
```
---
video_title: Samuel Barber, Medea<br/> Op. 23. Nos. 1 &amp; 2
video_link: https://www.youtube.com/embed/kzqOJy8fxRE
weight: 1
---
```

The 'video_title' value corresponds to the title shown.  You can add html line breaks here to get the title to display as you wish.  The 'video_link' corresponds to the embed URL from YouTube.  You can also use any video platforms embed links.  The 'weight' value corresponds to where you want the given video to appear in the list of videos.  The list is sorted in ascending order, from 0 up.

# Using Markdown
This is site is built using Jekyll, which uses Markdown files to store its content.  Each time a new Markdown file is pushed to the site, Git Hub uses the information in the Markdown file to render the site.

Markdown files use a number of shorthand helpers which can be found [here](https://guides.github.com/features/mastering-markdown/)

Note that these are only in effect in the body of a Markdown file, not in the front matter.


