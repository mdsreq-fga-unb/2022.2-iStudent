import { useState } from 'react';
import { HeaderUser, Button } from '../../shared/components';
import { Container, FirstBody } from './styles';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from 'react-modal';
import { AddCourse, Course } from '../../types/course';
import createCourse from '../../shared/services/teachers/createCourse';
import editCourse from '../../shared/services/teachers/editCourse';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

const defaultValues = {
  contents: [] as string[],
  description: '',
  name: '',
  price: 0,
  totalHours: 0,
};

export const SignUpCourse = ({
  editMode,
  courseToEdit = {} as Course,
}: {
  editMode: boolean;
  courseToEdit?: Course;
}) => {
  const navigate = useNavigate();
  const [categorieName, setCategorieName] = useState('');
  const [course, setCourse] = useState(
    editMode ? courseToEdit : (defaultValues as AddCourse),
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setCategorieName(inputValue);
  };

  const handleAddCategory = () => {
    if (categorieName) {
      setCourse({
        ...course,
        contents: [...course.contents, categorieName],
      });
    }
    setCategorieName('');
  };

  const handleRemoveCategory = (index: number) => {
    const copy = [...course.contents];
    copy.splice(index, 1);
    setCourse({
      ...course,
      contents: copy,
    });
  };

  const handleAddCourse = async () => {
    try {
      if (editMode) {
        await editCourse(course as Course);
        navigate('/meus-cursos');
        alert(`Curso ${course.name} editado com sucesso!`);
      } else {
        await createCourse(course);
        alert(`Curso ${course.name} criado com sucesso!`);
      }
      setCourse(defaultValues as any);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <Container>
      <HeaderUser />
      <div className="columns-space">
        <FirstBody>
          <div className="course-title">
            <h1>{editMode ? 'Editar' : 'Cadastrar'} Curso</h1>
          </div>
          <div className="course-basic-info">
            <div className="course-name">
              <p>Nome do curso</p>
              <input
                type="text"
                value={course.name}
                name="name"
                placeholder="Nome que aparecerá no seu curso"
                onChange={e =>
                  setCourse({
                    ...course,
                    name: e.target.value,
                  })
                }
              />
            </div>
            <div className="course-description">
              <p>Descrição</p>
              <textarea
                value={course.description}
                placeholder="Resuma o que contém no seu curso"
                onChange={e =>
                  setCourse({
                    ...course,
                    description: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="additional-data-title">
            <h1>Dados Adicionais</h1>
          </div>
          <div className="course-duration-area">
            <span>Duração total do curso</span>
            <div>
              <input
                value={course.totalHours}
                type="number"
                placeholder="Carga Horária"
                onChange={e =>
                  setCourse({
                    ...course,
                    totalHours: parseInt(e.target.value, 10),
                  })
                }
              />
            </div>

            <span>Valor do Curso</span>
            <div>
              <input
                value={course.price}
                type="number"
                placeholder="Preço"
                onChange={e =>
                  setCourse({
                    ...course,
                    price: parseInt(e.target.value, 10),
                  })
                }
              />
            </div>
          </div>
          <div className="categories">
            <span>Categoria do Curso</span>
            <input
              type="text"
              value={categorieName}
              placeholder="Digite a categoria"
              onChange={onChange}
            />
            <button onClick={handleAddCategory}>Adicionar</button>
            {course.contents.map((category, index) => (
              <div className="categories-add">
                <p>{category}</p>
                <div>
                  <DeleteIcon
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleRemoveCategory(index)}
                  />
                </div>
              </div>
            ))}
          </div>
          <Button className="save-button" onClick={handleAddCourse}>
            Salvar
          </Button>
        </FirstBody>
      </div>
    </Container>
  );
};
