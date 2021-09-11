import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { tweet } from '../components/utils/tweetRequests';

export const VerifyPage = () => {
  const [isVerified, setisVerified] = useState(false);
  const id = useParams();
  useEffect(() => {
    console.log(id.hash);
    // const verify = tweet().
  }, []);
  return <div>Verified</div>;
};
