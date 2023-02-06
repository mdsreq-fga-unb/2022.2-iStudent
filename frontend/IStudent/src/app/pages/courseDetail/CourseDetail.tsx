import { TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../../contexts/User';
import { Button, HeaderUser } from '../../shared/components';
import deleteCourse from '../../shared/services/teachers/deleteCourse';
import getCourse from '../../shared/services/teachers/getCourse';
import { Course } from '../../types/course';
import { SignUpCourse } from '../signUpCourse/SignUpCourse';
import { Container, Divisor, FirstBody, SecondBody } from './styles';

export const CourseDetail = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const { user } = useUser();
  const [course, setCourse] = useState({} as Course);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (name) {
      getCourse({ name }).then(data => setCourse(data as any));
    }
  }, [name]);

  const handleDeleteCourse = async () => {
    try {
      await deleteCourse(parseInt(course.id, 10));
      navigate('/meus-cursos');
      alert('Curso deletado');
    } catch (error: any) {
      alert(error.message);
    }
  };

  const isOwnerTeacher = user?.id === course.teacherId;

  if (isOwnerTeacher && isEditing)
    return <SignUpCourse editMode={true} courseToEdit={course} />;

  return (
    <Container>
      <HeaderUser />
      <div className="detail-page-title">
        <h1>Detalhes do Curso</h1>
      </div>
      <Divisor>
        <FirstBody>
          <div className="course-name-container">
            <h1>{course.name}</h1>
          </div>
          <div className="teacher-name-container">
            <p>{course.teacher?.name || ''}</p>
          </div>
          <div className="info-container">
            <div className="category-container">
              <span>Categorias</span>
              <p>{course.contents?.join(',')}</p>
            </div>
            <div className="duration-container">
              <span>Duração</span>
              <p>{course.totalHours}h</p>
            </div>
          </div>
          <div className="description-container">
            <span>Descrição</span>
            <div>
              <p>{course.description}</p>
            </div>
          </div>
        </FirstBody>
        <SecondBody>
          <div className="image-container"></div>
          <div className="price-container">
            <p>
              {course.price?.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
          <div className="button-container">
            {isOwnerTeacher ? (
              <button onClick={() => setIsEditing(true)}>Editar</button>
            ) : (
              <button>Matricular-se Agora!</button>
            )}
            {isOwnerTeacher && (
              <Button onClick={handleDeleteCourse}>Excluir</Button>
            )}
          </div>
        </SecondBody>
      </Divisor>
    </Container>
  );
};
