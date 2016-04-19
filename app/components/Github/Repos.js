var React = require('react');

var Repos = React.createClass({
  propTypes: {
      username: React.PropTypes.string.isRequired,
      repos: React.PropTypes.array.isRequired
  },
  render: function() {
    var repos = this.props.repos.map(function(repo, index) {
      return (
        <li className="list-group-item" key={index}>
          {repos.html_url && <h4><a href={repos.html_url} />{repo.name}</h4>}
          {repo.description && <p> {repo.description}</p>}
        </li>
      )
    })
    return (
      <div>
        <h3> User Repos </h3>
        <ul className="list-name">
          {repos}
          </ul>
      </div>
    )
  }
});


module.exports = Repos;
