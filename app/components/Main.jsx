var React = require('react');
var Nav = require('Nav');

//Stateless Component
var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Nav />
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
