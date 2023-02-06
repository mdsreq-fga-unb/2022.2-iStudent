export interface AddCourse {
  name: string;
  description: string;
  contents: string[];
  price: number;
  totalHours: number;
  teacher: {
    name: string;
  };
}

export interface Course extends AddCourse {
  id: string;
  courseRating: number;
  teacherId: number;
}
