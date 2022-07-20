import dateFormat from "dateformat";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function StaffDetail({ selectedStaff }) {
  if (selectedStaff) {
    return (
      <>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/staffs">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{selectedStaff.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="row staffDetail">
          <img
            className="col-md-3 col-sm-4 col-6"
            src={selectedStaff.image}
          ></img>
          <div className="col-md-9 col-sm-8 col-6">
            <h4>Họ và tên: {selectedStaff.name}</h4>
            <p>Ngày sinh: {dateFormat(selectedStaff.doB, "dd/mm/yyyy")}</p>
            <p>
              Ngày vào công ty:{" "}
              {dateFormat(selectedStaff.startDate, "dd/mm/yyyy")}
            </p>
            <p>Phòng ban: {selectedStaff.department.name}</p>
            <p>Số ngày nghỉ còn lại: {selectedStaff.annualLeave}</p>
            <p>Số ngày đã làm thêm: {selectedStaff.overTime}</p>
          </div>
        </div>
      </>
    );
  } else {
    return <div>Bấm vào tên nhân viên để xem thông tin</div>;
  }
}
export default StaffDetail;
