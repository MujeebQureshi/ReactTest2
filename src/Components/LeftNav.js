import React from 'react';

class LeftNav extends React.Component {
	componentDidMount () {

	}
	
  render() {
    return (
		<div id="m_aside_left" className="m-grid__item	m-aside-left  m-aside-left--skin-dark ">
              {/* BEGIN: Aside Menu */}
              <div id="m_ver_menu" className="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark " data-menu-vertical="true" data-menu-scrollable="false" data-menu-dropdown-timeout={500}>
                <ul className="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
                  <li className="m-menu__item  m-menu__item--active" aria-haspopup="true">
                    <a href="/home" className="m-menu__link ">
                      <i className="m-menu__link-icon flaticon-line-graph" />
                      <span className="m-menu__link-title">
                        <span className="m-menu__link-wrap">
                          <span className="m-menu__link-text">
                            Dashboard
                          </span>
                          {/*<span className="m-menu__link-badge">
                            <span className="m-badge m-badge--danger">
                              2
                            </span>
                          </span>*/}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="m-menu__section">
                    <h4 className="m-menu__section-text">
                      Menu
                    </h4>
                    <i className="m-menu__section-icon flaticon-more-v3" />
                  </li>
                  <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" data-menu-submenu-toggle="hover">
                    <a href="/addnewproperty" className="m-menu__link m-menu__toggle">
                      <i className="m-menu__link-icon flaticon-layers" />
                      <span className="m-menu__link-text">
                        Add New Property
                      </span>
                      {/*<i className="m-menu__ver-arrow la la-angle-right" />*/}
                    </a>
                  </li>
                  
                </ul>
              </div>
              {/* END: Aside Menu */}
            </div>
		);
	}
}

export default LeftNav;
