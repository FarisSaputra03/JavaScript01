import Link from "next/link";
import GetPosts from "@/components/GetPosts";
import ItemPost from "@/components/ItemPost";

async  function Blog() {
    const blog = await GetPosts();
  return (
    <>
   <div className="container mx-auto py-5">
    <h1 className="text-2lg font-bold text-center mb-5">
        Blog WEBDEVINDO
        </h1>
   <div className="grid grid-cols-4 gap-4">
    {blog.map((post, i)=>{
       return <ItemPost post={post} key={post.id}/>

       
    })}
   </div>
   </div>
   </>
  )
}

export default Blog;