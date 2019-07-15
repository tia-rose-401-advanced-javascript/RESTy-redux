import React from 'react';

/**
 * Footer class/component
 * @description renders a p tag that is inside a section tag that is inside a footer tag
 */

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <section>
          <p>&copy;2019 Code Fellows</p>
        </section>
      </footer>
    );
  }
}

export default Footer;
