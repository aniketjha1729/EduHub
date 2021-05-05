import React from "react";
import "./css/adminDashboard.css";
const AdminDashboard = () => {
  return (
    <div className="container">
      <div className="dashboard">
        <div className="row">
          <div className="col-2 dashborad_left">
          <br/>
            <div className="dashborad_left_header">
            <i class="fas fa-chalkboard-teacher" size="3x"></i> &nbsp;&nbsp;
              <b>EduHub</b>
            </div>
            <div className="dashborad_left_menu">
              <div className="dashborad_left_menu_item">User</div>
              <div className="dashborad_left_menu_item">Notices</div>
              <div className="dashborad_left_menu_item">CreateNotice</div>
            </div>
          </div>
          <div className="col-10 dashborad_right">
            <br />
            <div className="row justify-content-around dashborad_right_menu">
              <div className="col-2 dashborad_right_menu_item">
                <b>Total Users</b>
                <div>
                  <i class="fas fa-users"></i> &nbsp;50
                </div>
              </div>
              <div className="col-2 dashborad_right_menu_item">
                <b>Verified User</b>
                <div>
                  <i class="fas fa-users-cog"></i> &nbsp;25
                </div>
              </div>
              <div className="col-2 dashborad_right_menu_item">
                <b>Posts</b>
                <div>
                  <i class="fas fa-comments"></i> &nbsp; 120
                </div>
              </div>
            </div>
            <div className="dashborad_right_table">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                      <button type="button" className="btn btn-primary">
                        Primary
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>
                      <button type="button" className="btn btn-primary">
                        Primary
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>
                      <button type="button" className="btn btn-primary">
                        Primary
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                      <button type="button" className="btn btn-primary">
                        Primary
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>
                      <button type="button" className="btn btn-primary">
                        Primary
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>
                      <button type="button" className="btn btn-primary">
                        Primary
                      </button>
                      
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
