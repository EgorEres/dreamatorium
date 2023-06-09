import { useGamesStore } from '../../entities/games';
import { Button } from '../../shared/ui-kit/button/Button';
import { PageWrapper } from '../../shared/ui-kit/page';

export const Games = () => {
  const { games, createGame } = useGamesStore();
  console.log(games);
  return (
    <PageWrapper>
      <div>
        <Button name="Cоздать игру" onClick={createGame} />
        <div>список игр куда можно присоеденится</div>
      </div>
    </PageWrapper>
  );
};
