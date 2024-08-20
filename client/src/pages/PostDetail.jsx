import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    <section className='post-detail'>
      <div className='container post-detail__container'>
        <div className='post-detail__header'>
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail__thumbnail">
           <img src={Thumbnail} alt=""></img>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem libero debitis cum vitae sit nobis sint laudantium accusamus enim dolores. Recusandae maiores quae eum architecto suscipit dolores consequatur a cupiditate officia autem ipsa fuga, necessitatibus iusto fugit. Facilis, ad consectetur?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ex facere aut id vero quas officia cupiditate dolore rerum omnis nesciunt, deleniti voluptatum animi. Possimus dolore facilis facere repudiandae exercitationem. Ipsa eaque quas nemo provident cumque animi ea fugit ex voluptatem ipsum? Debitis sunt blanditiis magni? Nam ipsum sed architecto amet minima beatae voluptatem error!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora consequuntur eveniet ea voluptates eum vel exercitationem voluptatem fuga quo. Laboriosam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam maxime assumenda dolorem, obcaecati cupiditate at dolorum excepturi placeat eius eaque eligendi modi enim eos asperiores temporibus vero odit recusandae! Nisi dicta molestias architecto ex odit pariatur esse? Quisquam veritatis, voluptas recusandae numquam tempora voluptatibus facere molestiae dolorum eligendi eum itaque repellat, ea ducimus hic animi commodi explicabo iure. Maiores vel quasi ab, omnis neque totam porro mollitia distinctio facere hic debitis. Eius, distinctio. Amet dolor ullam, quam nemo nobis provident non numquam unde repellat impedit a tenetur nulla recusandae adipisci debitis illum porro aperiam at sequi perferendis? Commodi a accusantium dolore. Modi tenetur natus fugiat recusandae, itaque animi harum cumque error quia dicta eveniet? Veritatis sit quae repellendus quasi eos est minus saepe consectetur nisi, commodi, error iusto dicta obcaecati cupiditate. Voluptatum possimus tempore nesciunt esse itaque? Recusandae, odio. Saepe velit libero officia ipsam? Consequatur, maxime sit, fuga beatae neque earum, illo accusantium est ad sequi deleniti eligendi natus quaerat accusamus similique explicabo minus esse molestias dignissimos! Vitae odio delectus in consequuntur veritatis et amet laudantium odit adipisci incidunt, harum doloremque veniam porro iusto? Veniam commodi officiis, tempora sit aliquid consequuntur porro placeat magnam eligendi quam ut ex quibusdam temporibus?
        </p>
      </div> 
    </section>
  )
}

export default PostDetail