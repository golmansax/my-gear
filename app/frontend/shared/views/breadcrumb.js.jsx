App.Shared.Breadcrumb = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.addons.PureRenderMixin],

    propTypes: {
      crumbs: React.PropTypes.array.isRequired
    },

    _renderCrumb: function (crumb, index) {
      var myClassNames = classNames({
        active: index === this.props.crumbs.length - 1
      });

      return (
        <li className={myClassNames} key={crumb.title}>
          {this._renderCrumbContent(crumb)}
        </li>
      );
    },

    _renderCrumbContent: function (crumb) {
      if (crumb.link) {
        return (
          <ReactRouter.Link {...(crumb.link)}>
            {crumb.title}
          </ReactRouter.Link>
        );
      }

      return crumb.title;
    },

    render: function () {
      return (
        <ol className='breadcrumb'>
          {this._renderCrumb({ title: 'Clothing', link: { to: 'clothing' } })}
          {this.props.crumbs.map(this._renderCrumb)}
        </ol>
      );
    }
  });
})();
