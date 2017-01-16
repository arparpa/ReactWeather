var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var {temp, location} = this.props;
     temp = (temp-32)/1.8;
     temp = temp.toFixed(1);
    return (
      <h3>It's it {temp} in {location}.</h3>
    )
  }
});

module.exports = WeatherMessage;
