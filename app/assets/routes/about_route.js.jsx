define(['bower/react'], function (React) {
  'use strict';

  return React.createClass({
    render: function () {
      return (
        <div>
          <h1>About</h1>
          <p>
            I care a lot about my clothing. Here are some criteria:
          </p>
          <ul>
            <li>
              <strong>Functionality:</strong>
              I should be able to run to work comfortable (in case Im late),
              breathable, versatile, quick-drying, warm
            </li>
            <li>
              <strong>Appearance:</strong>
              how confident I feel in my clothing,
              how much my girlfriend can stand being with me in public
            </li>
            <li>
              <strong>Durability:</strong>
              I want the clothing to withstand multiple wears before a wash,
              Hopefully the clothing also lasts a long time in general
            </li>
            <li>
              <strong>Price Point:</strong>
              I&rquo;m willing to pay money for quality, but I want to not
              spend too much and the hit the point before diminishing returns
            </li>
          </ul>
        </div>
      );
    }
  });
});
