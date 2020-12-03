# PRDXN Framework's Usage Guide: #

## What is this repository for? ##
Repository has been created for providing PRDXN's boilerplate for Projects.

## How do I get set up? ##
* Clone the package.
* Checkout to branch dev-responsive for Responsive projects and dev-static for Static projects.
* Remove the .git folder.
* Initialize git for your project.

## Detailed Usage Guide ##
- Remove the .git folder which accompanies on cloning the repository. This is important as you'll be developing your project using this framework and pushing it to the online repository chosen by your PM/Client.
- Do not remove the License embedded in any file.
- Vendor folder should only be used if the dependencies cannot be found on bower.
- Delete plugin.js and Vendor folder if you won't be using it.
- Delete Normalize.css since it's for Developer's to understand what normalize.css does. Normalize.min.css should be used.
- Bootstrap projects do not need normalize.css since it's already embedded in bootstrap.css.
- Delete README.md file before uploading to production site. This file is for PRDXN's use only.
- Remove Google Analytics Code if you do not intend to use it.
- The folder bower_components will always be ignored. The new Developer pulling the code from the Version Control System should be provided with the bower.json file. All he should do is type "bower install" by opening the command prompt in current project directory after pulling the code.
- The other developer should know that if he is installing a new package using bower, then he should install it in a following way: bower install <package_name> -S. -S has to be added since we want the package name to be listed in bower.json file.
