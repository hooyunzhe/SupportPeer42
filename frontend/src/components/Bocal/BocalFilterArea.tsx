import {
  useSelectedTech,
  useSelectedBuilding,
  useSelectedOpen,
  useSelectedClosed,
  useSelectedFlag,
  useUtilActions,
} from '@/lib/stores/useUtilStore';
import { Chip, Flex } from '@mantine/core';

export default function BocalFilterArea() {
  const selectedTech = useSelectedTech();
  const selectedBuilding = useSelectedBuilding();
  const selectedOpen = useSelectedOpen();
  const selectedClosed = useSelectedClosed();
  const selectedFlag = useSelectedFlag();
  const {
    setSelectedTech,
    setSelectedBuilding,
    setSelectedOpen,
    setSelectedClosed,
    setSelectedFlag,
  } = useUtilActions();

  return (
    <Flex
      w='100%'
      py='1vh'
      my='3vh'
      justify='center'
      gap='3vw'
      bg={'linear-gradient(90deg, darkgreen 10%, darkblue 100%)'}
      style={{
        borderRadius: '15px',
      }}
    >
      <Flex>
        <Chip
          checked={selectedTech}
          onChange={() => setSelectedTech(!selectedTech)}
        >
          TECH
        </Chip>
        <Chip
          checked={selectedBuilding}
          onChange={() => setSelectedBuilding(!selectedBuilding)}
        >
          BUILDING
        </Chip>
      </Flex>
      <Flex>
        <Chip
          checked={selectedOpen}
          onChange={() => setSelectedOpen(!selectedOpen)}
        >
          OPEN
        </Chip>
        <Chip
          checked={selectedClosed}
          onChange={() => setSelectedClosed(!selectedClosed)}
        >
          CLOSED
        </Chip>
      </Flex>
      <Chip
        checked={selectedFlag}
        onChange={() => setSelectedFlag(!selectedFlag)}
      >
        BOCAL
      </Chip>
    </Flex>
  );
}
