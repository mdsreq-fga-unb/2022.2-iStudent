import { Courses } from "./styles";
import { Rating } from "@material-ui/lab";

type CourseCardProps = {
  name: string;
  teacher: string;
  raiting: number;
  currentPrice: number;
  originalPrice: number;
};

export const CoursesCard = (props: CourseCardProps) => {
  return (
    <Courses>
      <div className="course-card">
        <div className="course-img">
          <img src="" alt="" />
        </div>
        <div className="course-name">
          <span>{props.name}</span>
        </div>
        <div className="course-teacher">{props.teacher}</div>
        <div className="course-stars">
          <span>{props.raiting}</span>
          <Rating
            size="small"
            name="half-rating"
            defaultValue={0}
            value={props.raiting}
            precision={0.1}
          />
        </div>
        <div className="course-price">
          <span className="current-price">
            {props.currentPrice.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <span className="original-price">
            <s>
              {props.originalPrice.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </s>
          </span>
        </div>
      </div>
    </Courses>
  );
};
