import PuffLoader from 'react-spinners/PuffLoader';
import { LoaderWrapper } from './Loader.styles';

export const Loader = ({ loading }) => {
    return (
        <LoaderWrapper>
            <PuffLoader loading={loading} color={'#727273'} size={400} />
        </LoaderWrapper>
    );
};
