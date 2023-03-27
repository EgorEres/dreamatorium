import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { usePlayersStore } from '../../entities/players/players';
import { useProfileStore } from '../../entities/profile/profile';
import { Button } from '../../shared/ui-kit/button/Button';
import { Input } from '../../shared/ui-kit/input/Input';
import styles from './initial.module.scss';

export const Initial = () => {
  const [name, setName] = useState<string>('');
  const { addPlayer } = usePlayersStore();
  const { updateProfile } = useProfileStore();
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    if (name) {
      const id = uuidv4();
      addPlayer({ id, name });
      updateProfile({ id, name });
      navigate('./game');
    }
  }, [name, addPlayer, updateProfile, navigate]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value), []);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Введите имя</h1>
      <Input onChange={handleInputChange} />
      <Button name="Старт" onClick={handleClick} />
    </div>
  );
};
