import React from "react";
import "./css/adminDashboard.css";
const AdminDashboardTable = (props) => {
  return (
    <div>
      <div className="row justify-content-around dashborad_right_menu">
        <div className="col-2 dashborad_right_menu_item">
          <b>{props.totalUser}</b>
          <div>
            <i class="fas fa-users"></i> &nbsp;{props.userCount}
          </div>
        </div>
        <div className="col-2 dashborad_right_menu_item">
          <b>{props.verifiedUser}</b>
          <div>
            <i class="fas fa-users-cog"></i> &nbsp;{props.noOfVerifiedUser}
          </div>
        </div>
        <div className="col-2 dashborad_right_menu_item">
          <b>{props.teacher}</b>
          <div>
            <i class="fas fa-comments"></i> &nbsp;{props.noOfTeacher} 
          </div>
        </div>
        <div className="col-2 dashborad_right_menu_item">
          <b>{props.student}</b>
          <div>
            <i class="fas fa-comments"></i> &nbsp;{props.noOfStudent} 
          </div>
        </div>
      </div>
      <div className="dashborad_right_table">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">User</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>
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
            <tr style={{ width: "30%" }}>
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
  );
};

export default AdminDashboardTable;
