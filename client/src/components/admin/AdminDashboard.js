import React from "react";
import "./css/adminDashboard.css";
const AdminDashboard = () => {
  return (
    <div className="container">
      <div className="dashboard">
        <div className="row">
          <div className="col-2 dashborad_left">
            <div className="dashborad_left_header">Menu</div>
            <div className="dashborad_left_menu">
              <div className="dashborad_left_menu_item">User</div>
              <div className="dashborad_left_menu_item">Notices</div>
              <div className="dashborad_left_menu_item">CreateNotice</div>
            </div>
          </div>
          <div className="col-10 dashborad_right">
            <div className="dashborad_right_header">Content</div>
            <div className="dashborad_right_content">
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
                    <th scope="row">3</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                      <button type="button" className="btn btn-primary">
                        Primary
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>
                      <button type="button" className="btn btn-primary">
                        Primary
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
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
