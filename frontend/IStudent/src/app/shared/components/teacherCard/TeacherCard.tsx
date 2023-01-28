import { Teachers } from "./styles";
import { Rating } from "@material-ui/lab";
import { useNavigate } from "react-router-dom";

type TeacherCardType = {
  name: string;
  courseName: string;
  valueHour: number;
  rating: number;
};

export const TeacherCard = (props: TeacherCardType) => {
  const navigate = useNavigate();

  const handleTeacherDetailPage = () => {
    navigate('/detalhes-professor');
  }

  return (
    <Teachers onClick={handleTeacherDetailPage}>
      <div className="teacher-image">
        <img src="" alt="" />
      </div>
      <div className="teacher-details">
        <div className="teacher-name">
          <span>{props.name}</span>
        </div>
        <div className="teacher-course-name">
          <span>{props.courseName}</span>
        </div>
        <div className="value-hour">
          <span>
            {props.valueHour.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <span className="per-hour">por hora</span>
        </div>
        <div className="rating">
          <span>{props.rating}</span>
          <Rating
            size="small"
            name="half-rating"
            defaultValue={0}
            value={props.rating}
            precision={0.1}
          />
        </div>
      </div>
    </Teachers>
  );
};
