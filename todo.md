#CLEARBLOG TODO
- add view article
- add images
- wysiwyg
- externalise css to a service
- restyling
- test automation
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

externalise index.htm into express so independent of mount point

shared menu data service

remove and add dist/ folder
change mount path to be configurable

fix source map



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
