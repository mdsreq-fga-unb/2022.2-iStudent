import { useEffect, useState } from 'react';
import getNotifications, {
  IAulaNotification,
} from '../services/student/getNotifications';

const useNotifications = () => {
  const [classes, setClasses] = useState<IAulaNotification[]>([]);

  useEffect(() => {
    getNotifications().then(classes => setClasses(classes));
  }, []);

  return {
    classes,
    setClasses,
  };
};

export default useNotifications;
