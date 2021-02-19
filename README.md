# Landing Page Project

## Table of Contents

* [Features](#Features)

## Features
Based on [starter files](https://github.com/udacity/fend/tree/refresh-2019/projects/landing-page) from Udacity FEND repo.

This projects is a a multi-section landing page, with a dynamically constructed navigation menu based on the amount of content that is added to the page.
### Dynamic Navigation Menu
- A navigation menu entry is created for each section in the page with a `data-nav` attribute
- The link text is based on the attribute's value
- Clicking on the link will scroll the related ssection into the view port with a smooth scrolling effect
### Active Section and Navigation Link Highlight
- The section closest to the top edge of the view port is highlighted using the css class `your-active-class`
- If two or more sections are in the view port, the one with its top edge directly _below_ viewport's top edge is highlited
- If a section is taking the entirety of the viewport, it will remain highlited untill the next section comes into view
- The section's navigation link is also highlighted using the css class `active-nav-link`

## Function Documentation
### buildNavMenu()
- Can be called at run time to construct/reconstruct the navigation menu by creating a nav menu entry for each `section` in the page with `data-nav` attribute
- Each entry is constructed as
```
<li>
    <a href="#sectionID" class="menu__link" data-navlink="sectionID">
	    data-nav-value
    </a>
</li>
```
    *sectionID: ID of linked section
	*data-nav-value: Text value of the section's data-nav attribute
- The navlink data attribute is used to highlight the link when its section is inside viewport
- After the menu is constructed, it's appended to the element with `id="navbar__list"` which should be a `ul` element

### highlightActiveSection()
- Highlights the section closest to the top edge of the view port by adding the css class `your-active-class` to it and removing it from other sections

### scrollToAnchorID(a)
- Can be added to the click event of any anchor linked to an element ID to smoothly scroll vertically to the element upon clicking the anchor
- Tales event object parameter {a} passed from the clicked <a> element
- Uses the `Window.scroll()` method to guarantee compatibility with older browsers that don't support `Element.scrollIntoView()` smooth behavior

## Version History
- Initial commit
- Add build navigation menu function
- Add highlight active section
- fix: Highlight active section if it's larger than the viewport
- Add smooth scroll to nav links
- fix: Highlight active section if its top edge matches viewport top