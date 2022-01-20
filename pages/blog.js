import {getSession} from "next-auth/react";

const Blog = ({data}) => {
    return (
        <div>
            <h1>Blog page - {data}</h1>
        </div>
    );
};

export const getServerSideProps = async (context) => {
    const session = await getSession(context);

    if(!session){
        return {
            redirect : {
                destination : `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
                permanent : false
            }
        }
    }

    return {
        props : {
            data : session ? ' List of 100 personalized blogs' : 'List of free blogs'
        }
    }
}

export default Blog;