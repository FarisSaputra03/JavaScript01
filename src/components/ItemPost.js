import Link from 'next/link'
function ItemPost({post}) {
  return (
    <div key={post.id} className="p-4 rounded-sm bg-slate-600 text-white">
        <h5>{post.title}</h5>
       <Link 
       class="text-blue-500 text-sm" 
       href={`/blog/${post.id}`}>
        Learn more</Link>
    </div>
  )
}

export default ItemPost;
