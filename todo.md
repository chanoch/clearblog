#CLEARBLOG TODO 
- add link to link href

- add post metadata
- check todos
- check no js version
- prev next buttons
- back navigation?
- auto bump release versions
- fix uglify
- restore minified release in simple-react-router
- convert action configs into classes
- sort out error page
- implement error page as express route
- document SimpleReactRouter
- ignore control, alt, shift modifiers for clicks in Link
- define a default render component in case one is not configured
- implement null driver as 'abstracty' parent class of actions?
- scan for actions rather than configured? 
- scan for state rather than configured?
- externalise index.htm into express so independent of mount point
- sort out chanoch-com-components in clearblog-components. 
- is it possible to have a dev entry point versus a prod entry point in libraries?
- version bumps
- failed loading
- unit testing
- externalise css to a service
- dates
- topics
- add support for code blocks
fix source map - is this for dev only? Change express to support.
- test automation (travis?)

- add images
- wysiwyg
- restyling
- externalise title in ListPostsPage and ViewPostPage
- externalise navigation handlers (viewpost in ListPostsPage)
- support paging
- move posts to db
 - add configuration for db (user token)

Turn into a class so configuration can be injected
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
- proptypes
- only deploy mins to npm
- exclude react from bundle
- add view article
- add in article title to URL
- change post to content or similar
- externalise URL creation for viewPost
