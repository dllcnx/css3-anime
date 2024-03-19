var ghpages = require('gh-pages');

ghpages.publish('./', {
  branch: 'gh-pages',
  repo: 'https://github.com/dllcnx/css3-anime.git',
  message: 'deploy',
}, function (err) {
  console.log(err);
});