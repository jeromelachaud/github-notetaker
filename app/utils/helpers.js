var axios = require('axios');

function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos');
};

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username);
};

var helpers = {
  getGithubInfo: function(){
    return axios.all([getRepos(username), getGithubInfo(username)])
      .then(function(arr) {
        return {
          repos: arr[0].data,
          repos: arr[1].data
        }
      });
  }
};

module.exports = helpers;
