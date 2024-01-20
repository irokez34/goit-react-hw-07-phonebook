import { useSelector } from 'react-redux';
import css from './Loader.module.css';
import { selectIsLoading } from 'store/Slice/selectors';

export const Loader = () => {
  const isLoading = useSelector(selectIsLoading);
  return <>{isLoading && <span className={css.loader}></span>}</>;
};
