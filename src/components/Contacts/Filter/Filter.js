import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const Filter = ({ onSetFilter, filter }) => {
  return (
    <>
      <Typography variant="h6" component="span" sx={{ flexGrow: 1, mb: 1 }}>
        Find contacts by name
      </Typography>
      <label>
        <TextField
          size="small"
          type="text"
          onChange={onSetFilter}
          value={filter}
          name="filter"
        />
      </label>
    </>
  );
};
export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onSetFilter: PropTypes.func.isRequired,
};
