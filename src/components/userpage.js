import React from "react";
import "./userpage.css"


const userpage = () => {
  return (

    <div className="main_container">
      <br />
      <br />
      <br />
      <div className="page-heading">
        <div className="media clearfix">
          <div className="media-left pr30">
            <a href="#">
              <img className="media-object mw150" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="image" />
            </a>
          </div>
          <div className="media-body va-m">
            <h2 className="media-heading">Tarun Jain
              <small> - Profile</small>
            </h2>
            <p className="lead">Lorem ipsum dolor sit amet ctetur adicing elit, sed do eiusmod tempor incididunt</p>
            <div className="media-links">
              <ul className="list-inline list-unstyled">
                <li>
                  <a href="#" title="facebook link">
                    <span className="fa fa-facebook-square fs35 text-primary"></span>
                  </a>
                </li>
                <li>
                  <a href="#" title="twitter link">
                    <span className="fa fa-twitter-square fs35 text-info"></span>
                  </a>
                </li>
                <li className="hidden">
                  <a href="#" title="linkedin link">
                    <span className="fa fa-linkedin-square fs35 text-info"></span>
                  </a>
                </li>
                <li className="hidden">
                  <a href="#" title="github link">
                    <span className="fa fa-github-square fs35 text-dark"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="panel">
          </div>
          <div className="panel">
            <div className="panel-heading">
              <span className="panel-icon">
                <i className="fa fa-trophy"></i>
              </span>
              <span className="panel-title"> My Skills</span>
            </div>
            <div className="panel-body pb5">
              <span className="label label-warning mr5 mb10 ib lh15">Default</span>
              <span className="label label-primary mr5 mb10 ib lh15">Primary</span>
              <span className="label label-info mr5 mb10 ib lh15">Success</span>
              <span className="label label-success mr5 mb10 ib lh15">Info</span>
              <span className="label label-alert mr5 mb10 ib lh15">Warning</span>
              <span className="label label-system mr5 mb10 ib lh15">Danger</span>
              <span className="label label-info mr5 mb10 ib lh15">Success</span>
              <span className="label label-success mr5 mb10 ib lh15">Ui Design</span>
              <span className="label label-primary mr5 mb10 ib lh15">Primary</span>

            </div>
          </div>

          <div className="panel">
            <div className="panel-heading">
              <span className="panel-icon">
                <i className="fa fa-pencil"></i>
              </span>
              <span className="panel-title">About Me</span>
            </div>
            <div className="panel-body pb5">

              <h6>Experience</h6>

              <h4>Facebook Internship</h4>
              <p className="text-muted"> University of Missouri, Columbia
                <br /> Student Health Center, June 2010 - 2012
              </p>

              <hr className="short br-lighter" />

              <h6>Education</h6>

              <h4>Bachelor of Science, PhD</h4>
              <p className="text-muted"> University of Missouri, Columbia
                <br /> Student Health Center, June 2010 through Aug 2011
              </p>

              <hr className="short br-lighter" />

              <h6>Accomplishments</h6>

              <h4>Successful Business</h4>
              <p className="text-muted pb10"> University of Missouri, Columbia
                <br /> Student Health Center, June 2010 through Aug 2011
              </p>

            </div>
          </div>
        </div>



      </div>












    </div>
  );
};

export default userpage;
