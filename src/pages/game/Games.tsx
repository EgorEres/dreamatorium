import { useGamesStore } from '../../entities/games';

export const Games = () => {
  const { games } = useGamesStore();
  console.log(games);
  return (
    <div>
      <div>кнопка создать игру</div>
      <div>список игр куда можно присоеденится</div>
    </div>
  );
};
