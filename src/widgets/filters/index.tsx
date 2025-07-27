import { FiltersEnum } from '@app/enums';
import { updateFilter } from '@entities/model/dashboard/slice';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useAppDispatch } from '@shared/lib/hook/reduxHooks';

const Filters = () => {
  const dispatch = useAppDispatch()

  return (
    <Box 
      sx={{width: '100%', mb: 3 }}
    >
      <Button
        sx={{ m: '0px 5px' }}
        variant='outlined'
        onClick={() => {
          console.log(1);
          
          dispatch(updateFilter(FiltersEnum.monthly))
        }}
      >
        Monthly
      </Button>
      <Button
        sx={{ m: '0px 5px' }}
        variant='outlined'
        onClick={() => {
          console.log(2);

          dispatch(updateFilter(FiltersEnum.quarterly))
        }}
      >
        Quarterly
      </Button>
      <Button
        sx={{ m: '0px 5px' }}
        variant='outlined'
        onClick={() => {
          console.log(3);
          
          dispatch(updateFilter(FiltersEnum.yearly))
        }}
      >
        Yearly
      </Button>
    </Box>
  );
}
 
export default Filters;