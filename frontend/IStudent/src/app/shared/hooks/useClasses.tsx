import { useEffect, useState } from 'react';
import getAllClassseByTeacher, {
  IAula,
} from '../services/teachers/getAllClasses';

const useClasses = () => {
  const [classes, setClasses] = useState<IAula[]>([]);

  useEffect(() => {
    getAllClassseByTeacher().then(classes => setClasses(classes));
  }, []);

  return {
    classes,
    setClasses,
  };
};

export default useClasses;
