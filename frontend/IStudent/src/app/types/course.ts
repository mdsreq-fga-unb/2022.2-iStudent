export interface AddCourse {
  name: string;
  description: string;
  contents: string[];
  price: number;
  totalHours: number;
}

export interface Course extends AddCourse {
  id: string;
  courseRating: number;
}
