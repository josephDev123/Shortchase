import axios from "axios";
import { useQuery} from 'react-query'

export async function postLoader(){
//    const {error, isError, isLoading, data} = useQuery(['posts'], posts);
//    return  {error, isError, isLoading, data}
const postsRes = await posts()
return postsRes
}


async function posts(){
    try {
        const posts = await axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts'
        })
        const postResult = await posts.data;
        return postResult
    } catch (error) {
        return 'something went wrong';
    }
    
}