import { useSelector } from 'react-redux';
import { selectError } from 'store/Slice/selectors';

export const Error = () => {
  const error = useSelector(selectError);
  return <>{error && <h2>Error: {error}</h2>}</>;
};
