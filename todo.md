#CLEARBLOG TODO 
## NOW
- serve blog mountpath from express
- externalise blog service to use express

## NEXT VERSION
- externalise css to a service

## LATER
- add link to link href

- page title
- separate config type for pages and in-page actions
- proptypes
- document SimpleReactRouter

- simplify actions to remove redux specifics
- update npm release of simple router

- currying review
- immutable.js
- calendar view of posts
- topic cloud
- document the idea
- managing top level navigation to non-blog parts
- how to support navigation (menu ids?)
- check no js version
- prev next buttons
- back navigation?
- auto bump release versions
- fix uglify
- restore minified release in simple-react-router
- sort out error page
 -- what happens when an error is thrown? (SimpleReactRouter.js)
- define a default render component in case one is not configured
- scan for actions rather than configured? 
- scan for state rather than configured?
- is it possible to have a dev entry point versus a prod entry point in libraries?
- failed loading
- unit testing
- add support for code blocks
fix source map - is this for dev only? Change express to support.
- test automation (travis?)
- check todos

- implement error page as express route
- ignore control, alt, shift modifiers for clicks in Link
- add images
- wysiwyg
- restyling
- externalise title in ListPostsPage and ViewPostPage
- externalise navigation handlers (viewpost in ListPostsPage)
- support paging
- move posts to db
 - add configuration for db (user token)

Add configuration of webapp from server (mountpath)

convert system to automated
 - components can be parsed or json config
 - mount path (in menu, links, express)


shared menu data service

remove and add dist/ folder


Dependencies
Notes
Story IDs

Having new posts list a markdown cheatsheet

Support markdown rendering in posts

Load posts from a standard folder

offline behaviour?
Handling lack of network connection

rematch? 

zero downtime deployment

#DONE
Style article summary list
css
- article
- article_body
- article_title (+h3)
remove first forward slash if exists to server
change mount path to be configurable
- Turn into a class so configuration can be injected
- proptypes
- only deploy mins to npm
- exclude react from bundle
- add view article
- add in article title to URL
- change post to content or similar
- externalise URL creation for viewPost
- add post metadata
    - dates 
    - topics
- externalise index.htm into express so independent of mount point
- sort out chanoch-com-components in clearblog-components. 
- convert to component
