import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Box } from '@mui/material';

const LoadingSkeleton = () => (
  <Box>
    <Skeleton height={200} />
    <Skeleton height={30} style={{ marginTop: 10 }} />
    <Skeleton height={20} />
  </Box>
);

export default LoadingSkeleton;
